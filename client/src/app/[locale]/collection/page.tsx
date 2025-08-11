"use client";

import Title from "@/components/dom/Title";
import { useTranslations } from "next-intl";
import React from "react";
import { useProductsStore, useSearchStore } from "@/zustand/store";
import { View } from "@react-three/drei";
import Product from "@/components/canvas/Product";
import CollectionProduct from "@/components/canvas/CollectionProduct";

function Page() {
  const t = useTranslations("Categories");
  const { searchQuery, setsearchQuery } = useSearchStore();
  const { Products, setProduct } = useProductsStore();

  return (
    <section className="max-padd-container py-16 mt-24">
      <Title title={t("Title")} titleStyle="w-fit" HeaderStyle="h2" />
      <div className="grid gap-18 place-items-center grid-cols-1 sm:grid-cols-2 md:grid-cols-3 lg:grid-cols-4 xl:grid-cols-5 pt-16">
        {Products.map((product) => (
          <View
            key={product.id}
            className="relative w-[300px] h-[350px] overflow-hidden"
          >
            <Product {...product} />
          </View>
        ))}
      </div>
    </section>
  );
}

export default Page;
