"use client";
import React, { useState } from "react";
import Title from "./Title";
import { useTranslations } from "next-intl";
// import Product from "@/components/canvas/Product";
import { PopularProductsMap } from "../../../public/data";
import { View } from "@react-three/drei";
import ProductPicture from "../ui/ProductPicture";
import IconSwitcher from "../ui/IconSwitcher";


const Product = React.lazy(() => import("@/components/canvas/Product"));


export default function PopularProducts() {

  const t = useTranslations("PopularProducts");

  // The ID of the product in "renderType" mode (or null)
  const [activeRenderId, setActiveRenderId] = useState<number | null>(null);

  // Handler for switching render type for a product
  const handleToggleRenderType = (id: number) => {
    setActiveRenderId((prevId) => (prevId === id ? null : id));
    
  };


  return (
    <section className="max-padd-container mt-32">
      <div className="max-padd-container2 h-full">
        <Title title={t("Title")} titleStyle="w-fit" HeaderStyle="h2" />

        <div className="w-full h-full flex flex-col md:flex-row justify-center items-center gap-8 overflow-hidden pt-16">
          {PopularProductsMap.map((product) => {
            const is3DView = activeRenderId === product.id;
            return (
              <div
                className="relative w-[350px] h-[400px] flex justify-center items-center z-20"
                key={product.id}
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
      </div>
    </section>
  );
}
