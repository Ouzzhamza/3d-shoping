"use client";

import { useTranslations } from "next-intl";
import React from "react";
import { useForm } from "react-hook-form";
import { ShippingAddressInputs } from "@/types/global";

// type ShippingAddress = {
//   fullName: string;
//   addressLine: string;
//   country: string;
//   city: string;
//   zipCode: string;
// };

function ShippingAddress({
  nextStep,
  prevStep,
}: {
  nextStep: () => void;
  prevStep: () => void;
}) {
  const {
    register,
    handleSubmit,
    formState: { errors, isValid },
  } = useForm<ShippingAddressInputs>({
    mode: "onChange", 
  });

  const onSubmit = async (data: ShippingAddressInputs) => {
    try {
      console.log("data", data);
      nextStep(); 
    } catch (error) {
      console.error(error);
    }
  };

  const t = useTranslations("Cart");

  return (
    <form onSubmit={handleSubmit(onSubmit)} className="w-full">
      <div className="w-full h-full px-48 flex flex-col justify-start items-center space-y-6 pt-12">
        {/* Full Name */}
        <div className="w-full">
          <label
            htmlFor="fullName"
            className="block mb-2 text-white font-semibold"
          >
            {t("FullName")}
          </label>
          <input
            id="fullName"
            placeholder="Full Name"
            {...register("fullName", { required: "Full name is required" })}
            className={`w-full bg-gray-800/50 border ${
              errors.fullName ? "border-red-500" : "border-gray-700"
            } rounded-lg pl-4 pr-4 py-3 text-white placeholder-gray-500 focus:outline-none focus:ring-2 focus:ring-primary focus:border-transparent transition-all`}
            type="text"
          />
          {errors.fullName && (
            <p className="text-red-600 text-sm mt-1">
              {errors.fullName.message}
            </p>
          )}
        </div>

        {/* Address Line */}
        <div className="w-full">
          <label
            htmlFor="addressLine"
            className="block mb-2 text-white font-semibold"
          >
            {t("AddressLine")}
          </label>
          <input
            id="addressLine"
            placeholder="123 Main Street"
            {...register("addressLine", { required: "Address is required" })}
            className={`w-full bg-gray-800/50 border ${
              errors.addressLine ? "border-red-500" : "border-gray-700"
            } rounded-lg pl-4 pr-4 py-3 text-white placeholder-gray-500 focus:outline-none focus:ring-2 focus:ring-primary focus:border-transparent transition-all`}
            type="text"
          />
          {errors.addressLine && (
            <p className="text-red-600 text-sm mt-1">
              {errors.addressLine.message}
            </p>
          )}
        </div>

        {/* Country and City Inputs Side-by-Side */}
        <div className="w-full flex gap-6">
          <div className="flex-1">
            <label
              htmlFor="country"
              className="block mb-2 text-white font-semibold"
            >
              {t("Country")}
            </label>
            <input
              id="country"
              placeholder="Morocco"
              {...register("country", { required: "Country is required" })}
              className={`w-full bg-gray-800/50 border ${
                errors.country ? "border-red-500" : "border-gray-700"
              } rounded-lg pl-4 pr-4 py-3 text-white placeholder-gray-500 focus:outline-none focus:ring-2 focus:ring-primary focus:border-transparent transition-all`}
              type="text"
            />
            {errors.country && (
              <p className="text-red-600 text-sm mt-1">
                {errors.country.message}
              </p>
            )}
          </div>
          <div className="flex-1">
            <label
              htmlFor="city"
              className="block mb-2 text-white font-semibold"
            >
              {t("City")}
            </label>
            <input
              id="city"
              placeholder="Rabat"
              {...register("city", { required: "City is required" })}
              className={`w-full bg-gray-800/50 border ${
                errors.city ? "border-red-500" : "border-gray-700"
              } rounded-lg pl-4 pr-4 py-3 text-white placeholder-gray-500 focus:outline-none focus:ring-2 focus:ring-primary focus:border-transparent transition-all`}
              type="text"
            />
            {errors.city && (
              <p className="text-red-600 text-sm mt-1">{errors.city.message}</p>
            )}
          </div>
        </div>

        {/* Zip Code */}
        <div className="w-full">
          <label
            htmlFor="zipCode"
            className="block mb-2 text-white font-semibold"
          >
            {t("ZipCode")}
          </label>
          <input
            id="zipCode"
            placeholder="10070"
            {...register("zipCode", { required: "Zip code is required" })}
            className={`w-full bg-gray-800/50 border ${
              errors.zipCode ? "border-red-500" : "border-gray-700"
            } rounded-lg pl-4 pr-4 py-3 text-white placeholder-gray-500 focus:outline-none focus:ring-2 focus:ring-primary focus:border-transparent transition-all`}
            type="text"
          />
          {errors.zipCode && (
            <p className="text-red-600 text-sm mt-1">
              {errors.zipCode.message}
            </p>
          )}
        </div>

        {/* Buttons */}
        <div className="w-full flex justify-between mt-8">
          <button
            type="button"
            className="bg-gray-600 hover:bg-gray-700 text-white font-semibold py-3 px-6 rounded-xl transition-all duration-300"
            onClick={prevStep}
            >
            {t("Previous")}
          </button>
          <button
              onClick={nextStep}
            // type="submit" // disable for the moment to not add infos every time 
            // disabled={!isValid} 
            className={`font-semibold py-3 px-6 rounded-xl transition-all duration-300 ${
              !isValid
                ? "bg-yellow-300 cursor-not-allowed text-gray-700"
                : "bg-primary hover:bg-primary-dark text-black"
            }`}
          >
            {t("Next")}
          </button>
        </div>
      </div>
    </form>
  );
}

export default ShippingAddress;
