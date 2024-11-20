import { FC } from "react";
export interface StepProps{
    onContinue: ()=>void,
    onSkip: ()=>void
}
const ASMainContent: FC<StepProps> = ({ onContinue, onSkip }) => {
  return (
    <div className="w-[70%] float-right p-10 relative">
      <div>
        <p className="text-2xl text-left text-gray-700 mb-2.5">
          Connect to Accounting System
        </p>
        <p className="w-full text-sm text-left text-[#333] mb-7">
          To ensure your financial data is accurately tracked and managed,
          connect your accounting system with Profit AI. This integration will
          streamline your financial processes and provide you with comprehensive
          insights.
        </p>

        <div className="w-64">
          <label
            htmlFor="email"
            className="block mb-2 text-base text-left text-[#111928] w-full"
          >
            Select your Accounting System
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
        <div className="flex flex-row mb-8">
          <div className="w-36 text-center bg-white border border-[#2662E4] rounded-lg relative p-2.5">
            <div className="w-14 h-14 bg-[#D9D9D9] rounded-full m-auto mb-4 mt-2 content-center">
              <svg
                fill="none"
                preserveAspectRatio="none"
                className="flex w-2/4 m-auto"
                viewBox="0 0 20 16"
              >
                <path
                  fill="#2662E4"
                  d="M1.5 15h8.531c.094.375.25.719.469 1h-9A1.48 1.48 0 010 14.5v-1.281C0 10.906 1.875 9 4.188 9c.906 0 1.312.5 2.78.5 1.5 0 1.907-.5 2.813-.5.219.031.438.031.656.094a2.522 2.522 0 00-.406.937c-.094 0-.156-.031-.25-.031-.594 0-1.219.5-2.781.5-1.594 0-2.188-.5-2.813-.5C2.407 10.031 1 11.438 1 13.219V14.5c0 .281.219.5.5.5zM7 8C4.781 8 3 6.219 3 4c0-2.188 1.781-4 4-4 2.188 0 4 1.813 4 4 0 2.219-1.813 4-4 4zm0-7c-1.656.031-3 1.375-3 3a3 3 0 003 3c1.625 0 3-1.344 3-3 0-1.625-1.375-3-3-3zm8.5 10.5c.531 0 1 .469 1 1 0 .563-.469 1-1 1-.563 0-1-.438-1-1 0-.531.438-1 1-1zm3-2.5c.813 0 1.5.688 1.5 1.5v4a1.5 1.5 0 01-1.5 1.5h-6a1.48 1.48 0 01-1.5-1.5v-4A1.5 1.5 0 0112.5 9h.5V7.5C13 6.125 14.094 5 15.5 5 16.875 5 18 6.125 18 7.5V9h.5zM14 7.5V9h3V7.5c0-.813-.688-1.5-1.5-1.5A1.5 1.5 0 0014 7.5zm5 7v-4c0-.25-.25-.5-.5-.5h-6c-.281 0-.5.25-.5.5v4c0 .281.219.5.5.5h6c.25 0 .5-.219.5-.5z"
                />
              </svg>
            </div>
            <p className="text-xs text-center text-[#2662E4]">
              I have QuickBooks Online credentials
            </p>
            <svg
              className="w-6 h-6 absolute right-[10px] top-[10px]"
              preserveAspectRatio="none"
              viewBox="0 0 16 16"
            >
              <path
                fill="#2662E4"
                d="M15.75 8c0 4.281-3.5 7.75-7.75 7.75A7.749 7.749 0 01.25 8C.25 3.75 3.719.25 8 .25c4.25 0 7.75 3.5 7.75 7.75zm-8.656 4.125l5.75-5.75a.53.53 0 000-.719l-.719-.687a.442.442 0 00-.688 0L6.75 9.656 4.531 7.47a.442.442 0 00-.687 0l-.719.687a.53.53 0 000 .719l3.25 3.25a.53.53 0 00.719 0z"
              />
            </svg>
          </div>
          <div className="w-36 text-center bg-white border border-[#999] rounded-lg relative p-2.5 ml-10">
            <div className="w-14 h-14 bg-[#D9D9D9] rounded-full m-auto mb-4 mt-2 content-center">
              {/* <!-- <svg fill="none" preserveAspectRatio="none" className="flex w-2/4 m-auto" viewBox="0 0 20 16"><path fill="#2662E4" d="M1.5 15h8.531c.094.375.25.719.469 1h-9A1.48 1.48 0 010 14.5v-1.281C0 10.906 1.875 9 4.188 9c.906 0 1.312.5 2.78.5 1.5 0 1.907-.5 2.813-.5.219.031.438.031.656.094a2.522 2.522 0 00-.406.937c-.094 0-.156-.031-.25-.031-.594 0-1.219.5-2.781.5-1.594 0-2.188-.5-2.813-.5C2.407 10.031 1 11.438 1 13.219V14.5c0 .281.219.5.5.5zM7 8C4.781 8 3 6.219 3 4c0-2.188 1.781-4 4-4 2.188 0 4 1.813 4 4 0 2.219-1.813 4-4 4zm0-7c-1.656.031-3 1.375-3 3a3 3 0 003 3c1.625 0 3-1.344 3-3 0-1.625-1.375-3-3-3zm8.5 10.5c.531 0 1 .469 1 1 0 .563-.469 1-1 1-.563 0-1-.438-1-1 0-.531.438-1 1-1zm3-2.5c.813 0 1.5.688 1.5 1.5v4a1.5 1.5 0 01-1.5 1.5h-6a1.48 1.48 0 01-1.5-1.5v-4A1.5 1.5 0 0112.5 9h.5V7.5C13 6.125 14.094 5 15.5 5 16.875 5 18 6.125 18 7.5V9h.5zM14 7.5V9h3V7.5c0-.813-.688-1.5-1.5-1.5A1.5 1.5 0 0014 7.5zm5 7v-4c0-.25-.25-.5-.5-.5h-6c-.281 0-.5.25-.5.5v4c0 .281.219.5.5.5h6c.25 0 .5-.219.5-.5z"/></svg> --> */}
              <svg
                fill="none"
                preserveAspectRatio="none"
                className="flex w-2/4 m-auto"
                viewBox="0 0 20 14"
              >
                <path
                  fill="#666"
                  d="M16 6c2.188 0 4 1.813 4 4 0 2.219-1.813 4-4 4-2.219 0-4-1.781-4-4 0-2.188 1.781-4 4-4zm0 7c1.625 0 3-1.344 3-3 0-1.625-1.375-3-3-3-1.656 0-3 1.375-3 3a3 3 0 003 3zm1.813-3.656c.093 0 .187.094.187.156v1a.202.202 0 01-.188.188h-1.156v1.156c0 .094-.093.156-.156.156h-1c-.094 0-.188-.063-.188-.156v-1.156h-1.156c-.094 0-.156-.094-.156-.188v-1c0-.063.063-.156.156-.156h1.156V8.188c0-.094.094-.188.188-.188h1c.063 0 .156.094.156.188v1.156h1.157zM10 7c-.031 0-.031.031-.031.031-1.906 0-3.469-1.593-3.469-3.5V3.5C6.5 1.594 8.063 0 10 0c1.906 0 3.5 1.594 3.5 3.5C13.5 5.438 11.906 7 10 7zm0-6c-1.406.031-2.5 1.125-2.5 2.5C7.5 4.906 8.594 6 10 6c1.375 0 2.5-1.094 2.5-2.5C12.5 2.125 11.375 1 10 1zM3 6A2.468 2.468 0 01.5 3.5C.5 2.125 1.594 1 3 1c1.375 0 2.5 1.125 2.5 2.5C5.5 4.906 4.375 6 3 6zm0-4a1.5 1.5 0 00-1.5 1.5C1.5 4.344 2.156 5 3 5a1.5 1.5 0 001.5-1.5C4.5 2.687 3.812 2 3 2zm9 11c.313.406.625.719 1.031 1H5.5A1.48 1.48 0 014 12.5v-1.406c0-.719.219-1.406.594-2 .656-.938 1.75-1.469 2.875-1.469C8.53 7.625 8.78 8 10 8c.719 0 1.125-.125 1.563-.25a5.18 5.18 0 00-.438 1.156c-.344.063-.719.125-1.094.125 0 0-.031 0-.031-.031-1.344 0-1.656-.375-2.531-.375-.844 0-1.625.406-2.032 1.031A2.698 2.698 0 005 11.125V12.5c0 .281.219.5.5.5H12zM4.906 7.406a4.463 4.463 0 00-.812.719c-.157-.063-.313-.094-.469-.125h-1.25C1.594 8 1 8.688 1 9.5c0 .281-.25.5-.5.5a.494.494 0 01-.5-.5C0 8.125 1.063 7 2.375 7h1.25c.469.031.906.156 1.281.406z"
                />
              </svg>
            </div>
            <p className="text-xs text-center text-[#333]">
              I need my accountant's help
            </p>
            {/* <!-- <svg className="w-6 h-6 absolute right-[10px] top-[10px]" preserveAspectRatio="none" viewBox="0 0 16 16"><path fill="#2662E4" d="M15.75 8c0 4.281-3.5 7.75-7.75 7.75A7.749 7.749 0 01.25 8C.25 3.75 3.719.25 8 .25c4.25 0 7.75 3.5 7.75 7.75zm-8.656 4.125l5.75-5.75a.53.53 0 000-.719l-.719-.687a.442.442 0 00-.688 0L6.75 9.656 4.531 7.47a.442.442 0 00-.687 0l-.719.687a.53.53 0 000 .719l3.25 3.25a.53.53 0 00.719 0z"/></svg> --> */}
          </div>
        </div>
        <button
          type="button"
          className=" group flex text-white items-center bg-[#529D36] hover:bg-[#333] rounded-lg text-base px-6 py-3 text-center "
        >
          Connect to QuickBooks Online
        </button>
        <p className="text-xs text-left text-[#666] mt-2">
          You will be redirected to the QuickBooks login page,
          <br />
          Please ensure your popup blocker is disabled.{" "}
        </p>
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

export default ASMainContent;
