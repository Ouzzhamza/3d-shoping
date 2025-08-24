"use client";

import { useParams } from "next/navigation";
import React from "react";

import { useTranslations } from "next-intl";
import Title from "@/components/dom/Title";
import { useFilteredProducts } from "@/hooks/useFilteredProducts";
import ProductsGrid from "@/components/dom/ProductsGrid";
import Pagination from "@/components/ui/Pagination";

function Page() {
  const params = useParams();
const category = Array.isArray(params?.categories)
  ? params?.categories[0]
  : params?.categories;
  const t = useTranslations("CollectionCategory");

  const {
    currentData: currentProducts,
    totalItems,
    totalPages,
    currentPage,
    // itemsPerPage,
    setCurrentPage,
    activeRenderId,
    handleToggleRenderType,
  } = useFilteredProducts(category);

  return (
    <section className="max-padd-container mt-36 pb-24">
      <Title
        title={t(category ?? "defaultKey")}
        titleStyle="w-fit"
        HeaderStyle="h2 uppercase"
      />
      <ProductsGrid
        products={currentProducts}
        activeRenderId={activeRenderId}
        onToggleRenderType={handleToggleRenderType}
      />

      {currentProducts.length === 0 && (
        <div className="text-center py-16 text-gray-500">
          {t("NoProductsFound")}
        </div>
      )}

      <Pagination
        currentPage={currentPage}
        totalPages={totalPages}
        onPageChange={setCurrentPage}
        // itemsPerPage={itemsPerPage}
        totalItems={totalItems}
        className="mt-8 pb-10"
      />
    </section>
  );
}

export default Page;
