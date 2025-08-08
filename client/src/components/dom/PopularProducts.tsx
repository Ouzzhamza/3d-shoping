"use client";

import React, { Suspense } from "react";
import Title from "./Title";
import { useTranslations } from "next-intl";
import {
  View,
} from "@react-three/drei";
import { Position3D } from "@/types/global";
import Product from "@/components/canvas/Product";
import { PopularProducts } from "@/assets/data";


export default function LineOfViews() {
  const t = useTranslations("PopularProducts");

  const viewData: Array<{ id: number; color: string; position: Position3D }> = [
    { id: 1, color: "#ff6b6b", position: [0, 0, 0] },
    { id: 2, color: "#4ecdc4", position: [0, 0, 0] },
    { id: 3, color: "#45b7d1", position: [0, 0, 0] },
    { id: 4, color: "#96ceb4", position: [0, 0, 0] },
    { id: 5, color: "#feca57", position: [0, 0, 0] },
  ];

  return (
    <section className="max-padd-container mt-32">
      <div className="max-padd-container2 h-full">
        <Title title={t("Title")} titleStyle="w-fit" HeaderStyle="h2" />

        <div className="w-full h-full flex flex-col md:flex-row justify-center items-center gap-8 overflow-hidden pt-16">
          {PopularProducts.map((product) => (
            <Suspense
              key={product.id}
              fallback={
                <div className="w-64 h-[300px] bg-gray-200 animate-pulse" />
              }
            >
              <View
                key={product.id}
                className="w-64 h-[300px] overflow-hidden flex justify-center items-center border-primary-2"
              >
                <Product Path={product.path} />
              </View>
            </Suspense>
          ))}
        </div>
      </div>
    </section>
  );
}
