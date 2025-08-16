"use client";

import Title from "@/components/dom/Title";
import { useTranslations } from "next-intl";
import React, { useEffect, useMemo, useState, Suspense } from "react";
import { useProductsStore, useSearchStore } from "@/zustand/store";
import { useGLTF, View } from "@react-three/drei";
import ProductPicture from "@/components/ui/ProductPicture";
import IconSwitcher from "@/components/ui/IconSwitcher";
import _ from "lodash";
import { usePagination } from "@/hooks/usePagination";
import { ProductsType } from "@/types/global";
import Pagination from "@/components/ui/Pagination";

// Lazy-load the Product component for 3D view
const Product = React.lazy(() => import("@/components/canvas/Product"));

function Page() {
  const t = useTranslations("Collection");
  const { searchQuery } = useSearchStore();
  const { Products } = useProductsStore();

  // Render only one product as 3D at a time
  const [activeRenderId, setActiveRenderId] = useState<number | null>(null);

  const filteredProducts = useMemo(() => {
    return _.filter(Products, (Product) =>
      _.includes(_.toLower(Product.name), _.toLower(searchQuery))
    );
  }, [Products, searchQuery]);

  const {
    currentData: currentProducts,
    totalItems,
    totalPages,
    currentPage,
    itemsPerPage,
    setCurrentPage,
  } = usePagination(filteredProducts, 15, [searchQuery]);

  useEffect(() => {
    currentProducts.forEach((product) => {
      useGLTF.preload(product.path);
    });
  }, [currentProducts]);

  // Handler to toggle which product is 3D
  const handleToggleRenderType = (id: number) => {
    setActiveRenderId((prevId) => (prevId === id ? null : id));
  };

  return (
    <section className="max-padd-container mt-36">
      <div className="max-padd-container2 ">
        <Title title={t("Title")} titleStyle="w-fit" HeaderStyle="h2" />
        <div className="grid gap-18 place-items-center grid-cols-1 sm:grid-cols-2 md:grid-cols-3 lg:grid-cols-4 xl:grid-cols-5 pt-16">
          {currentProducts.map((product: ProductsType) => {
            const is3DView = activeRenderId === product.id;
            return (
              <div
                key={product.id}
                className="relative w-[300px] h-[350px] cursor-pointer flex items-center justify-center z-20"
              >
                {is3DView ? (
                  <View className="relative w-full h-full">
                    <Product product={product} />
                  </View>
                ) : (
                  <ProductPicture product={product} />
                )}
                <IconSwitcher
                  toggleRenderType={() => handleToggleRenderType(product.id)}
                  renderType={is3DView}
                />
              </div>
            );
          })}
        </div>
        {currentProducts.length === 0 && (
          <div className="text-center py-16 text-gray-500">
            {t("Collection.NoProductsFound")} {searchQuery}
          </div>
        )}
        <Pagination
          currentPage={currentPage}
          totalPages={totalPages}
          onPageChange={setCurrentPage}
          itemsPerPage={itemsPerPage}
          totalItems={totalItems}
          className="mt-8"
        />
      </div>
    </section>
  );
}

export default Page;
