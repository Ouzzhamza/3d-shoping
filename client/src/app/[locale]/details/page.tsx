"use client";

import ProductView from "@/components/canvas/ProductView";
import Controllers from "@/components/dom/Controllers";
import ProductDescription from "@/components/dom/ProductDescription";
import ProductOptions from "@/components/dom/ProductOptions";
import Title from "@/components/dom/Title";
import { useProductsStore } from "@/zustand/store";
import { useTranslations } from "next-intl";
import React, { useEffect, useState } from "react";

function Page() {
  const t = useTranslations("Details");

  const selectedProduct = useProductsStore((state) => state.selectedProduct);

   useEffect(() => {
     if (selectedProduct) {
       setCurrentPath(selectedProduct.path);
     }
   }, [selectedProduct]);

  const [currentPath, setCurrentPath] = useState<string | undefined>(
    selectedProduct?.path
  );

  const handleSetCurrentPath = (path: string) => {
    setCurrentPath(path);
  };

  return (
    <section className="max-padd-container mt-36">
      <div className="max-padd-container2 h-screen">
        <Title title={t("Title")} titleStyle="w-fit" HeaderStyle="h2" />
        <div className="max-padd-container2">
          <div className="rounded-3xl border-[1px] border-primary h-[550px] grid grid-cols-3 mt-16 w-full backdrop-blur-3xl ">
            <Controllers id={selectedProduct?.id} />
            <ProductDescription
              Title={selectedProduct?.name}
              Description={selectedProduct?.description}
            />
            <ProductView  path={currentPath} />
            <ProductOptions
              Product={selectedProduct}
              setCurrentPath={(path) => handleSetCurrentPath(path)}
            />
          </div>
        </div>
      </div>
    </section>
  );
}

export default Page;
