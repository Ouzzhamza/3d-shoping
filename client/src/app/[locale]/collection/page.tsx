"use client";

import Title from "@/components/dom/Title";
import { useTranslations } from "next-intl";
import Pagination from "@/components/ui/Pagination";
import { useFilteredProducts } from "@/hooks/useFilteredProducts";
import ProductsGrid from "@/components/dom/ProductsGrid";

function Page() {
  const t = useTranslations("Collection");
  const {
    currentData: currentProducts,
    totalItems,
    totalPages,
    currentPage,
    itemsPerPage,
    setCurrentPage,
    activeRenderId,
    handleToggleRenderType,
  } = useFilteredProducts();

  return (
    <section className="max-padd-container mt-36">
      <div className="max-padd-container2">
        <Title title={t("Title")} titleStyle="w-fit" HeaderStyle="h2" />

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
          itemsPerPage={itemsPerPage}
          totalItems={totalItems}
          className="mt-8"
        />
      </div>
    </section>
  );
}

export default Page;
