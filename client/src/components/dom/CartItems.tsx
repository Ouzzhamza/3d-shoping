import { useCartStore } from "@/zustand/store";
import React from "react";
import Image from "next/image";
import { FaXmark } from "react-icons/fa6";
import { LuCirclePlus, LuCircleMinus } from "react-icons/lu";

function CartItems() {
  const { removeFromCart, updateQuantity, clearCart, calculateTotals, items } =
    useCartStore();

    console.log(items);
  return (
    <div className="w-2/3 border-primary-2 rounded-3xl backdrop-blur-3xl overflow-auto flex justify-center ">
      <div className="space-y-4 w-full">
        {items.map((item, index) => (
          <div key={index} className="flex items-start gap-3 p-3 rounded-lg">
            <div className="relative w-36 h-36 bg-gray-700 rounded-lg overflow-hidden flex-shrink-0">
              <Image
                src={item.image}
                alt={item.name}
                fill
                className="object-cover object-left"
                sizes="50vw"
                priority
              />
            </div>
          </div>
        ))}
      </div>
    </div>
  );
}

export default CartItems;

// {
//   items.map((item) => (
//     <div
//       key={item.id}
//       className="flex items-start gap-3 p-3 bg-gray-800 rounded-lg"
//     >
//       {/* Selection Checkbox */}
//       <input
//         type="checkbox"
//         //   checked={item.selected || false}
//         //   onChange={() => handleSelectItem(item.id)}
//         className="w-4 h-4 mt-2 rounded bg-purple-600 border-purple-600"
//       />

//       {/* Product Image */}
//       <div className="relative w-16 h-16 bg-gray-700 rounded-lg overflow-hidden flex-shrink-0">
//         <Image
//           src={item.image}
//           alt={item.name}
//           fill
//           className="object-cover"
//         />
//       </div>

//       {/* Product Details */}
//       <div className="flex-1 min-w-0">
//         <div className="flex items-start justify-between">
//           <div className="flex-1">
//             <h3 className="text-sm font-medium text-white truncate">
//               {item.name}
//             </h3>

//             {/* Product Specifications */}
//             <div className="flex items-center gap-4 mt-1 text-xs text-gray-400">
//               <div className="flex items-center gap-1">
//                 <div className="w-3 h-3 rounded-full bg-green-500"></div>
//                 <span>1-2 yr, boy</span>
//               </div>
//               <div className="flex items-center gap-1">
//                 <div className="w-3 h-3 rounded-full bg-blue-500"></div>
//                 <span>5 days</span>
//               </div>
//             </div>

//             {/* Price */}
//             <div className="mt-2">
//               <span className="text-lg font-bold text-white">
//                 {/* ${parseFloat(item.price).toFixed(2)} */}
//               </span>
//             </div>
//           </div>

//           <button
//             //   onClick={() => removeFromCart(item.id)}
//             className="text-gray-400 hover:text-red-400 transition-colors p-1"
//           >
//             <FaXmark size={16} />
//           </button>
//         </div>

//         <div className="flex items-center justify-between mt-3">
//           <div className="flex items-center gap-2">
//             <button
//               // onClick={() =>
//               //   handleQuantityChange(item.id, item.quantity - 1)
//               // }
//               className="w-6 h-6 flex items-center justify-center bg-gray-700 hover:bg-gray-600 rounded transition-colors"
//             >
//               <LuCircleMinus size={12} />
//             </button>
//             <span className="w-8 text-center text-sm font-medium">
//               {item.quantity}
//             </span>
//             <button
//               // onClick={() =>
//               //   handleQuantityChange(item.id, item.quantity + 1)
//               // }
//               className="w-6 h-6 flex items-center justify-center bg-gray-700 hover:bg-gray-600 rounded transition-colors"
//             >
//               <LuCirclePlus size={12} />
//             </button>
//           </div>
//         </div>
//       </div>
//     </div>
//   ));
// }
