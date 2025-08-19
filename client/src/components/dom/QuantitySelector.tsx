import React from 'react'
import { CiCircleMinus } from "react-icons/ci";
import { CiCirclePlus } from "react-icons/ci";



function QuantitySelector() {
  return (
    <div className="flex items-center rounded-3xl bg-bg-dark overflow-hidden p-1">
      {/* Decrease Button */}
      <button
        // onClick={handleDecrease}
        // disabled={disabled || quantity <= min}
        className="flex items-center justify-center w-10 h-10 text-primary disabled:opacity-50 disabled:cursor-not-allowed transition-colors duration-200"
        type="button"
      >
        <CiCircleMinus size={25} />
      </button>

      {/* Quantity Input */}
      <input
        type="number"
        // value={quantity}
        // onChange={handleInputChange}
        // disabled={disabled}
        // min={min}
        // max={max}
        className="w-12 h-10 text-center border-none outline-none text-gray-800 font-medium disabled:bg-gray-50 disabled:cursor-not-allowed [appearance:textfield] [&::-webkit-outer-spin-button]:appearance-none [&::-webkit-inner-spin-button]:appearance-none"
      />

      {/* Increase Button */}
      <button
        // onClick={handleIncrease}
        // disabled={disabled || quantity >= max}
        className="flex items-center justify-center w-10 h-10 text-primary disabled:opacity-50 disabled:cursor-not-allowed transition-colors duration-200"
        type="button"
      >
        <CiCirclePlus size={25} />
      </button>
    </div>
  );
}

export default QuantitySelector