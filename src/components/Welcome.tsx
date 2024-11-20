import { FC } from "react";
import welcomeBg from "../img/welcome-bg.jpg";
import welcomeIconSvg from "../img/welcome-icon.svg";

interface WelcomeProps {
  onSkip: () => void;
  onProceed: () => void;
}

const Welcome: FC<WelcomeProps> = ({ onSkip, onProceed }) => {
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
      />
      <div className="fixed inset-0 z-10 w-screen">
        <div className="parent lex w-4/5 h-5/6 mx-auto mt-[5%]">
          <div className="relative w-full overflow-hidden text-left transition-all transform bg-white shadow-xl rounded-2xl">
            <div
              className="bg-white bg-no-repeat bg-cover p-[100px]"
              style={{ backgroundImage: `url(${welcomeBg})` }}
            >
              <p className="w-full text-4xl text-center text-[#333] font-medium">
                Welcome to Profit AI.
              </p>
              <div className="w-full text-xl text-center text-[#333] pt-6 font-light">
                Your Smart Solution for Data-Driven Profit Growth
              </div>
              <div className="flex content-center justify-center mt-16">
                <div className="w-4/12 ">
                  <div
                    className="w-[90%] bg-no-repeat bg-contain h-full"
                    style={{ backgroundImage: `url(${welcomeIconSvg})` }}
                  />
                </div>
                <div className="w-8/12 text-lg">
                  <div className="mb-6 font-light">
                    We’re excited to have you onboard! Profit AI will empower
                    your business with actionable insights, helping you make
                    smarter decisions, streamline operations, and drive
                    sustainable growth.
                  </div>
                  <div className="mb-6 font-light">
                    Follow our easy onboarding steps to customise Profit AI for
                    your business. In just a few minutes, you'll be ready to
                    harness the power of AI and take your business to the next
                    level.
                  </div>
                  <div>Start your journey to higher profits now!</div>
                  <div className="flex items-center w-full mt-6 ">
                    <input
                      id="default-checkbox"
                      type="checkbox"
                      className="w-4 h-4 text-blue-600 bg-gray-100 border-gray-300 rounded focus:ring-blue-500 dark:focus:ring-blue-600 dark:ring-offset-gray-800 focus:ring-2 dark:bg-gray-700 dark:border-gray-600"
                    />
                    <label
                      htmlFor="default-checkbox"
                      className="text-base text-gray-800 ms-2"
                    >
                      I agree to the{" "}
                      <a className="text-blue-700 underline hover:no-underline">
                        Terms and Condition
                      </a>
                    </label>
                  </div>
                </div>
              </div>
              <div className="border border-b-[1px] border-gray-200 mt-14 mb-14" />
              <div className="flex items-center w-full">
                <div className="flex flex-row content-center justify-between w-full">
                  <div className="flex items-center">
                    <button
                      onClick={onSkip}
                      type="button"
                      className="flex items-center px-6 py-3 text-base text-center text-blue-700 bg-white border border-blue-700 rounded-lg group hover:bg-blue-700 hover:text-white hover:fill-white"
                    >
                      Skip setup
                      <svg
                        width={14}
                        height={12}
                        viewBox="0 0 14 12"
                        xmlns="http://www.w3.org/2000/svg"
                        className="ml-2 fill-blue-700 group-hover:fill-white"
                        preserveAspectRatio="none"
                      >
                        <path d="M13.6719 5.33047C14.082 5.68594 14.082 6.31484 13.6719 6.67031L8.42188 11.0453C7.84766 11.5102 7 11.1273 7 10.3617V1.61172C7 0.873436 7.84766 0.490623 8.42188 0.955467L13.6719 5.33047ZM6.67188 5.33047C7.08203 5.68594 7.08203 6.31484 6.67188 6.67031L1.42188 11.0453C0.847656 11.5102 0 11.1273 0 10.3617V1.61172C0 0.873436 0.847656 0.490623 1.42188 0.955467L6.67188 5.33047Z" />
                      </svg>
                    </button>
                    <div className="w-5/12 ml-5 text-sm text-gray-600">
                      But if you’d rather explore on your own, you can skip the
                      onboarding and complete it later.
                    </div>
                  </div>
                  <button
                    onClick={onProceed}
                    type="button"
                    className="flex items-center px-6 py-3 text-base text-center text-white bg-blue-700 border border-blue-700 rounded-lg hover:bg-blue-900 "
                  >
                    Proceed with setup
                    <svg
                      width={18}
                      height={10}
                      viewBox="0 0 18 10"
                      className="ml-2 fill-white "
                      xmlns="http://www.w3.org/2000/svg"
                      preserveAspectRatio="none"
                    >
                      <path d="M13.2812 9.18552C12.9688 9.49802 12.5 9.30271 12.5 8.87302V6.09958H0.46875C0.195312 6.09958 0 5.90427 0 5.63083V4.38083C0 4.10739 0.195312 3.91208 0.46875 3.91208H12.5V1.13864C12.5 0.708956 12.9688 0.513644 13.2812 0.787081L17.1484 4.65427C17.3438 4.84958 17.3438 5.16208 17.1484 5.31833L13.2812 9.18552Z" />
                    </svg>
                  </button>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Welcome;
