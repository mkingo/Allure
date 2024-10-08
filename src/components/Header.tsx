import React from "react";
import logo from "../../assets/icon.png";
const Header = () => {
  const handleClose = async () => {
    window.close();
  }
  return (
    <>
      <div className="justify-between items-stretch flex w-full gap-5">
        <span className="justify-between items-stretch flex gap-3">
          <img
            src={logo}
            className="aspect-square object-contain object-center w-[22px] overflow-hidden shrink-0 max-w-full rounded-[50%]"
          />
          <div className="text-center text-sm font-semibold leading-5 capitalize bg-gradient-to-tr from-red-600 via-purple-600 to-yellow-500  bg-clip-text text-transparent self-start">
            BeTimeful
          </div>
        </span>
        {/* <img
          loading="lazy"
          src="https://cdn.builder.io/api/v1/image/assets/TEMP/7e46858a271103a47db320bfd218e13f775a667909d43958c26502360f434304?"
          className="cursor-pointer aspect-square object-contain object-center w-[22px] overflow-hidden shrink-0 max-w-full"
        /> */}
         <button
          onClick={handleClose}
          // className="absolute top-0 right-0 mt-2 mr-2 p-2 bg-white rounded-full shadow-md hover:bg-gray-200 focus:outline-none"
          className="cursor-pointer aspect-square object-contain object-center w-[22px] overflow-hidden shrink-0 max-w-full"
          >
          <svg
            xmlns="http://www.w3.org/2000/svg"
            className="h-5 w-5 text-gray-600"
            fill="none"
            viewBox="0 0 24 24"
            stroke="currentColor">
            <path
              strokeLinecap="round"
              strokeLinejoin="round"
              strokeWidth={2}
              d="M6 18L18 6M6 6l12 12"
            />
          </svg>
        </button>
      </div>
      <div className="bg-black bg-opacity-10 shrink-0 h-px mt-4" />
    </>
  )
}

export default Header
