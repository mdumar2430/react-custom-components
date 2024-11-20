import { FC, useState } from "react";
import { StepProps } from "./ASMainContent";

const locations = [
  {
    id: 1,
    restaurantName: "Bistro Delight",
    restaurantType: "Bistro",
    addressLine1: "123 Main St",
    addressLine2: "Suite 100",
    city: "Springfield",
    state: "IL",
    zipcode: "62701",
    timezone: "UTC-06:00",
  },
  {
    id: 2,
    restaurantName: "Curry House",
    restaurantType: "Curry House",
    addressLine1: "456 Elm St",
    addressLine2: "",
    city: "Metropolis",
    state: "NY",
    zipcode: "10001",
    timezone: "UTC-05:00",
  },
];

const LocationMainContent: FC<StepProps> = ({ onContinue, onSkip }) => {
  //   const [isOpen, setIsOpen] = useState(false);
  return (
    <div className="w-[70%] float-right p-10 relative">
      <div>
        <p className="text-2xl text-left text-gray-700 mb-2.5">
          Add Locations for Talula's Table
        </p>
        <p className="w-full text-sm text-left text-[#333] mb-7">
          To get started with optimising your account, we need a few details
          about your restaurant location. This will help us tailor our features
          to your specific needs and ensure a seamless setup.
        </p>

        {/* <!-- Row Title --> */}
        <div className="w-full flex mb-2.5">
          <div className="w-[26%] ml-5 content-center float-left text-base text-left text-[#111928]">
            Restaurant Location <span className="text-[#ff3030]">*</span>
          </div>
          <div className="w-[23%] ml-5 content-center float-left text-base text-left text-[#111928]">
            Type
          </div>
          <div className="w-[36%] ml-5 content-center float-left text-base text-left text-[#111928]">
            Address
          </div>
        </div>

        {/* <!-- Row content --> */}
        <div className="overflow-y-auto max-h-80">
          {locations.map((location) => {
            // eslint-disable-next-line react-hooks/rules-of-hooks
            const [isOpen, setIsOpen] = useState(false);

            return (
              <div key={location.id}>
                {/* Accordion Header */}
                <div className="w-full h-20 rounded-[5px] rounded-tr-[5px] bg-slate-100 border border-[#b6c0cc]/50">
                  <div className="flex h-20 ">
                    <div className="w-[26%] ml-5 content-center">
                      <input
                        type="text"
                        name="mail"
                        id="mail"
                        className="border border-gray-300 text-gray-900 text-sm rounded-lg focus:ring-primary-600 focus:border-primary-600 block w-full p-2.5"
                        placeholder="Restaurant Location"
                        defaultValue={location.restaurantName}
                        required
                      />
                    </div>
                    <div className="w-[23%] ml-5 content-center">
                      <select
                        className="border border-gray-300 text-gray-900 text-sm rounded-lg focus:ring-blue-500 focus:border-blue-500 block w-full p-2.5"
                        defaultValue={location.restaurantType}
                      >
                        <option value="Bistro">Bistro</option>
                        <option value="Curry House">Curry House</option>
                        <option value="Pizzeria">Pizzeria</option>
                        <option value="Café">Café</option>
                      </select>
                    </div>
                    <div className="w-[36%] ml-5 content-center">
                      <button
                        onClick={() => setIsOpen(!isOpen)}
                        type="button"
                        className="px-5 py-2 text-base text-center text-blue-700 bg-white border border-blue-700 rounded-lg hover:bg-blue-700 hover:text-white"
                      >
                        Add Address
                      </button>
                    </div>
                    {isOpen && (
                      <div className="w-[5%] ml-5 content-center">
                        <svg
                          onClick={() => setIsOpen(!isOpen)}
                          width="21"
                          height="12"
                          viewBox="0 0 21 12"
                          fill="none"
                          xmlns="http://www.w3.org/2000/svg"
                          preserveAspectRatio="none"
                          className={`transition-transform duration-300 cursor-pointer ${
                            !isOpen ? "rotate-180" : ""
                          }`}
                        >
                          <path
                            d="M0.28125 10.875C0.046875 10.6406 0.046875 10.3125 0.28125 10.0781L10.0781 0.234375C10.3125 0.046875 10.6406 0.046875 10.875 0.234375L20.6719 10.0781C20.9062 10.3125 20.9062 10.6406 20.6719 10.875L19.7812 11.8125C19.5469 12 19.1719 12 18.9844 11.8125L10.5 3.32812L1.96875 11.8125C1.78125 12 1.40625 12 1.17188 11.8125L0.28125 10.875Z"
                            fill="#333333"
                          ></path>
                        </svg>
                      </div>
                    )}
                  </div>
                </div>
                {isOpen && (
                  <div className="w-full px-10 py-8 rounded-bl-[5px] rounded-br-[5px] bg-white border-t-0 border-r border-b border-l border-[#b6c0cc]">
                    <div className="flex flex-row mx-auto mb-5 ">
                      <div className="w-[45%]">
                        <label
                          htmlFor="addressLine1"
                          className="block mb-2 text-base text-left text-[#111928] w-full"
                        >
                          Address line 1
                          <span className="text-[#ff3030]">*</span>
                        </label>
                        <input
                          type="text"
                          name="addressLine1"
                          id="addressLine1"
                          className="border border-gray-300 text-gray-900 text-sm rounded-lg focus:ring-primary-600 focus:border-primary-600 block w-full p-2.5"
                          placeholder=""
                          defaultValue={location.addressLine1}
                          required
                        />
                      </div>

                      <div className="w-[45%] ml-10">
                        <label
                          htmlFor="addressLine2"
                          className="block mb-2 text-base text-left text-[#111928]"
                        >
                          Address line 2
                        </label>
                        <input
                          type="text"
                          name="addressLine2"
                          id="addressLine2"
                          className="border border-gray-300 text-gray-900 text-sm rounded-lg focus:ring-primary-600 focus:border-primary-600 block w-full p-2.5"
                          placeholder=""
                          defaultValue={location.addressLine2}
                        />
                      </div>
                    </div>
                    <div className="flex flex-row mx-auto mb-5 ">
                      <div className="w-[45%]">
                        <label
                          htmlFor="city"
                          className="block mb-2 text-base text-left text-[#111928] w-full"
                        >
                          City<span className="text-[#ff3030]">*</span>
                        </label>
                        <input
                          type="text"
                          name="city"
                          id="city"
                          className="border border-gray-300 text-gray-900 text-sm rounded-lg focus:ring-primary-600 focus:border-primary-600 block w-full p-2.5"
                          placeholder=""
                          defaultValue={location.city}
                          required
                        />
                      </div>

                      <div className="w-[45%] ml-10">
                        <div className="flex flex-row mx-auto ">
                          <div className="w-[45%]">
                            <label
                              htmlFor="state"
                              className="block mb-2 text-base text-left text-[#111928] w-full"
                            >
                              State<span className="text-[#ff3030]">*</span>
                            </label>
                            <select
                              id="state"
                              className="bg-white border border-gray-300 text-gray-900 pr-[10px] text-sm rounded-lg focus:ring-blue-500 focus:border-blue-500 block w-full p-2.5"
                              defaultValue={location.state}
                            >
                              <option value="" disabled>
                                Select State
                              </option>
                              <option value="IL">Illinois</option>
                              <option value="NY">New York</option>
                              {/* Add more options as necessary */}
                            </select>
                          </div>

                          <div className="w-[45%] ml-10">
                            <label
                              htmlFor="zipcode"
                              className="block mb-2 text-base text-left text-[#111928]"
                            >
                              Zipcode
                            </label>
                            <input
                              type="text"
                              name="zipcode"
                              id="zipcode"
                              className="border border-gray-300 text-gray-900 text-sm rounded-lg focus:ring-primary-600 focus:border-primary-600 block w-full p-2.5"
                              placeholder=""
                              defaultValue={location.zipcode}
                              required
                            />
                          </div>
                        </div>
                      </div>
                    </div>
                    <div className="flex flex-row mx-auto ">
                      <div className="w-[45%]">
                        <label
                          htmlFor="timezone"
                          className="block mb-2 text-base text-left text-[#111928] w-full"
                        >
                          Timezone<span className="text-[#ff3030]">*</span>
                        </label>
                        <select
                          id="timezone"
                          className="bg-white border border-gray-300 text-gray-900 pr-[10px] text-sm rounded-lg focus:ring-blue-500 focus:border-blue-500 block w-full p-2.5"
                          defaultValue={location.timezone}
                        >
                          <option value="" disabled>
                            Select Timezone
                          </option>
                          <option value="UTC-06:00">UTC-06:00</option>
                          <option value="UTC-05:00">UTC-05:00</option>
                          {/* Add more options as necessary */}
                        </select>
                      </div>
                    </div>
                  </div>
                )}
              </div>
            );
          })}
        </div>
      </div>    
          
      <div className="h-[120px]  absolute px-10 bottom-0 left-0 items-center flex w-full ">
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

export default LocationMainContent;
