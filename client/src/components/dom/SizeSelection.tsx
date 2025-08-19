"use client";

import React from "react";
import { cn } from "@/lib/utils"; // your className merge function

type SizeSelectionProps = {
  sizes: string[];
  selectedSize: string | null;
  onClick: (size: string) => void;
  className?: string;
};

function SizeSelection({
  sizes,
  selectedSize,
  onClick,
  className,
}: SizeSelectionProps) {
  return (
    <div className="grid grid-cols-3 gap-2">
      {sizes.map((size) => (
        <button
          key={size}
          onClick={() => onClick(size)}
          className={cn(
            "px-3 py-2 rounded-lg border text-sm font-medium transition-all duration-200 cursor-pointer",
            selectedSize === size
              ? "border-primary bg-primary text-white"
              : "border-gray-300 bg-white text-gray-700 hover:border-gray-400",
            className
          )}
        >
          {size}
        </button>
      ))}
    </div>
  );
}

export default SizeSelection;
