import { FC } from "react";
import { StepProps } from "./ASMainContent";

const POSMainContent: FC<StepProps> = ({ onContinue, onSkip }) => {
  return (
    <div className="w-[70%] float-right p-10 relative">
      <div>
        <p className="text-2xl text-left text-gray-700 mb-2.5">
          Connect to POS
        </p>
        <p className="w-full text-sm text-left text-[#333] mb-7">
          To fully integrate Profit AI with your restaurant’s operations, it’s
          crucial to connect your Point of Sale (POS) system. This will allow
          htmlFor seamless syncing of sales, inventory, and other key data.
        </p>

        <div className="w-64">
          <label
            htmlFor="email"
            className="block mb-2 text-base text-left text-[#111928] w-full"
          >
            Select your POS
          </label>
          <select
            id="countries"
            className="bg-white border border-gray-300  border-white-900  text-gray-900 pr-[10px] text-md rounded-lg focus:ring-blue-500 focus:border-blue-500 block w-full p-2.5"
          >
            <option selected>Select</option>
            <option value="US">United States</option>
            <option value="CA">Canada</option>
            <option value="FR">France</option>
            <option value="DE">Germany</option>
          </select>
        </div>
        <hr className="w-full mt-8 mb-8 border-gray-200" />
        <button
          type="button"
          className="flex items-center px-6 py-3 text-base text-center text-white bg-blue-700 rounded-lg group hover:bg-blue-900"
        >
          Connect to Square POS
        </button>
        <div className="w-[60%] mt-8">
          <div className="w-full bg-gray-200 rounded-full h-2.5 mb-2">
            <div
              className="bg-blue-700 h-2.5 rounded-full dark:bg-blue-500"
              style={{ width: "45%" }}
            ></div>
          </div>
          <div className="text-sm">
            Importing Sales categories from POS. Please wait...
          </div>
        </div>
      </div>

      <div className="h-[120px] px-10 items-center flex absolute bottom-0 left-0 w-full">
        <div className="flex flex-row justify-between w-full">
          <button
            onClick={onSkip}
            type="button"
            className="flex items-center px-6 py-3 text-base text-center text-blue-700 bg-white border border-blue-700 rounded-lg group hover:bg-blue-700 hover:text-white hover:fill-white"
          >
            Skip this step
            <svg
              width="14"
              height="12"
              viewBox="0 0 14 12"
              xmlns="http://www.w3.org/2000/svg"
              className="ml-2 fill-blue-700 group-hover:fill-white"
              preserveAspectRatio="none"
            >
              <path d="M13.6719 5.33047C14.082 5.68594 14.082 6.31484 13.6719 6.67031L8.42188 11.0453C7.84766 11.5102 7 11.1273 7 10.3617V1.61172C7 0.873436 7.84766 0.490623 8.42188 0.955467L13.6719 5.33047ZM6.67188 5.33047C7.08203 5.68594 7.08203 6.31484 6.67188 6.67031L1.42188 11.0453C0.847656 11.5102 0 11.1273 0 10.3617V1.61172C0 0.873436 0.847656 0.490623 1.42188 0.955467L6.67188 5.33047Z"></path>
            </svg>
          </button>
          <button
            onClick={onContinue}
            type="button"
            className="flex items-center px-6 py-3 text-base text-center text-white bg-blue-700 border border-blue-700 rounded-lg group hover:bg-blue-900"
          >
            Continue
            <svg
              width="18"
              height="10"
              viewBox="0 0 18 10"
              className="ml-2 fill-white "
              xmlns="http://www.w3.org/2000/svg"
              preserveAspectRatio="none"
            >
              <path d="M13.2812 9.18552C12.9688 9.49802 12.5 9.30271 12.5 8.87302V6.09958H0.46875C0.195312 6.09958 0 5.90427 0 5.63083V4.38083C0 4.10739 0.195312 3.91208 0.46875 3.91208H12.5V1.13864C12.5 0.708956 12.9688 0.513644 13.2812 0.787081L17.1484 4.65427C17.3438 4.84958 17.3438 5.16208 17.1484 5.31833L13.2812 9.18552Z"></path>
            </svg>
          </button>
        </div>
      </div>
    </div>
  );
};

export default POSMainContent;
