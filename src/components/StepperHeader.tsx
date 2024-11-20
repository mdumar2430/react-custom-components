import React from "react";
import activeStepIcon from "../img/active-step.svg";
import inActiveStepIcon from "../img/inactive-step.svg";
import completedStepIcon from "../img/completed-step.svg";

interface Step {
  title: string;
  isActive: boolean;
  isCompleted: boolean;
}

interface StepperHeaderProps {
  steps: Step[];
}

const StepperHeader: React.FC<StepperHeaderProps> = ({ steps }) => {
  return (
    <div className="header min-h-20 bg-gray-100 border-b-[1px] border-gray-300 content-center justify-center">
      <div className="flex flex-row justify-center">
        {steps.map((step, index) => (
          <div key={index} className="flex items-center ml-2.5">
            <img
              src={
                step.isCompleted
                  ? completedStepIcon
                  : step.isActive
                  ? activeStepIcon
                  : inActiveStepIcon
              }
              alt={step.title}
              className="w-5 h-5"
            />
            <p
              className={`text-sm font-medium text-center ml-1.5 ${
                step.isCompleted
                  ? "text-emerald-600"
                  : step.isActive
                  ? "text-blue-700"
                  : "text-[#666]"
              }`}
            >
              {step.title}
            </p>
            {index < steps.length - 1 && (
              <div
                className={`h-[1px] w-16 ${
                  step.isCompleted
                    ? "bg-emerald-600"  
                    : step.isActive
                    ? "bg-blue-700"
                    : "bg-gray-400"
                }`}
              ></div>
            )}
          </div>
        ))}
      </div>
    </div>
  );
};

export default StepperHeader;
