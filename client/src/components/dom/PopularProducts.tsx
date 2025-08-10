"use client";

import React, { Suspense } from "react";
import Title from "./Title";
import { useTranslations } from "next-intl";
import {
  Html,
  View,
} from "@react-three/drei";
import { Position3D } from "@/types/global";
import Product from "@/components/canvas/Product";
import { PopularProducts } from "@/assets/data";


export default function LineOfViews() {

  const t = useTranslations("PopularProducts");

  return (
    <section className="max-padd-container mt-32">
      <div className="max-padd-container2 h-full">
        <Title title={t("Title")} titleStyle="w-fit" HeaderStyle="h2" />

        <div className="w-full h-full flex flex-col md:flex-row justify-center items-center gap-8 overflow-hidden pt-16">
          {PopularProducts.map((product) => (
              <View
                key={product.id}
                className="relative w-[350px] h-[400px] overflow-hidden"
              >
                <Product {...product} />
              </View>
          ))}
        </div>
      </div>
    </section>
  );
}
