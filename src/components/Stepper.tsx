import { useState } from "react";
import StepperHeader from "./StepperHeader";
import POSHelperContent from "./POSHelperContent";
import LocationHelperContent from "./LocationHelperContent";
import UserHelperContent from "./UserHelperContent";
import ASHelperContent from "./ASHelperContent";
import LocationMainContent from "./LocationMainContent";
import UserMainContent from "./UserMainContent";
import ASMainContent from "./ASMainContent";
import POSMainContent from "./POSMainContent";
const Stepper = () => {
  const [currentStep, setCurrentStep] = useState(0);

  const onSkip = () => {
    // Handle skip action
  };

  const onContinue = () => {
    setCurrentStep((prevStep) => Math.min(prevStep + 1, steps.length - 1));
  };
  const steps = [
    {
      title: "Add Locations",
      isActive: currentStep === 0,
      isCompleted: currentStep > 0,
      helperContent: <LocationHelperContent />,
      mainContent: (
        <LocationMainContent onContinue={onContinue} onSkip={onSkip} />
      ),
    },
    {
      title: "Add Users",
      isActive: currentStep === 1,
      isCompleted: currentStep > 1,
      helperContent: <UserHelperContent />,
      mainContent: <UserMainContent onContinue={onContinue} onSkip={onSkip} />,
    },
    {
      title: "Connect to Accounting System",
      isActive: currentStep === 2,
      isCompleted: currentStep > 2,
      helperContent: <ASHelperContent />,
      mainContent: <ASMainContent onContinue={onContinue} onSkip={onSkip} />,
    },
    {
      title: "Connect to POS",
      isActive: currentStep === 3,
      isCompleted: currentStep > 3,
      helperContent: <POSHelperContent />,
      mainContent: <POSMainContent onContinue={onContinue} onSkip={onSkip} />,
    },
  ];

  return (
    <div
      className="relative z-10"
      aria-labelledby="modal-title"
      role="dialog"
      aria-modal="true"
    >
      <div
        className="fixed inset-0 transition-opacity bg-opacity-75 bg-black/60"
        aria-hidden="true"
      ></div>

      <div className="fixed inset-0 z-10 w-screen">
        <div className="parent lex w-4/5 h-5/6 mx-auto mt-[5%]">
          <div className="relative w-full overflow-hidden text-left transition-all transform bg-white shadow-xl rounded-2xl">
            <div className="bg-white ">
              {/* <!-- Header Stepper --> */}
              <StepperHeader steps={steps} />

              <div className="flex flex-row items-stretch ">
                {/* <!-- Help Content Section --> */}
                {steps[currentStep].helperContent}
                {/* <!-- Main Content --> */}
                {steps[currentStep].mainContent}
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Stepper;
