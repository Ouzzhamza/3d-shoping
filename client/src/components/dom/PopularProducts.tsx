"use client";
import React, { memo, Suspense, useCallback, useEffect, useState } from "react";
import Title from "./Title";
import { useTranslations } from "next-intl";
import Product from "@/components/canvas/Product";
import { PopularProductsMap } from "../../../public/data";
import { Html, View } from "@react-three/drei";
import ProductDetails from "../canvas/ProductDetails";
import ProductPicture from "../ui/ProductPicture";
import { useProductProgress } from "@/hooks/useProductProgress";
import Loader from "../ui/Loader";

// const MemoizedProductDetails = memo(ProductDetails);


export default function PopularProducts() {
  const t = useTranslations("PopularProducts");

  const [paths, setPaths] = useState<Record<number, string>>({});
  const [isHover, setIsHover] = useState<number | null>(null);

  // Use the custom progress hook
  const { productProgress, setProgress, setError, resetProgress } =
    useProductProgress();

    const handleSetCurrentPath = useCallback(
      (productId: number, path: string) => {
        setPaths((prev) => ({ ...prev, [productId]: path }));
        resetProgress(productId);
      },
      [resetProgress]
    );

  useEffect(() => {
    // console.log("here", productProgress[0]?.progress);
  }, [productProgress]);

  return (
    <section className="max-padd-container mt-32">
      <div className="max-padd-container2 h-full">
        <Title title={t("Title")} titleStyle="w-fit" HeaderStyle="h2" />

        <div className="w-full h-full flex flex-col md:flex-row justify-center items-center gap-8 overflow-hidden pt-16">
          {PopularProductsMap.map((product) => {
            const currentPath =
              paths[product.id] || product.colors[0]?.path || product.path;
            return (
              <div
                className="relative w-[350px] h-[400px] cursor-pointer flex justify-center items-center z-20"
                key={product.id}
                onMouseOver={() => setIsHover(product.id)}
                onMouseLeave={() => setIsHover(null)}
              >
                <View className="relative w-[350px] h-[400px] overflow-hidden">
                  {isHover === product.id ? (
                    <group>
                      <Suspense
                        fallback={
                          <group>
                            <Loader product={product} />
                          </group>
                        }
                      >
                        <Product
                          currentPath={currentPath}
                          productId={product.id}
                          onProgress={setProgress}
                          onError={setError}
                        />
                      </Suspense>
                    </group>
                  ) : (
                    <ProductPicture
                      id={product.id}
                      productImg={product.productImg}
                    />
                  )}
                </View>
                <ProductDetails
                  product={product}
                  setCurrentPath={(path) =>
                    handleSetCurrentPath(product.id, path)
                  }
                />
              </div>
            );
          })}
        </div>
      </div>
    </section>
  );
}
