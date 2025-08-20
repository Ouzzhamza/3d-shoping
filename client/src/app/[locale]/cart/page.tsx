"use client"

import React, { useState } from "react";
import { steps } from "../../../../public/data";
import Stepper from "@/components/dom/Stepper";
import { useCartStore } from "@/zustand/store";
import CartItems from "@/components/dom/CartItems";



function Page() {
    

    const { removeFromCart, updateQuantity, clearCart, calculateTotals, items } =
      useCartStore();
     const [currentStep, setCurrentStep] = useState(0);


     const nextStep = () => {
       if (currentStep < steps.length - 1) {
         setCurrentStep(currentStep + 1);
       }
     };

     const prevStep = () => {
       if (currentStep > 0) {
         setCurrentStep(currentStep - 1);
       }
     };

     const goToStep = (stepIndex: number) => {
       setCurrentStep(stepIndex);
     };


  return (
    <section className="max-padd-container mt-36">
      <div className="max-padd-container2 min-h-[calc(100vh-150px)] flex flex-col">
        <Stepper
          steps={steps}
          currentStep={currentStep}
          nextStep={nextStep}
          prevStep={prevStep}
          goToStep={goToStep}
        />
        <div className="flex flex-1 h-full gap-20">
         <CartItems/>
          <div className="w-1/3 border-primary-2 rounded-3xl">here2</div>
        </div>
      </div>
    </section>
  );
}

export default Page;
