"use client"
import { useCartStore } from "@/zustand/store";
import { useTranslations } from "next-intl";
import React, { useState } from "react";
import { FaGift, FaArrowRight, FaTimes } from "react-icons/fa";


function PriceDetails({ nextStep }: { nextStep: () => void }) {
  const { items } = useCartStore();
  const [couponCode, setCouponCode] = useState("");
  const [appliedCoupon, setAppliedCoupon] = useState<string | null>("MAX500");
  const [isGiftWrapSelected, setIsGiftWrapSelected] = useState(false);

  // Calculate totals (you might want to get these from your store)
  const subtotal = items.reduce(
    (sum, item) => sum + item.price * item.quantity,
    0
  );
  const couponDiscount = appliedCoupon ? 2.5 : 0;
  const giftWrapCost = isGiftWrapSelected ? 20 : 0;
  const deliveryCharges = 0;
  const total = subtotal - couponDiscount + giftWrapCost + deliveryCharges;

  const handleApplyCoupon = () => {
    if (couponCode.trim()) {
      setAppliedCoupon(couponCode);
      setCouponCode("");
    }
  };

  const handleRemoveCoupon = () => {
    setAppliedCoupon(null);
  };

  const t = useTranslations("Cart");

  return (
    <div className="relative flex flex-col w-full h-full gap-6 items-center">
      <div className="w-full flex flex-col gap-2">
        <h3 className="text-white font-semibold">{t("Coupons")}</h3>
        {appliedCoupon ? (
          <div className="flex items-center justify-between rounded-3xl p-3 border-primary-2 backdrop-blur-3xl">
            <div className="flex items-center gap-2">
              <span className="text-primary text-sm">🎫</span>
              <span className="text-text-light font-medium">
                {appliedCoupon}
              </span>
            </div>
            <button
              onClick={handleRemoveCoupon}
              className="text-gray-400 hover:text-white transition-colors"
            >
              <FaTimes size={12} />
            </button>
          </div>
        ) : (
          <div className="flex gap-2">
            <input
              type="text"
              value={couponCode}
              onChange={(e) => setCouponCode(e.target.value)}
              placeholder="Enter coupon code"
              className="flex-1 border-primary-2 rounded-3xl px-3 py-2 text-sm focus:outline-none backdrop-blur-3xl"
            />
            <button
              onClick={handleApplyCoupon}
              disabled={!couponCode.trim()}
              className="px-4 py-2 bg-primary text-black rounded-3xl font-medium text-sm hover:bg-primary/90 disabled:opacity-90 disabled:cursor-not-allowed transition-all"
            >
              {t("Apply")}
            </button>
          </div>
        )}
      </div>
      <div className="w-full flex flex-col gap-2">
        <h3 className="text-white font-semibold">{t("Gifting")}</h3>

        <div className="rounded-3xl px-4 py-8 border-primary-2 backdrop-blur-3xl">
          <div className="flex items-start gap-3 mb-3">
            <FaGift className="text-purple-400 mt-1" size={20} />
            <div>
              <h4 className="text-white font-medium mb-1">
                {t("BuyingForALovedOne")}
              </h4>
              <p className="text-gray-400 text-sm">
                {t("SendPersonalizedMessageAt")} $20
              </p>
            </div>
          </div>

          <label className="flex items-center gap-2 cursor-pointer">
            <input
              type="checkbox"
              checked={isGiftWrapSelected}
              onChange={(e) => setIsGiftWrapSelected(e.target.checked)}
              className="sr-only"
            />
            <div
              className={`w-4 h-4 rounded border-2 transition-all ${
                isGiftWrapSelected
                  ? "bg-primary border-primary"
                  : "border-gray-500 bg-transparent"
              }`}
            >
              {isGiftWrapSelected && (
                <svg
                  className="w-full h-full text-black"
                  fill="currentColor"
                  viewBox="0 0 20 20"
                >
                  <path
                    fillRule="evenodd"
                    d="M16.707 5.293a1 1 0 010 1.414l-8 8a1 1 0 01-1.414 0l-4-4a1 1 0 011.414-1.414L8 12.586l7.293-7.293a1 1 0 011.414 0z"
                    clipRule="evenodd"
                  />
                </svg>
              )}
            </div>
            <span className="text-primary text-sm font-medium">
              {t("AddGiftWrap")}
            </span>
          </label>
        </div>
      </div>
      <div className="w-full flex flex-col gap-2">
        <h3 className="text-white font-semibold">Price Details</h3>

        <div className="space-y-3 text-sm rounded-3xl backdrop-blur-3xl border-primary-2 px-4 py-8">
          <div className="flex justify-between text-gray-300">
            <span>
              {items.length} Item{items.length !== 1 ? "s" : ""}
            </span>
            <span>${subtotal.toFixed(2)}</span>
          </div>

          {appliedCoupon && (
            <div className="flex justify-between text-green-400">
              <span>Coupon discount</span>
              <span>-${couponDiscount.toFixed(2)}</span>
            </div>
          )}

          {isGiftWrapSelected && (
            <div className="flex justify-between text-gray-300">
              <span>Gift wrap</span>
              <span>+${giftWrapCost.toFixed(2)}</span>
            </div>
          )}

          <div className="flex justify-between text-gray-300">
            <span>Delivery Charges</span>
            <span className="text-green-400">{t("FreeDelivery")}</span>
          </div>

          <hr className="border-gray-700" />

          <div className="flex justify-between text-white font-semibold text-base">
            <span>{t("TotalAmount")}</span>
            <span>${total.toFixed(2)}</span>
          </div>
        </div>
      </div>
      <button
        onClick={nextStep}
        className="absolute bottom-0 w-full bg-gradient-to-r from-amber-400 to-yellow-600 hover:from-amber-500 hover:to-yellow-700 hover:shadow-amber-500/30 text-black font-semibold py-4 px-6 rounded-xl transition-all duration-300 flex items-center justify-center gap-2 shadow-lg"
      >
        {t("PlaceOrder")}
        <FaArrowRight size={16} />
      </button>
    </div>
  );
}

export default PriceDetails;
