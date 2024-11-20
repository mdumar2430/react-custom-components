import userPng from "../img/user.png";
import logoSvg from "../img/logo.svg";
import contentBg from "../img/content-bg.svg";
import OnBoardingPage from "./OnboardingPage";
import { useEffect, useState } from "react";

const Layout = () => {
  const [showOnboard, setShowOnboard] = useState<boolean>(false);

  useEffect(() => {
    setShowOnboard(localStorage.getItem("showOnboarding") === "true");
  }, []);

  function handleSkip(): void {
    localStorage.setItem("showOnboarding", "false");
    setShowOnboard(false);
  }

  return (
    <>
      <div>
        <meta charSet="utf-8" />
        <title />
        {/* Dashboard */}
        <div className="flex flex-row h-full">
          {/* Main Nav */}
          <div className="relative flex justify-start flex-col h-screen w-full max-w-[100px] bg-white bg-clip-border text-gray-700 shadow-xl shadow-blue-gray-900/5">
            <div className="p-4 bg-blue-500 flex justify-center items-center h-[80px]">
              <img src={logoSvg} />
            </div>
            <nav className="flex flex-col font-sans text-base font-normal text-blue-gray-700 p-3 mt-[10px]">
              <div className="w-[70px] h-[60px] rounded-[10px] bg-blue-100 flex justify-center flex-col items-center mb-[10px] cursor-pointer hover:bg-blue-100">
                <svg
                  width={28}
                  height={28}
                  viewBox="0 0 28 28"
                  fill="none"
                  xmlns="http://www.w3.org/2000/svg"
                  className="relative text-blue-500 w-7 h-7 stroke-blue-500"
                  preserveAspectRatio="xMidYMid meet"
                >
                  <path
                    d="M24.5 11.55L22.75 10.3833L15.75 5.71668L14.6417 4.98168C14.4512 4.85623 14.2281 4.78937 14 4.78937C13.7719 4.78937 13.5488 4.85623 13.3583 4.98168L12.25 5.71668L5.25 10.3833L3.5 11.55"
                    strokeWidth="1.5"
                    strokeLinecap="round"
                    strokeLinejoin="round"
                  />
                  <path
                    d="M22.75 10.3833V19.7167C22.75 20.6449 22.3813 21.5352 21.7249 22.1915C21.0685 22.8479 20.1783 23.2167 19.25 23.2167H16.3333V17.3833C16.3333 17.0739 16.2104 16.7772 15.9916 16.5584C15.7728 16.3396 15.4761 16.2167 15.1667 16.2167H12.8333C12.5239 16.2167 12.2272 16.3396 12.0084 16.5584C11.7896 16.7772 11.6667 17.0739 11.6667 17.3833V23.2167H8.75C7.82174 23.2167 6.9315 22.8479 6.27513 22.1915C5.61875 21.5352 5.25 20.6449 5.25 19.7167V10.3833"
                    strokeWidth="1.5"
                    strokeLinecap="round"
                    strokeLinejoin="round"
                  />
                </svg>
                <p className="text-xs font-medium text-center text-blue-500 ">
                  Home
                </p>
              </div>
              <div className="w-[70px] h-[60px] rounded-[10px] bg-white flex justify-center flex-col items-center mb-[10px] cursor-pointer hover:bg-blue-100">
                <svg
                  width={28}
                  height={28}
                  viewBox="0 0 28 28"
                  fill="none"
                  xmlns="http://www.w3.org/2000/svg"
                  className="w-7 h-7 stroke-gray-400"
                  preserveAspectRatio="xMidYMid meet"
                >
                  <path
                    d="M21.875 10.6283V17.3483C21.875 18.1621 21.5518 18.9425 20.9763 19.518C20.4009 20.0934 19.6205 20.4167 18.8067 20.4167H12.6817C12.2793 20.4167 11.8809 20.3372 11.5093 20.1829C11.1376 20.0285 10.8002 19.8023 10.5162 19.5173C10.2322 19.2322 10.0073 18.8938 9.85434 18.5216C9.70142 18.1494 9.62349 17.7507 9.62502 17.3483V7.13999C9.62502 6.32931 9.94706 5.55184 10.5203 4.9786C11.0935 4.40536 11.871 4.08332 12.6817 4.08332H15.33C15.462 4.08274 15.5928 4.10821 15.7149 4.15826C15.837 4.20831 15.9481 4.28196 16.0417 4.37499L21.5717 9.90499C21.6677 9.99941 21.744 10.112 21.7961 10.2362C21.8481 10.3604 21.875 10.4937 21.875 10.6283Z"
                    strokeWidth="1.5"
                    strokeMiterlimit={10}
                    strokeLinecap="round"
                  />
                  <path
                    d="M15.75 4.57332V9.23999C15.7484 9.37426 15.7735 9.5075 15.8239 9.63199C15.8742 9.75649 15.9487 9.86976 16.0431 9.96525C16.1375 10.0607 16.2499 10.1366 16.3738 10.1883C16.4978 10.24 16.6307 10.2667 16.765 10.2667H21.4316C21.4708 10.2637 21.5083 10.2498 21.5399 10.2265C21.5716 10.2033 21.5961 10.1717 21.6106 10.1353C21.6252 10.0988 21.6293 10.059 21.6224 10.0204C21.6155 9.98174 21.5979 9.9458 21.5716 9.91665L16.1 4.43332C16.0731 4.40127 16.0369 4.37851 15.9963 4.36831C15.9558 4.3581 15.9131 4.36096 15.8742 4.37649C15.8354 4.39202 15.8025 4.41941 15.7802 4.45476C15.7579 4.4901 15.7473 4.5316 15.75 4.57332Z"
                    strokeWidth="1.5"
                    strokeLinecap="round"
                    strokeLinejoin="round"
                  />
                  <path
                    d="M18.305 17.3483H13.195"
                    strokeWidth="1.5"
                    strokeLinecap="round"
                    strokeLinejoin="round"
                  />
                  <path
                    d="M16.2633 14.2917H13.195"
                    strokeWidth="1.5"
                    strokeLinecap="round"
                    strokeLinejoin="round"
                  />
                  <path
                    d="M18.375 20.405V20.8483C18.375 21.6621 18.0517 22.4426 17.4763 23.018C16.9009 23.5934 16.1204 23.9167 15.3067 23.9167H9.18167C8.36992 23.9136 7.59247 23.589 7.01957 23.0139C6.44666 22.4388 6.12499 21.6601 6.125 20.8483V10.64C6.12807 9.83028 6.4511 9.05459 7.02367 8.48202C7.59624 7.90944 8.37193 7.58642 9.18167 7.58334H9.625"
                    strokeWidth="1.5"
                    strokeMiterlimit={10}
                    strokeLinecap="round"
                  />
                </svg>
                <p className=" text-xs font-medium text-center text-[#333]">
                  Reports
                </p>
              </div>
              <div className="w-[70px] h-[60px] rounded-[10px] bg-white flex justify-center flex-col items-center mb-[10px] cursor-pointer hover:bg-blue-100">
                <svg
                  width={24}
                  height={24}
                  viewBox="0 0 24 24"
                  fill="none"
                  xmlns="http://www.w3.org/2000/svg"
                  className="relative w-6 h-6 fill-slate-400"
                  preserveAspectRatio="xMidYMid meet"
                >
                  <g clipPath="url(#clip0_367_1605)">
                    <path d="M14 2C15.83 1.99913 17.605 2.62567 19.0289 3.77513C20.4528 4.92458 21.4396 6.52748 21.8247 8.31647C22.2098 10.1055 21.9699 11.9724 21.1451 13.6059C20.3202 15.2395 18.9603 16.5408 17.292 17.293C16.7588 18.4719 15.9475 19.5039 14.9279 20.3004C13.9082 21.097 12.7106 21.6343 11.4377 21.8663C10.1647 22.0984 8.85452 22.0182 7.61939 21.6327C6.38426 21.2472 5.26106 20.5678 4.34614 19.6529C3.43121 18.738 2.75186 17.6148 2.36634 16.3796C1.98082 15.1445 1.90065 13.8343 2.13268 12.5614C2.36472 11.2884 2.90206 10.0908 3.6986 9.07114C4.49514 8.05148 5.52711 7.24024 6.70603 6.707C7.34017 5.30389 8.36561 4.1135 9.65937 3.27861C10.9531 2.44371 12.4603 1.99976 14 2V2ZM10 8C9.21209 8 8.43188 8.1552 7.70392 8.45672C6.97597 8.75825 6.31454 9.20021 5.75738 9.75736C5.20023 10.3145 4.75828 10.9759 4.45675 11.7039C4.15522 12.4319 4.00003 13.2121 4.00003 14C4.00003 14.7879 4.15522 15.5681 4.45675 16.2961C4.75828 17.0241 5.20023 17.6855 5.75738 18.2426C6.31454 18.7998 6.97597 19.2417 7.70392 19.5433C8.43188 19.8448 9.21209 20 10 20C11.5913 20 13.1174 19.3679 14.2427 18.2426C15.3679 17.1174 16 15.5913 16 14C16 12.4087 15.3679 10.8826 14.2427 9.75736C13.1174 8.63214 11.5913 8 10 8ZM11 9V10H13V12H9.00003C8.87508 11.9998 8.75458 12.0463 8.66224 12.1305C8.56991 12.2147 8.51244 12.3304 8.50115 12.4548C8.48986 12.5793 8.52557 12.7034 8.60125 12.8028C8.67692 12.9023 8.78708 12.9697 8.91003 12.992L9.00003 13H11C11.6631 13 12.299 13.2634 12.7678 13.7322C13.2366 14.2011 13.5 14.837 13.5 15.5C13.5 16.163 13.2366 16.7989 12.7678 17.2678C12.299 17.7366 11.6631 18 11 18V19H9.00003V18H7.00003V16H11C11.125 16.0002 11.2455 15.9537 11.3378 15.8695C11.4301 15.7853 11.4876 15.6696 11.4989 15.5452C11.5102 15.4207 11.4745 15.2966 11.3988 15.1972C11.3231 15.0977 11.213 15.0303 11.09 15.008L11 15H9.00003C8.33698 15 7.7011 14.7366 7.23226 14.2678C6.76342 13.7989 6.50003 13.163 6.50003 12.5C6.50003 11.837 6.76342 11.2011 7.23226 10.7322C7.7011 10.2634 8.33698 10 9.00003 10V9H11ZM14 4C13.1527 3.99901 12.3148 4.17794 11.5418 4.52496C10.7689 4.87198 10.0784 5.37918 9.51603 6.013C10.6463 5.94439 11.7782 6.1165 12.837 6.51795C13.8958 6.9194 14.8573 7.54105 15.658 8.34178C16.4586 9.14252 17.0801 10.1041 17.4815 11.1629C17.8828 12.2218 18.0548 13.3537 17.986 14.484C18.8952 13.6756 19.5372 12.6099 19.8268 11.4283C20.1165 10.2467 20.04 9.00491 19.6077 7.86772C19.1753 6.73053 18.4075 5.75164 17.406 5.06088C16.4045 4.37013 15.2166 4.00014 14 4V4Z" />
                  </g>
                  <defs>
                    <clipPath id="clip0_367_1605">
                      <rect width={24} height={24} fill="white" />
                    </clipPath>
                  </defs>
                </svg>
                <p className=" text-xs font-medium text-center text-[#333]">
                  Sales
                </p>
              </div>
              <div className="w-[70px] h-[60px] rounded-[10px] bg-white flex justify-center flex-col items-center mb-[10px] cursor-pointer hover:bg-blue-100">
                <svg
                  width={28}
                  height={28}
                  viewBox="0 0 28 28"
                  fill="none"
                  xmlns="http://www.w3.org/2000/svg"
                  className="relative w-7 h-7 stroke-gray-400"
                  preserveAspectRatio="xMidYMid meet"
                >
                  <path
                    d="M16.5113 18.2413L19.1613 15.5913H8.84131"
                    strokeWidth="1.5"
                    strokeLinecap="round"
                    strokeLinejoin="round"
                  />
                  <path
                    d="M11.4913 9.75996L8.84131 12.41H19.1613"
                    strokeWidth="1.5"
                    strokeLinecap="round"
                    strokeLinejoin="round"
                  />
                  <path
                    d="M19 5H9C6.79086 5 5 6.79086 5 9V19C5 21.2091 6.79086 23 9 23H19C21.2091 23 23 21.2091 23 19V9C23 6.79086 21.2091 5 19 5Z"
                    strokeWidth="1.5"
                    strokeLinecap="round"
                    strokeLinejoin="round"
                  />
                </svg>
                <p className=" text-xs font-medium text-center text-[#333]">
                  Sync Log
                </p>
              </div>
              <div className="w-[70px] h-[60px] rounded-[10px] bg-white flex justify-center flex-col items-center mb-[10px] cursor-pointer hover:bg-blue-100">
                <svg
                  width={28}
                  height={28}
                  viewBox="0 0 28 28"
                  fill="none"
                  xmlns="http://www.w3.org/2000/svg"
                  className="relative w-7 h-7 stroke-gray-400"
                  preserveAspectRatio="xMidYMid meet"
                >
                  <path
                    d="M11.1909 11.1885C12.8437 11.1885 14.1836 9.84865 14.1836 8.19583C14.1836 6.543 12.8437 5.20312 11.1909 5.20312C9.53806 5.20312 8.19818 6.543 8.19818 8.19583C8.19818 9.84865 9.53806 11.1885 11.1909 11.1885Z"
                    strokeWidth="1.5"
                    strokeLinecap="round"
                    strokeLinejoin="round"
                  />
                  <path
                    d="M16.7394 14.1921H5.63149C4.56378 14.1921 3.69824 15.0576 3.69824 16.1253V19.7515C3.69824 20.8192 4.56378 21.6847 5.63149 21.6847H16.7394C17.8071 21.6847 18.6727 20.8192 18.6727 19.7515V16.1253C18.6727 15.0576 17.8071 14.1921 16.7394 14.1921Z"
                    strokeWidth="1.5"
                    strokeLinecap="round"
                    strokeLinejoin="round"
                  />
                  <path
                    d="M16.1824 5.57431C16.8776 5.57431 17.5443 5.85049 18.0359 6.34208C18.5275 6.83368 18.8037 7.50043 18.8037 8.19566C18.8037 8.89088 18.5275 9.55763 18.0359 10.0492C17.5443 10.5408 16.8776 10.817 16.1824 10.817"
                    strokeWidth="1.5"
                    strokeLinecap="round"
                    strokeLinejoin="round"
                  />
                  <path
                    d="M19.8961 12.6195C20.3731 12.6224 20.8299 12.8132 21.1672 13.1506C21.5046 13.4879 21.6954 13.9446 21.6982 14.4217V18.8999"
                    strokeWidth="1.5"
                    strokeLinecap="round"
                    strokeLinejoin="round"
                  />
                </svg>
                <p className=" text-xs font-medium text-center text-[#333]">
                  Vendors
                </p>
              </div>
              <div className="w-[70px] h-[60px] rounded-[10px] bg-white flex justify-center flex-col items-center mb-[10px] cursor-pointer hover:bg-blue-100">
                <svg
                  width={28}
                  height={28}
                  viewBox="0 0 28 28"
                  fill="none"
                  xmlns="http://www.w3.org/2000/svg"
                  className="relative w-7 h-7 stroke-gray-400"
                  preserveAspectRatio="xMidYMid meet"
                >
                  <path
                    d="M17.247 10.101H7.69572C6.29644 10.101 5.16211 11.2353 5.16211 12.6346V18.9384C5.16211 20.3377 6.29644 21.472 7.69572 21.472H17.247C18.6463 21.472 19.7806 20.3377 19.7806 18.9384V12.6346C19.7806 11.2353 18.6463 10.101 17.247 10.101Z"
                    strokeWidth="1.5"
                    strokeLinecap="round"
                    strokeLinejoin="round"
                  />
                  <path
                    d="M5.16211 14.1637H19.7806"
                    strokeWidth="1.5"
                    strokeLinejoin="round"
                  />
                  <path
                    d="M9.22304 9.73991V8.57365C9.22172 8.24141 9.28602 7.91217 9.41224 7.60484C9.53847 7.2975 9.72414 7.01812 9.95861 6.78272C10.1931 6.54732 10.4717 6.36054 10.7785 6.23309C11.0854 6.10564 11.4144 6.04004 11.7466 6.04004H21.318C21.6503 6.04004 21.9792 6.10564 22.2861 6.23309C22.5929 6.36054 22.8715 6.54732 23.106 6.78272C23.3405 7.01812 23.5261 7.2975 23.6524 7.60484C23.7786 7.91217 23.8429 8.24141 23.8416 8.57365V14.8876C23.8429 15.2198 23.7786 15.549 23.6524 15.8564C23.5261 16.1637 23.3405 16.4431 23.106 16.6785C22.8715 16.9139 22.5929 17.1007 22.2861 17.2281C21.9792 17.3556 21.6503 17.4212 21.318 17.4212H19.7797"
                    strokeWidth="1.5"
                    strokeLinecap="round"
                    strokeLinejoin="round"
                  />
                </svg>
                <p className=" text-xs font-medium text-center text-[#333]">
                  Products
                </p>
              </div>
            </nav>
            <div className="absolute bottom-0 w-full">
              <hr className="w-full border-gray-200" />
              <div className="w-[70px] h-[60px] rounded-[10px] ml-[13px] mt-[10px] bg-white flex justify-center flex-col items-center mb-[10px] cursor-pointer hover:bg-blue-100">
                <svg
                  width={28}
                  height={28}
                  viewBox="0 0 28 28"
                  fill="none"
                  xmlns="http://www.w3.org/2000/svg"
                  className="relative w-7 h-7 fill-slate-400"
                  preserveAspectRatio="xMidYMid meet"
                >
                  <g clipPath="url(#clip0_367_1610)">
                    <path d="M3.89668 19.8333C3.40349 18.9805 3.02012 18.0687 2.75568 17.1196C3.3312 16.8269 3.81454 16.3807 4.15221 15.8304C4.48988 15.28 4.66874 14.647 4.66898 14.0013C4.66922 13.3556 4.49084 12.7224 4.15358 12.1718C3.81632 11.6212 3.33332 11.1746 2.75801 10.8815C3.28538 8.97454 4.28953 7.23325 5.67584 5.82164C6.21729 6.17365 6.84557 6.369 7.49115 6.38605C8.13674 6.40311 8.77445 6.24121 9.33373 5.91828C9.893 5.59535 10.352 5.12397 10.66 4.55632C10.968 3.98867 11.1129 3.34688 11.0787 2.70198C12.9945 2.20687 15.0048 2.20767 16.9202 2.70431C16.8863 3.3492 17.0315 3.9909 17.3397 4.55839C17.6479 5.12587 18.1071 5.59703 18.6665 5.91971C19.2259 6.2424 19.8636 6.40403 20.5092 6.38672C21.1547 6.36941 21.7829 6.17384 22.3242 5.82164C22.9997 6.50998 23.5993 7.29281 24.1033 8.16664C24.6085 9.04048 24.9865 9.95164 25.2443 10.8803C24.6688 11.173 24.1855 11.6192 23.8478 12.1696C23.5101 12.72 23.3313 13.353 23.331 13.9987C23.3308 14.6444 23.5092 15.2775 23.8464 15.8281C24.1837 16.3787 24.6667 16.8253 25.242 17.1185C24.7146 19.0254 23.7105 20.7667 22.3242 22.1783C21.7827 21.8263 21.1545 21.631 20.5089 21.6139C19.8633 21.5968 19.2256 21.7587 18.6663 22.0817C18.107 22.4046 17.648 22.876 17.34 23.4436C17.0321 24.0113 16.8872 24.6531 16.9213 25.298C15.0055 25.7931 12.9952 25.7923 11.0798 25.2956C11.1137 24.6507 10.9685 24.0091 10.6603 23.4416C10.3521 22.8741 9.89293 22.4029 9.33354 22.0802C8.77416 21.7576 8.13641 21.5959 7.49086 21.6132C6.84531 21.6305 6.21713 21.8261 5.67584 22.1783C4.98633 21.4747 4.38854 20.6868 3.89668 19.8333V19.8333ZM10.5 20.062C11.7432 20.779 12.678 21.9298 13.125 23.2936C13.7072 23.3485 14.2917 23.3496 14.8738 23.2948C15.3211 21.9308 16.2563 20.78 17.5 20.0631C18.7428 19.3441 20.2073 19.1094 21.6125 19.404C21.9508 18.928 22.2425 18.4205 22.4852 17.8896C21.5278 16.8203 20.999 15.4352 21 14C21 12.53 21.5483 11.1568 22.4852 10.1103C22.2408 9.57965 21.9479 9.07271 21.6102 8.59598C20.2058 8.89034 18.7423 8.65603 17.5 7.93798C16.2568 7.22091 15.322 6.07012 14.875 4.70631C14.2928 4.65148 13.7083 4.65031 13.1262 4.70514C12.6789 6.06915 11.7437 7.21996 10.5 7.93681C9.25726 8.65584 7.79273 8.89058 6.38751 8.59598C6.04984 9.07231 5.75766 9.57932 5.51484 10.1103C6.47218 11.1796 7.00104 12.5647 7.00001 14C7.00001 15.47 6.45168 16.8431 5.51484 17.8896C5.75923 18.4203 6.05214 18.9272 6.38984 19.404C7.79418 19.1096 9.25775 19.3439 10.5 20.062ZM14 17.5C13.0718 17.5 12.1815 17.1312 11.5251 16.4748C10.8688 15.8185 10.5 14.9282 10.5 14C10.5 13.0717 10.8688 12.1815 11.5251 11.5251C12.1815 10.8687 13.0718 10.5 14 10.5C14.9283 10.5 15.8185 10.8687 16.4749 11.5251C17.1313 12.1815 17.5 13.0717 17.5 14C17.5 14.9282 17.1313 15.8185 16.4749 16.4748C15.8185 17.1312 14.9283 17.5 14 17.5ZM14 15.1666C14.3094 15.1666 14.6062 15.0437 14.825 14.8249C15.0438 14.6061 15.1667 14.3094 15.1667 14C15.1667 13.6906 15.0438 13.3938 14.825 13.175C14.6062 12.9562 14.3094 12.8333 14 12.8333C13.6906 12.8333 13.3938 12.9562 13.1751 13.175C12.9563 13.3938 12.8333 13.6906 12.8333 14C12.8333 14.3094 12.9563 14.6061 13.1751 14.8249C13.3938 15.0437 13.6906 15.1666 14 15.1666V15.1666Z" />
                  </g>
                  <defs>
                    <clipPath id="clip0_367_1610">
                      <rect width={28} height={28} />
                    </clipPath>
                  </defs>
                </svg>
                <p className=" text-xs font-medium text-center text-[#333]">
                  Settings
                </p>
              </div>
            </div>
          </div>
          <div
            className="flex-col w-screen h-screen text-gray-700 bg-gray-200 bg-right-top bg-no-repeat"
            style={{ backgroundImage: `url(${contentBg})` }}
          >
            {/* Main Header */}
            <div className="w-full h-[80px] border-b-[1px] border-slate-300 pr-[40px] flex justify-between items-center ">
              <form className="flex w-[200px] ml-[40px]">
                <select
                  id="countries"
                  className="bg-gray-50 border border-gray-300  border-white-900  text-gray-900 pr-[10px] text-sm rounded-lg focus:ring-blue-500 focus:border-blue-500 block w-full p-2.5"
                >
                  <option selected>San Francisco</option>
                  <option value="US">United States</option>
                  <option value="CA">Canada</option>
                  <option value="FR">France</option>
                  <option value="DE">Germany</option>
                </select>
              </form>
              <div className="flex flex-row-reverse">
                {/* Help Center Link */}
                <div className="w-[40px] h-[40px] overflow-hidden rounded-full border border-gray-300 bg-white ml-[20px] flex items-center justify-center cursor-pointer shadow">
                  <svg
                    width={20}
                    height={21}
                    viewBox="0 0 20 21"
                    fill="none"
                    xmlns="http://www.w3.org/2000/svg"
                    preserveAspectRatio="none"
                  >
                    <path
                      d="M19.6875 10.5C19.6875 15.8516 15.3125 20.1875 10 20.1875C4.64844 20.1875 0.3125 15.8516 0.3125 10.5C0.3125 5.1875 4.64844 0.8125 10 0.8125C15.3125 0.8125 19.6875 5.1875 19.6875 10.5ZM10.2344 4.01562C8.125 4.01562 6.75781 4.91406 5.70312 6.51562C5.54688 6.75 5.58594 7.02344 5.78125 7.17969L7.14844 8.19531C7.34375 8.35156 7.65625 8.3125 7.8125 8.11719C8.51562 7.21875 8.98438 6.71094 10.0391 6.71094C10.8203 6.71094 11.8359 7.21875 11.8359 8C11.8359 8.58594 11.3281 8.89844 10.5469 9.32812C9.64844 9.83594 8.4375 10.4609 8.4375 12.0625V12.2188C8.4375 12.4922 8.63281 12.6875 8.90625 12.6875H11.0938C11.3281 12.6875 11.5625 12.4922 11.5625 12.2188V12.1797C11.5625 11.0859 14.8047 11.0469 14.8047 8C14.8047 5.73438 12.4609 4.01562 10.2344 4.01562ZM10 13.7031C8.98438 13.7031 8.20312 14.5234 8.20312 15.5C8.20312 16.5156 8.98438 17.2969 10 17.2969C10.9766 17.2969 11.7969 16.5156 11.7969 15.5C11.7969 14.5234 10.9766 13.7031 10 13.7031Z"
                      fill="#666666"
                    />
                  </svg>
                </div>
                <div className="inline-block h-[20px] mt-[10px] w-[1px] self-stretch bg-gray-400 ml-[20px]" />
                {/* User Profile Link */}
                <div className="relative dropdown md:static">
                  <div className="w-[40px] h-[40px] overflow-hidden rounded-full border border-gray-400 ml-[20px] cursor-pointer shadow">
                    <img className="w-full h-full " src={userPng} />
                  </div>
                </div>
                {/* Notification Center Link */}
                <div className="w-[40px] h-[40px] overflow-hidden rounded-full border border-gray-300 bg-white ml-[20px] flex items-center justify-center cursor-pointer shadow">
                  {/* Notification Off State */}
                  {/* <svg width="20" height="20" viewBox="0 0 20 20" fill="none" xmlns="http://www.w3.org/2000/svg" class="w-5 h-5 relative" preserveAspectRatio="none"><path d="M9.20466 19.5904C10.6453 19.5904 11.8504 18.5634 12.1271 17.2041H6.28223C6.5591 18.5634 7.7642 19.5904 9.20466 19.5904V19.5904Z" fill="#666666"></path><path d="M14.7824 10.0445C14.7792 10.0445 14.776 10.0452 14.7728 10.0452C11.7032 10.0452 9.20479 7.54751 9.20479 4.47725C9.20479 3.63321 9.39894 2.83535 9.73699 2.11789C9.56192 2.10128 9.38452 2.09094 9.20479 2.09094C6.12972 2.09094 3.6368 4.58371 3.6368 7.65893V9.87658C3.6368 11.4507 2.94715 12.9366 1.73725 13.9595C1.33395 14.304 1.15495 14.8528 1.29972 15.3882C1.46839 16.011 2.08404 16.4088 2.72999 16.4088H15.6757C16.3534 16.4088 16.9922 15.9696 17.1297 15.3055C17.2363 14.7916 17.0533 14.2785 16.6548 13.9437C15.4983 12.9741 14.8293 11.5493 14.7824 10.0445V10.0445Z" fill="#666666"></path><path d="M18.7499 4.47722C18.7499 6.67374 16.9694 8.45429 14.7727 8.45429C12.5762 8.45429 10.7957 6.67374 10.7957 4.47722C10.7957 2.2807 12.5762 0.5 14.7727 0.5C16.9694 0.5 18.7499 2.2807 18.7499 4.47722Z" fill="#CCCCCC"></path></svg> */}
                  {/* Notification On State */}
                  <svg
                    width={20}
                    height={20}
                    viewBox="0 0 20 20"
                    fill="none"
                    xmlns="http://www.w3.org/2000/svg"
                    className="relative w-5 h-5"
                    preserveAspectRatio="none"
                  >
                    <path
                      d="M9.20466 19.5904C10.6453 19.5904 11.8504 18.5634 12.1271 17.2041H6.28223C6.5591 18.5634 7.7642 19.5904 9.20466 19.5904V19.5904Z"
                      fill="#666666"
                    />
                    <path
                      d="M14.7824 10.0445C14.7792 10.0445 14.776 10.0452 14.7728 10.0452C11.7032 10.0452 9.20479 7.54751 9.20479 4.47725C9.20479 3.63321 9.39894 2.83535 9.73699 2.11789C9.56192 2.10128 9.38452 2.09094 9.20479 2.09094C6.12972 2.09094 3.6368 4.58371 3.6368 7.65893V9.87658C3.6368 11.4507 2.94715 12.9366 1.73725 13.9595C1.33395 14.304 1.15495 14.8528 1.29972 15.3882C1.46839 16.011 2.08404 16.4088 2.72999 16.4088H15.6757C16.3534 16.4088 16.9922 15.9696 17.1297 15.3055C17.2363 14.7916 17.0533 14.2785 16.6548 13.9437C15.4983 12.9741 14.8293 11.5493 14.7824 10.0445V10.0445Z"
                      fill="#666666"
                    />
                    <path
                      d="M18.7499 4.47722C18.7499 6.67374 16.9694 8.45429 14.7727 8.45429C12.5762 8.45429 10.7957 6.67374 10.7957 4.47722C10.7957 2.2807 12.5762 0.5 14.7727 0.5C16.9694 0.5 18.7499 2.2807 18.7499 4.47722Z"
                      fill="#F93C65"
                    />
                  </svg>
                </div>
                {/* Global Search */}
                <form className="ml-[20px] relative">
                  <div>
                    <svg
                      width={17}
                      height={17}
                      viewBox="0 0 17 17"
                      fill="none"
                      xmlns="http://www.w3.org/2000/svg"
                      className="w-[15.01px] h-[15.01px] absolute top-[12px] left-[14px]"
                      preserveAspectRatio="none"
                    >
                      <path
                        fillRule="evenodd"
                        clipRule="evenodd"
                        d="M9.69353 12.5351C12.4234 11.3749 13.6959 8.22145 12.5357 5.49161C11.3755 2.76178 8.22208 1.48929 5.49225 2.64945C2.76241 3.8096 1.48993 6.96306 2.65008 9.6929C3.81024 12.4227 6.9637 13.6952 9.69353 12.5351Z"
                        stroke="#333333"
                        strokeWidth="1.2"
                        strokeLinecap="round"
                        strokeLinejoin="round"
                      />
                      <path
                        d="M11.3901 11.3897L15.5555 15.5557"
                        stroke="#333333"
                        strokeWidth="1.2"
                        strokeLinecap="round"
                        strokeLinejoin="round"
                      />
                    </svg>
                    <input
                      type="search"
                      id="default-search"
                      className="block w-[300px] h-[40px] ps-10 text-sm text-gray-900 border border-gray-300 rounded-[20px] bg-gray-50"
                      placeholder="Search"
                      required
                    />
                  </div>
                </form>
                <div className="inline-block h-[20px] mt-[10px] w-[1px] self-stretch bg-gray-400 ml-[20px]" />
                {/* Global Search */}
                <a className="px-[20px] h-[40px] bg-gradient-to-r from-neutral-700 to-neutral-600 rounded-[20px] flex items-center cursor-pointer">
                  <svg
                    width={21}
                    height={20}
                    viewBox="0 0 21 20"
                    fill="none"
                    xmlns="http://www.w3.org/2000/svg"
                    preserveAspectRatio="xMidYMid meet"
                  >
                    <path
                      fillRule="evenodd"
                      clipRule="evenodd"
                      d="M5.62311 9.47793L7.49748 3.85482H8.6477L10.5221 9.47793L16.1452 11.3523V12.5025L10.5221 14.3769L8.6477 20H7.49748L5.62311 14.3769L0 12.5025V11.3523L5.62311 9.47793Z"
                      fill="url(#paint0_linear_222_1170)"
                    />
                    <path
                      fillRule="evenodd"
                      clipRule="evenodd"
                      d="M14.2421 2.89511L15.2071 0H16.3573L17.3224 2.89511L20.2175 3.86015V5.01037L17.3224 5.97541L16.3573 8.87052H15.2071L14.2421 5.97541L11.347 5.01037V3.86015L14.2421 2.89511Z"
                      fill="url(#paint1_linear_222_1170)"
                    />
                    <defs>
                      <linearGradient
                        id="paint0_linear_222_1170"
                        x1="19.8991"
                        y1="-1.98991"
                        x2="10.1087"
                        y2={20}
                        gradientUnits="userSpaceOnUse"
                      >
                        <stop stopColor="#00F260" />
                        <stop offset={1} stopColor="#0575E6" />
                      </linearGradient>
                      <linearGradient
                        id="paint1_linear_222_1170"
                        x1="19.8991"
                        y1="-1.98991"
                        x2="10.1087"
                        y2={20}
                        gradientUnits="userSpaceOnUse"
                      >
                        <stop stopColor="#00F260" />
                        <stop offset={1} stopColor="#0575E6" />
                      </linearGradient>
                    </defs>
                  </svg>
                  <p className="text-sm font-medium text-center text-white pl-[10px]">
                    Ask AI
                  </p>
                </a>
              </div>
            </div>
          </div>
          {/* Content */}
        </div>
        {/* Dashboard */}
        {/* Popup */}
        {showOnboard && <OnBoardingPage onSkip={handleSkip} />}
      </div>
    </>
  );
};

export default Layout;
