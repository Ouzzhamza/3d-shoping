"use client";

import React from "react";
import { useForm } from "react-hook-form";

type PaymentInputs = {
  cardNumber: string;
  expiryDate: string;
  cvv: string;
};

type PaymentProps = {
  prevStep: () => void;
  nextStep: () => void;
//   onPay: (data: PaymentInputs) => void;
//   subtotal: number;
//   shipping: number;
//   tax: number;
};

function Payment({ prevStep, nextStep }: PaymentProps) {
  const {
    register,
    handleSubmit,
    formState: { errors, isValid },
  } = useForm<PaymentInputs>({ mode: "onChange" });

  const onSubmit = (data: PaymentInputs) => {
    // onPay(data);
  };

//   const total = subtotal + shipping + tax;

  return (
    <form onSubmit={handleSubmit(onSubmit)} className="w-full">
      <div className="w-full h-full px-48 flex flex-col justify-start items-center space-y-6 pt-12">
        {/* Card Number */}
        <div className="w-full">
          <label
            htmlFor="cardNumber"
            className="block mb-2 text-white font-semibold"
          >
            Card Number
          </label>
          <input
            id="cardNumber"
            placeholder="1234 5678 9012 3456"
            {...register("cardNumber", {
              required: "Card Number is required",
              pattern: {
                value: /^\d{16}$/,
                message: "Card Number must be 16 digits",
              },
            })}
            className={`w-full bg-gray-800/50 border ${
              errors.cardNumber ? "border-red-500" : "border-gray-700"
            } rounded-lg pl-4 pr-4 py-3 text-white placeholder-gray-500 focus:outline-none focus:ring-2 focus:ring-primary focus:border-transparent transition-all`}
            type="text"
            maxLength={19}
          />
          {errors.cardNumber && (
            <p className="text-red-600 text-sm mt-1">
              {errors.cardNumber.message}
            </p>
          )}
        </div>

        {/* Expiry Date and CVV side-by-side */}
        <div className="w-full flex gap-6">
          <div className="flex-1">
            <label
              htmlFor="expiryDate"
              className="block mb-2 text-white font-semibold"
            >
              Expiry Date
            </label>
            <input
              id="expiryDate"
              placeholder="MM/YY"
              {...register("expiryDate", {
                required: "Expiry date is required",
                pattern: {
                  value: /^(0[1-9]|1[0-2])\/?([0-9]{2})$/,
                  message: "Expiry date must be MM/YY",
                },
              })}
              className={`w-full bg-gray-800/50 border ${
                errors.expiryDate ? "border-red-500" : "border-gray-700"
              } rounded-lg pl-4 pr-4 py-3 text-white placeholder-gray-500 focus:outline-none focus:ring-2 focus:ring-primary focus:border-transparent transition-all`}
              type="text"
              maxLength={5}
            />
            {errors.expiryDate && (
              <p className="text-red-600 text-sm mt-1">
                {errors.expiryDate.message}
              </p>
            )}
          </div>

          <div className="flex-1">
            <label
              htmlFor="cvv"
              className="block mb-2 text-white font-semibold"
            >
              CVV
            </label>
            <input
              id="cvv"
              placeholder="123"
              {...register("cvv", {
                required: "CVV is required",
                pattern: {
                  value: /^[0-9]{3,4}$/,
                  message: "Invalid CVV",
                },
              })}
              className={`w-full bg-gray-800/50 border ${
                errors.cvv ? "border-red-500" : "border-gray-700"
              } rounded-lg pl-4 pr-4 py-3 text-white placeholder-gray-500 focus:outline-none focus:ring-2 focus:ring-primary focus:border-transparent transition-all`}
              type="password"
              maxLength={4}
            />
            {errors.cvv && (
              <p className="text-red-600 text-sm mt-1">{errors.cvv.message}</p>
            )}
          </div>
        </div>

        {/* Order Summary */}
        <div className="w-full bg-gray-900/50 border border-gray-700 rounded-lg p-6 text-white">
          <h2 className="text-xl font-bold mb-4">Order Summary</h2>
          <ul className="space-y-2">
            <li className="flex justify-between">
              <span>Subtotal:</span>
              {/* <span>${subtotal.toFixed(2)}</span> */}
            </li>
            <li className="flex justify-between">
              <span>Shipping:</span>
              {/* <span>${shipping.toFixed(2)}</span> */}
            </li>
            <li className="flex justify-between">
              <span>Tax:</span>
              {/* <span>${tax.toFixed(2)}</span> */}
            </li>
            <li className="flex justify-between text-lg font-semibold border-t border-gray-600 mt-4 pt-4">
              <span>Total:</span>
              {/* <span>${total.toFixed(2)}</span> */}
            </li>
          </ul>
        </div>

        {/* Buttons */}
        <div className="w-full flex justify-between mt-8">
          <button
            type="button"
            className="bg-gray-600 hover:bg-gray-700 text-white font-semibold py-3 px-6 rounded-xl transition-all duration-300"
            onClick={prevStep}
          >
            Previous
          </button>
          <button
            type="submit"
            disabled={!isValid}
            className={`font-semibold py-3 px-6 rounded-xl transition-all duration-300 ${
              !isValid
                ? "bg-yellow-300 cursor-not-allowed text-gray-700"
                : "bg-primary hover:bg-primary-dark text-black"
            }`}
          >
            Pay Now
          </button>
        </div>
      </div>
    </form>
  );
}

export default Payment;
