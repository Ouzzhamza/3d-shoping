import { useCartStore } from "@/zustand/store";
import React from "react";
import Image from "next/image";
import { FaXmark } from "react-icons/fa6";
import { LuCirclePlus, LuCircleMinus } from "react-icons/lu";
import { motion, AnimatePresence } from "framer-motion";
import { useTranslations } from "next-intl";

function CartItems() {

  const { removeFromCart, updateQuantity, items } = useCartStore();

  const t = useTranslations("Cart")

  const handleQuantityDecrease = (itemId: string) => {
    const item = items.find((item) => item.variantKey === itemId);
    if (item && item.quantity > 1) {
      updateQuantity(itemId, item.quantity - 1);
    }
  };

  const handleQuantityIncrease = (itemId: string) => {
    const item = items.find((item) => item.variantKey === itemId);
    if (item) {
      console.log("here updating");
      updateQuantity(itemId, item.quantity + 1);
    }
  };

  return (
    <div className="w-2/3 border-primary-2 rounded-3xl backdrop-blur-3xl overflow-auto">
      <div className="space-y-4 p-4 overflow-auto">
        <AnimatePresence mode="popLayout">
          {items.map((item, index) => (
            <motion.div
              key={item.variantKey}
              layout
              initial={{ opacity: 0, scale: 0.8, y: -20 }}
              animate={{ opacity: 1, scale: 1, y: 0 }}
              exit={{
                opacity: 0,
                scale: 0.8,
                x: 300,
                transition: { duration: 0.3, ease: "easeInOut" },
              }}
              transition={{ duration: 0.3, ease: "easeOut" }}
              className="flex items-start gap-6 p-4 rounded-lg backdrop-blur-sm border border-gray-700/50"
            >
              {/* Product Image */}
              <div className="relative w-40 h-40 bg-gray-700 rounded-lg overflow-hidden flex-shrink-0">
                <Image
                  src={item.image}
                  alt={item.name}
                  fill
                  className="object-cover object-left"
                  sizes="50vw"
                  priority
                />
              </div>

              {/* Product Details */}
              <div className="flex-1 min-w-0">
                <div className="flex items-start justify-between mb-3">
                  <h2 className="h2 font-semibold text-white leading-tight pr-4 line-clamp-2">
                    {item.name}
                  </h2>
                  <motion.button
                    onClick={() => removeFromCart(item.variantKey)}
                    whileHover={{ scale: 1.2, rotate: 90 }}
                    whileTap={{ scale: 0.9 }}
                    className="text-gray-400 hover:text-red-400 transition-colors duration-200 p-1"
                  >
                    <FaXmark size={16} />
                  </motion.button>
                </div>

                {/* Size and Color */}
                <div className="flex items-center gap-4 mb-4 text-sm">
                  <div className="flex items-center gap-2">
                    <span className="text-gray-300">{t("Size")}:</span>
                    <span className="px-2 py-1 bg-primary text-black rounded text-xs font-medium">
                      {item.size}
                    </span>
                  </div>
                  <div className="flex items-center gap-2">
                    <span className="text-gray-300">{t("Color")}:</span>
                    <div
                      className="w-5 h-5 rounded-full border-2 border-gray-600"
                      style={{ backgroundColor: item.color?.color || "#666" }}
                    />
                  </div>
                </div>

                {/* Price and Quantity Controls */}
                <div className="flex items-center justify-between">
                  <motion.div
                    key={item.quantity} // Re-animate when quantity changes
                    initial={{ scale: 1.2 }}
                    animate={{ scale: 1 }}
                    className="text-xl font-semibold text-white"
                  >
                    ${(item.price * item.quantity).toFixed(2)}
                  </motion.div>

                  <div className="flex items-center gap-3">
                    <motion.button
                      onClick={() => handleQuantityDecrease(item.variantKey)}
                      disabled={item.quantity <= 1}
                      whileHover={{ scale: 1.1 }}
                      whileTap={{ scale: 0.95 }}
                      className="text-gray-400 hover:text-white disabled:opacity-50 disabled:cursor-not-allowed transition-colors duration-200"
                    >
                      <LuCircleMinus size={20} />
                    </motion.button>

                    <motion.span
                      key={item.quantity}
                      initial={{ scale: 1.3, color: "#60a5fa" }}
                      animate={{ scale: 1, color: "#ffffff" }}
                      transition={{ duration: 0.2 }}
                      className="text-white font-medium min-w-[2rem] text-center"
                    >
                      {item.quantity}
                    </motion.span>

                    <motion.button
                      onClick={() => handleQuantityIncrease(item.variantKey)}
                      whileHover={{ scale: 1.1 }}
                      whileTap={{ scale: 0.95 }}
                      className="text-gray-400 hover:text-white transition-colors duration-200"
                    >
                      <LuCirclePlus size={20} />
                    </motion.button>
                  </div>
                </div>
              </div>
            </motion.div>
          ))}
        </AnimatePresence>
      </div>
    </div>
  );
}

export default CartItems;
