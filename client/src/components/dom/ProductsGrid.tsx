"use client";

import React from "react";
import { View } from "@react-three/drei";
import ProductPicture from "@/components/ui/ProductPicture";
import IconSwitcher from "@/components/ui/IconSwitcher";
import { ProductsType } from "@/types/global";

// Lazy-load the Product component
const Product = React.lazy(() => import("@/components/canvas/Product"));

type ProductsGridProps = {
  products: ProductsType[];
  activeRenderId: number | null;
  onToggleRenderType: (id: number) => void;
};

const ProductsGrid: React.FC<ProductsGridProps> = ({
  products,
  activeRenderId,
  onToggleRenderType,
}) => {
  return (
    <div className="grid gap-18 place-items-center grid-cols-1 sm:grid-cols-2 md:grid-cols-3 lg:grid-cols-4 xl:grid-cols-5 pt-16">
      {products.map((product) => {
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
              toggleRenderType={() => onToggleRenderType(product.id)}
              renderType={is3DView}
            />
          </div>
        );
      })}
    </div>
  );
};

export default ProductsGrid;
