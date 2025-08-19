"use client";

import { useProductsStore, useSearchStore } from "@/zustand/store";
import { usePagination } from "@/hooks/usePagination";
import { useState, useMemo, useEffect } from "react";
import { useGLTF } from "@react-three/drei";
import _ from "lodash";
import { ProductsType } from "@/types/global";

export function useFilteredProducts(category?: string) {
  const { Products } = useProductsStore();
  const { searchQuery } = useSearchStore();

  const [activeRenderId, setActiveRenderId] = useState<number | null>(null);

  // ✅ Filter by search + category
  const filteredProducts = useMemo(() => {
    let result = Products;

    // Filter by category (if category param is provided)
    if (category) {
      result = _.filter(result, (product: ProductsType) =>
        _.eq(_.toLower(product.category), _.toLower(category))
      );
    }

    // Filter by search query
    if (searchQuery) {
      result = _.filter(result, (product: ProductsType) =>
        _.includes(_.toLower(product.name), _.toLower(searchQuery))
      );
    }

    return result;
  }, [Products, searchQuery, category]);

  const {
    currentData,
    totalItems,
    totalPages,
    currentPage,
    itemsPerPage,
    setCurrentPage,
  } = usePagination(filteredProducts, 15, [searchQuery, category]);

  // Preload GLTF models
  useEffect(() => {
    currentData.forEach((product) => {
      useGLTF.preload(product.path);
    });
  }, [currentData]);

  // Toggle 3D render
  const handleToggleRenderType = (id: number) => {
    setActiveRenderId((prevId) => (prevId === id ? null : id));
  };

  return {
    currentData,
    totalItems,
    totalPages,
    currentPage,
    itemsPerPage,
    setCurrentPage,
    activeRenderId,
    handleToggleRenderType,
  };
}
