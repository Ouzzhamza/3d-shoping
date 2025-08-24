import React from "react";
import { cn } from "@/lib/utils";
import { ColorOption } from "@/types/global";


type  ColorSelectionProps = {
  colors: ColorOption[];
  selectedColor?: ColorOption | null;
  onClick: (color: ColorOption) => void;
  className?: string;
};

const  ColorSelection = ({
  colors,
  selectedColor,
  onClick,
  className,
}:  ColorSelectionProps) => {
  return (
    <div className="flex gap-2">
      {colors.map((color) => (
        <button
          key={color.id}
          onClick={() => onClick(color)}
          className={cn(
            "rounded-full border-2 transition-all duration-200 relative group cursor-pointer",
            selectedColor?.id === color.id
              ? "border-gray-800 scale-110"
              : "border-gray-300 hover:border-gray-500 hover:scale-105",
            className
          )}
          style={{ backgroundColor: color.color }}
        >
          {selectedColor?.id === color.id && (
            <div className="absolute inset-0 rounded-full border-2 border-white shadow-inner"></div>
          )}
        </button>
      ))}
    </div>
  );
};

export default  ColorSelection;
