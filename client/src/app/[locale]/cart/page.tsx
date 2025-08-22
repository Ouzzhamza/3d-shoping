"use client";

import React from "react";
import { useCartStore } from "@/zustand/store";
import Cart from "@/components/dom/Cart";
import EmptyCart from "@/components/canvas/EmptyCart";

function Page() {
  const { items } = useCartStore();

  console.log(items);

  return (
    <section className="max-padd-container mt-36">
      {items.length !== 0 ? <Cart /> : <EmptyCart />}
    </section>
  );
}

export default Page;
