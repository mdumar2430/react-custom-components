import { FC, useState } from "react";
import Welcome from "./Welcome";
import Stepper from "./Stepper";

interface OnBoardingPageProps {
  onSkip: () => void;
}
const OnBoardingPage: FC<OnBoardingPageProps> = ({ onSkip }) => {
  const [showWelcome, setWelcome] = useState<boolean>(true);

  function handleWelcomeProceed(): void {
    setWelcome(false);
  }

  return (
    <>
      {showWelcome && (
        <Welcome onSkip={onSkip} onProceed={handleWelcomeProceed} />
      )}
      {!showWelcome && <Stepper />}
    </>
  );
};

export default OnBoardingPage;