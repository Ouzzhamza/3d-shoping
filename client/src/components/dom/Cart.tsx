import React, { useState } from "react";
import Stepper from "./Stepper";
import { steps } from "../../../public/data";
import CartItems from "@/components/dom/CartItems";
import PriceDetails from "@/components/dom/PriceDetails";
import ShippingAddress from "@/components/dom/ShippingAddress";
import Payment from "@/components/dom/Payment";


function Cart() {
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
    <div className="max-padd-container2 min-h-[calc(100vh-150px)] flex flex-col">
      <Stepper
        steps={steps}
        currentStep={currentStep}
        goToStep={goToStep}
      />
      <div className="w-full max-padd-container2">
        {currentStep === 0 && (
          <div className="flex flex-1 h-[calc(100vh-280px)] gap-20">
            <CartItems />
            <div className="w-1/3">
              <PriceDetails nextStep={nextStep} />
            </div>
          </div>
        )}
        {currentStep === 1 && (
          <div className="h-[calc(100vh-280px)] flex justify-center items-center px-[300px]">
            <div className="w-full h-full rounded-3xl border-primary-2 backdrop-blur-3xl flex justify-center relative">
              <ShippingAddress nextStep={nextStep} prevStep={prevStep} />
            </div>
          </div>
        )}
        {currentStep === 2 && (
          <div className="h-[calc(100vh-280px)] flex justify-center items-center px-[300px]">
            <div className="w-full h-full rounded-3xl border-primary-2 backdrop-blur-3xl flex justify-center relative">
              <Payment  prevStep={prevStep} />
            </div>
          </div>
        )}
      </div>
    </div>
  );
}

export default Cart;
