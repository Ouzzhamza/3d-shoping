"use client";

import Title from "@/components/dom/Title";
import { useTranslations } from "next-intl";
import React, { useEffect, useMemo } from "react";
import { useProductsStore, useSearchStore } from "@/zustand/store";
import { useGLTF, View } from "@react-three/drei";
import Product from "@/components/canvas/Product";
import _ from "lodash";
import { usePagination } from "@/hooks/usePagination";
import { ProductsType } from "@/types/global";
import Pagination from "@/components/ui/Pagination";
import dynamic from "next/dynamic";

// const CommonScene = dynamic(() =>
//   import("@/components/canvas/controls/Common").then((mod) => mod.CommonScene)
// );

function Page() {
  const t = useTranslations("Categories");
  const { searchQuery } = useSearchStore();
  const { Products } = useProductsStore();

  // Filter products using lodash (good for complex filtering)
  const filteredProducts = useMemo(() => {
    return _.filter(Products, (Product) =>
      _.includes(_.toLower(Product.name), _.toLower(searchQuery))
    );
  }, [Products, searchQuery]);

  // Use pagination hook
  const {
    currentData: currentProducts,
    totalItems,
    totalPages,
    currentPage,
    itemsPerPage,
    setCurrentPage,
  } = usePagination(filteredProducts, 12, [searchQuery]);

  useEffect(() => {
    currentProducts.forEach((product) => {
      useGLTF.preload(product.path);
    });
  }, [currentProducts]);

  return (
    <section className="max-padd-container py-16 mt-24">
      <Title title={t("Title")} titleStyle="w-fit" HeaderStyle="h2" />
      <div className="grid gap-18 place-items-center grid-cols-1 sm:grid-cols-2 md:grid-cols-3 lg:grid-cols-4 xl:grid-cols-5 pt-16">
        {currentProducts.map((product: ProductsType) => (
          <View
            key={product.id}
            className="relative w-[300px] h-[350px] overflow-hidden"
          >
            {/* <Product {...product} /> */}
          </View>
        ))}
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
    </section>
  );
}

export default Page;
