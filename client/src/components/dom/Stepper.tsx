import { useTranslations } from "next-intl";
import React from "react";
import { FaCheck } from "react-icons/fa6";
import { IconType } from "react-icons/lib";

export interface Step {
  id: number;
  title: string;
  icon: IconType;
}

interface StepperProps {
  steps: Step[];
  currentStep: number;
  nextStep: () => void;
  prevStep: () => void;
  goToStep: (stepIndex: number) => void;
}

function Stepper({
  steps,
  currentStep,
  nextStep,
  prevStep,
  goToStep,
}: StepperProps) {


  const t = useTranslations("Cart")
  return (
    <div className="w-full pb-10">
      <div className="relative w-full flex items-center justify-between px-10">
        <div className="absolute top-6 left-0 right-0 h-0.5 bg-text-light mx-16">
          <div
            className="h-full bg-primary transition-all duration-500 ease-in-out"
            style={{
              width:
                steps.length > 1
                  ? `${(currentStep / (steps.length - 1)) * 100}%`
                  : "0%",
            }}
          />
        </div>

        {steps.map((step, index) => {
          const Icon = step.icon;
          const isActive = index === currentStep;
          const isCompleted = index < currentStep;
          const isClickable = index <= currentStep;

          return (
            <div
              key={step.id}
              className="flex flex-col items-center relative z-10"
              onClick={() => isClickable && goToStep(index)}
            >
              <div
                className={` w-12 h-12 rounded-full flex items-center justify-center transition-all duration-300 cursor-pointer
                        ${
                          isActive
                            ? "bg-primary text-black shadow-lg scale-110"
                            : isCompleted
                            ? "bg-green-500 text-white"
                            : "bg-white text-gray-400 border-2 border-gray-200"
                        }
                        ${isClickable ? "hover:scale-105" : ""}`}
              >
                {isCompleted ? <FaCheck size={20} /> : <Icon size={20} />}
              </div>

              <div className="mt-3 text-center">
                <div
                  className={`text-sm font-medium transition-colors duration-300 ${
                    isActive
                      ? "text-white"
                      : isCompleted
                      ? "text-green-600"
                      : "text-gray-500"
                  }`}
                >
                  {t(step.title)}
                </div>
              </div>
            </div>
          );
        })}
      </div>
    </div>
  );
}

export default Stepper;
