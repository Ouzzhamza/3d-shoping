import React from 'react'
import { LuCirclePlus, LuCircleMinus } from "react-icons/lu";


interface QuantitySelectorProps {
  quantity: number;
  onQuantityChange: (quantity: number) => void;
  min?: number;
  max?: number;
  disabled?: boolean;
}


const QuantitySelector: React.FC<QuantitySelectorProps> = ({
  quantity,
  onQuantityChange,
  min = 1,
  max = 99,
  disabled = false,
}) => {
  
   const handleDecrease = () => {
     if (quantity > min && !disabled) {
       onQuantityChange(quantity - 1);
     }
   };

   const handleIncrease = () => {
     if (quantity < max && !disabled) {
       onQuantityChange(quantity + 1);
     }
   };

   const handleInputChange = (e: React.ChangeEvent<HTMLInputElement>) => {
     const value = parseInt(e.target.value) || min;
     const clampedValue = Math.min(Math.max(value, min), max);
     onQuantityChange(clampedValue);
   };

  return (
    <div className="flex items-center justify-center rounded-3xl bg-bg-dark overflow-hidden py-1 px-3 w-[100px]">
      <button
        onClick={handleDecrease}
        disabled={disabled || quantity <= min}
        className="flex items-center justify-center w-10 h-10  disabled:cursor-not-allowed transition-colors duration-200 cursor-pointer"
        type="button"
      >
        <LuCircleMinus size={25} className="text-primary" />
      </button>

      {/* Quantity Input */}
      <input
        type="number"
        value={quantity}
        onChange={handleInputChange}
        disabled={disabled}
        min={min}
        max={max}
        className="w-6 h-10 text-center border-none outline-none text-white font-medium disabled:bg-gray-50 disabled:cursor-not-allowed [appearance:textfield] [&::-webkit-outer-spin-button]:appearance-none [&::-webkit-inner-spin-button]:appearance-none"
      />

      <button
        onClick={handleIncrease}
        disabled={disabled || quantity >= max}
        className="flex items-center justify-center w-10 h-10  disabled:cursor-not-allowed transition-colors duration-200 cursor-pointer"
        type="button"
      >
        <LuCirclePlus size={25} className="text-primary" />
      </button>
    </div>
  );
};

export default QuantitySelector