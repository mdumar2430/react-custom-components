import { FC } from "react";
import { StepProps } from "./ASMainContent";

const UserMainContent: FC<StepProps> = ({ onContinue, onSkip }) => {
  return (
    <div className="w-[70%] float-right p-10 relative">
      <div>
        <p className="text-2xl text-left text-gray-700 mb-2.5">
          Add Users for [ ]
        </p>
        <p className="w-full text-sm text-left text-[#333] mb-7">
          To get started with optimising your account, we need a few details
          about your restaurant location. This will help us tailor our features
          to your specific needs and ensure a seamless setup.
        </p>

        {/* <!-- Row Title --> */}
        <div className="w-full flex mb-2.5">
          <div className="w-[23%] ml-5 content-center float-left text-base text-left text-[#111928]">
            First name <span className="text-[#ff3030]">*</span>
          </div>
          <div className="w-[23%] ml-5 content-center float-left text-base text-left text-[#111928]">
            Last name
          </div>
          <div className="w-[23%] ml-5 content-center float-left text-base text-left text-[#111928]">
            Role
          </div>
          <div className="w-[23%] ml-5 content-center float-left text-base text-left text-[#111928]">
            Email ID <span className="text-[#ff3030]">*</span>
          </div>
          <div className="w-[4%] ml-5 content-center float-left text-base text-left text-[#111928]"></div>
        </div>

        {/* <!-- Row content --> */}
        <div className="w-full h-20 rounded-[5px] rounded-tr-[5px] bg-slate-100 border border-[#b6c0cc]/50">
          <div className="flex h-20 ">
            <div className="w-[23%] ml-5 content-center">
              <input
                type="text"
                name="mail"
                id="mail"
                className=" border border-gray-300 text-gray-900 text-sm rounded-lg focus:ring-primary-600 focus:border-primary-600 block w-full p-2.5 "
                placeholder=""
                required
              />
            </div>
            <div className="w-[23%] ml-5 content-center">
              <input
                type="text"
                name="mail"
                id="mail"
                className=" border border-gray-300 text-gray-900 text-sm rounded-lg focus:ring-primary-600 focus:border-primary-600 block w-full p-2.5 "
                placeholder=""
                required
              />
            </div>
            <div className="w-[23%] ml-5 content-center">
              <select className="border border-gray-300 text-gray-900 text-sm rounded-lg focus:ring-blue-500 focus:border-blue-500 block w-full p-2.5">
                <option selected>Select role</option>
                <option value="US">Bistro</option>
                <option value="CA">Curry House</option>
                <option value="FR">Pizzeria</option>
                <option value="DE">Café</option>
              </select>
            </div>
            <div className="w-[23%] ml-5 content-center">
              <input
                type="mail"
                name="mail"
                id="mail"
                className=" border border-gray-300 text-gray-900 text-sm rounded-lg focus:ring-primary-600 focus:border-primary-600 block w-full p-2.5 "
                placeholder=""
                required
              />
            </div>
            <div className="w-[4%] ml-5 content-center float-left text-base text-left text-[#111928]"></div>
          </div>
        </div>
        <div className="w-full h-20 rounded-[5px] rounded-tr-[5px] bg-slate-100 border border-[#b6c0cc]/50 mt-5">
          <div className="flex h-20 ">
            <div className="w-[23%] ml-5 content-center">
              <input
                type="text"
                name="mail"
                id="mail"
                className=" border border-gray-300 text-gray-900 text-sm rounded-lg focus:ring-primary-600 focus:border-primary-600 block w-full p-2.5 "
                placeholder=""
                required
              />
            </div>
            <div className="w-[23%] ml-5 content-center">
              <input
                type="text"
                name="mail"
                id="mail"
                className=" border border-gray-300 text-gray-900 text-sm rounded-lg focus:ring-primary-600 focus:border-primary-600 block w-full p-2.5 "
                placeholder=""
                required
              />
            </div>
            <div className="w-[23%] ml-5 content-center">
              <select className="border border-gray-300 text-gray-900 text-sm rounded-lg focus:ring-blue-500 focus:border-blue-500 block w-full p-2.5">
                <option selected>Select role</option>
                <option value="US">Bistro</option>
                <option value="CA">Curry House</option>
                <option value="FR">Pizzeria</option>
                <option value="DE">Café</option>
              </select>
            </div>
            <div className="w-[23%] ml-5 content-center">
              <input
                type="mail"
                name="mail"
                id="mail"
                className=" border border-gray-300 text-gray-900 text-sm rounded-lg focus:ring-primary-600 focus:border-primary-600 block w-full p-2.5 "
                placeholder=""
                required
              />
            </div>
            <div className="w-[4%] ml-5 content-center float-left text-base text-left text-[#111928]">
              <a
                href=""
                className="cursor-pointer fill-gray-800 hover:fill-blue-700"
              >
                <svg
                  width="14"
                  height="16"
                  viewBox="0 0 14 16"
                  xmlns="http://www.w3.org/2000/svg"
                  className=""
                  preserveAspectRatio="none"
                >
                  <path
                    opacity="0.7"
                    d="M8.375 13C8.15625 13 8 12.8438 8 12.625V5.875C8 5.6875 8.15625 5.5 8.375 5.5H9.125C9.3125 5.5 9.5 5.6875 9.5 5.875V12.625C9.5 12.8438 9.3125 13 9.125 13H8.375ZM13.5 2.5C13.75 2.5 14 2.75 14 3V3.5C14 3.78125 13.75 4 13.5 4H13V14.5C13 15.3438 12.3125 16 11.5 16H2.5C1.65625 16 1 15.3438 1 14.5V4H0.5C0.21875 4 0 3.78125 0 3.5V3C0 2.75 0.21875 2.5 0.5 2.5H3.0625L4.125 0.75C4.375 0.3125 4.875 0 5.40625 0H8.5625C9.09375 0 9.59375 0.3125 9.84375 0.75L10.9062 2.5H13.5ZM5.34375 1.59375L4.8125 2.5H9.15625L8.625 1.59375C8.59375 1.5625 8.53125 1.5 8.46875 1.5H5.53125C5.5 1.5 5.5 1.5 5.5 1.5C5.4375 1.5 5.375 1.5625 5.34375 1.59375ZM11.5 14.5V4H2.5V14.5H11.5ZM4.875 13C4.65625 13 4.5 12.8438 4.5 12.625V5.875C4.5 5.6875 4.65625 5.5 4.875 5.5H5.625C5.8125 5.5 6 5.6875 6 5.875V12.625C6 12.8438 5.8125 13 5.625 13H4.875Z"
                  ></path>
                </svg>
              </a>
            </div>
          </div>
        </div>

        {/* <!-- Add user button --> */}
        <button
          type="button"
          className="flex items-center justify-start px-6 py-3 mt-5 text-base text-center text-blue-700 bg-white border border-blue-700 rounded-lg group hover:bg-blue-700 hover:text-white hover:fill-white"
        >
          <svg
            fill="none"
            className="w-5 h-5 mr-2 fill-blue-700 group-hover:fill-white"
            viewBox="0 0 20 20"
          >
            <g clip-path="url(#clip0_2246_522)">
              <path d="M13.188 9.281h-2.5V6.812a.7.7 0 00-.72-.687.7.7 0 00-.687.719v2.468H6.812a.7.7 0 00-.687.72.7.7 0 00.719.687h2.468v2.469a.7.7 0 00.72.687.7.7 0 00.687-.719v-2.469h2.469a.7.7 0 00.687-.718.694.694 0 00-.688-.688z" />
              <path d="M10 .563A9.43 9.43 0 00.562 10c0 5.219 4.25 9.469 9.47 9.469 5.218 0 9.468-4.25 9.468-9.469C19.469 4.781 15.219.562 10 .562zm0 17.5c-4.438 0-8.031-3.625-8.031-8.063A8.029 8.029 0 0110 1.969c4.438 0 8.063 3.593 8.063 8.031 0 4.438-3.625 8.063-8.063 8.063z" />
            </g>
            <defs>
              <clipPath id="clip0_2246_522">
                <path fill="#fff" d="M0 0h20v20H0z" />
              </clipPath>
            </defs>
          </svg>
          Add New User
        </button>
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

export default UserMainContent;
