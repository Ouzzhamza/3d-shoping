"use client";

import { useRouter } from "next/navigation";
import React from "react";
import { IoReturnDownBackOutline } from "react-icons/io5";
import { MdOutlineKeyboardBackspace } from "react-icons/md";
import { Products } from "../../../public/data";
import _ from "lodash";
import { useProductsStore } from "@/zustand/store";

function Controllers({
  //   setPath,
  id,
}: {
  //   setPath: React.Dispatch<React.SetStateAction<string | undefined>>;
  id?: number;
}) {
  const router = useRouter();
  const { setSelectedProduct } = useProductsStore();

  const handleChangeProduct = (direction: "prev" | "next") => {
    if (id === undefined) return;
    const productIds = _.map(Products, "id");
    const currentIndex = productIds.indexOf(id);
    if (currentIndex === -1) return;

    let newIndex;
    if (direction === "prev") {
      newIndex = currentIndex === 0 ? productIds.length - 1 : currentIndex - 1;
    } else {
      newIndex = currentIndex === productIds.length - 1 ? 0 : currentIndex + 1;
    }

    const newProductId = productIds[newIndex];
    const newProduct = _.find(Products, { id: newProductId });
    if (newProduct) {
      setSelectedProduct(newProduct);
    }
  };

  return (
    <div className="absolute top-0 w-full flex justify-between py-4 px-8 z-20">
      <IoReturnDownBackOutline
        size={40}
        className="text-primary cursor-pointer"
        onClick={() => router.back()}
      />
      <div className="flex gap-10">
        <MdOutlineKeyboardBackspace
          size={40}
          className="text-primary cursor-pointer"
          onClick={() => handleChangeProduct("prev")}
        />
        <MdOutlineKeyboardBackspace
          size={40}
          className="rotate-180 text-primary cursor-pointer"
          onClick={() => handleChangeProduct("next")}
        />
      </div>
    </div>
  );
}

export default Controllers;
