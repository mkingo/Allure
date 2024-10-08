import React from "react"

const ProUser = ({credits}) => {
  return (
    <div>
      <span className="justify-between items-center flex gap-5 mt-5">
        <div className="text-gray-700 text-center text-sm font-semibold my-auto">
          {credits > 0 ? credits : 0}/30 credits left
        </div>
        <button
          className="text-white text-center text-xs font-semibold whitespace-nowrap justify-center items-stretch bg-[linear-gradient(135deg,#7C3AED_0%,#5821B6_100%)] self-stretch px-3 py-1.5 rounded-[109.442px]"
          onClick={() =>
            window.open("https://www.betimeful.com/mobileonly", "_blank")
          }>
          PRO USER 🚀
        </button>
      </span>
    </div>
  )
}

export default ProUser
