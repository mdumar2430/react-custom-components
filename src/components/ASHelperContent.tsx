const ASHelperContent = () => {
  return (
    <div className=" w-[30%] float-left bg-gradient-to-b from-[#2662E4] to-[#497FF4]">
      <div className="p-10 ">
        <p className="text-lg font-medium text-left text-white">
          Set Up Your Accounting System
        </p>
        <div className="flex flex-col justify-center items-start w-full relative gap-5 p-5 rounded-[15px] bg-white mt-[30px]">
          <div className="w-full h-[113px]">
            <img
              src="./img/help-location-01.jpg"
              className="w-[280px] h-[113px] absolute left-[19.5px] top-[19.5px] rounded-[15px] object-none"
            />
          </div>
          <div className="flex flex-col justify-start items-start self-stretch flex-grow-0 flex-shrink-0 relative gap-[15px]">
            <p className="text-base font-medium text-left text-[#333]">
              Steps to Connect Your Accounting System
            </p>
            <p className="self-stretch w-[280px] text-sm text-left text-[#333]">
              <span className="self-stretch w-[280px] text-sm font-medium text-left text-[#333]">
                1. Select Your Accounting Software:
              </span>
              <span className="self-stretch w-[280px] text-sm text-left text-[#333]">
                Choose from our list of supported accounting systems.
              </span>
            </p>
            <p className="self-stretch w-[280px] text-sm text-left text-[#333]">
              <span className="self-stretch w-[280px] text-sm font-medium text-left text-[#333]">
                2. Enter Credentials:{" "}
              </span>
              <span className="self-stretch w-[280px] text-sm text-left text-[#333]">
                Provide your accounting system login details for a secure
                connection.
              </span>
            </p>
            <p className="self-stretch w-[280px] text-sm text-left text-[#333]">
              <span className="self-stretch w-[280px] text-sm font-medium text-left text-[#333]">
                3. Sync Data:{" "}
              </span>
              <span className="self-stretch w-[280px] text-sm text-left text-[#333]">
                Follow the instructions to link your accounting data with Profit
                AI.
              </span>
            </p>
          </div>
        </div>
      </div>
      <div>
        <div className="flex justify-center mb-10">
          <svg
            width="10"
            height="10"
            viewBox="0 0 10 10"
            className="mx-1.5"
            fill="none"
            xmlns="http://www.w3.org/2000/svg"
            preserveAspectRatio="xMidYMid meet"
          >
            <circle cx="5" cy="5" r="5" fill="#fff"></circle>
          </svg>
          <svg
            width="10"
            height="10"
            viewBox="0 0 10 10"
            className="mx-1.5"
            fill="none"
            xmlns="http://www.w3.org/2000/svg"
            preserveAspectRatio="xMidYMid meet"
          >
            <circle cx="5" cy="5" r="5" fill="#474747"></circle>
          </svg>
          <svg
            width="10"
            height="10"
            viewBox="0 0 10 10"
            className="mx-1.5"
            fill="none"
            xmlns="http://www.w3.org/2000/svg"
            preserveAspectRatio="xMidYMid meet"
          >
            <circle cx="5" cy="5" r="5" fill="#474747"></circle>
          </svg>
        </div>
      </div>

      <div className="w-full flex items-center h-[119px] bg-black/10 rounded-bl-2xl border-t-[1px] border-[#ffffff]/20 relative">
        <svg
          width="46"
          height="41"
          fill="none"
          className="absolute top-10 left-8"
          preserveAspectRatio="none"
          viewBox="0 0 46 41"
        >
          <path
            stroke="#fff"
            stroke-linecap="round"
            stroke-linejoin="round"
            stroke-width="1.71"
            d="M1.488 5.574l21.76 8.955 21.759-8.955M23.247 32.44v7.463M9.4 30.948v5.97m27.694-5.97v5.97M1.488 21.994V4.08c0-1.649 1.77-2.985 3.956-2.985H41.05c2.185 0 3.956 1.336 3.956 2.985v17.912c0 1.648-1.771 2.985-3.956 2.985H5.444c-2.185 0-3.956-1.337-3.956-2.985z"
          />
        </svg>
        <p className="text-sm text-left text-[#fff] pl-24 pr-5">
          <span className="font-medium">Need help?</span>
          Reach out to{" "}
          <a
            href="mailto:support@profitlabsinc.com"
            className="underline hover:no-underline"
          >
            support@profitlabsinc.com
          </a>{" "}
          for any questions or assistance
        </p>
      </div>
    </div>
  );
};

export default ASHelperContent;
