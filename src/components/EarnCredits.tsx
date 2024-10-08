import React from "react"

const EarnCredits = () => {
  return (
    <div>
      <header className="mt-4 text-sm font-semibold text-gray-700 whitespace-nowrap">
        <h1>Do you want to earn free credits? 🤩</h1>
      </header>
      <div className="mt-1 text-xs leading-4 whitespace-nowrap text-neutral-400">
        Earn 20 credits effortlessly! Here's how:
      </div>
      <div className="flex gap-2.5 justify-between mt-4 font-semibold whitespace-nowrap">
        <button className="cursor-pointer flex gap-2 justify-between px-2.5 py-2 text-gray-800 rounded-lg bg-violet-500 bg-opacity-10">
          <header
            className="justify-center items-center px-1 text-sm leading-5 rounded aspect-square bg-amber-500 bg-opacity-20 h-[22px]"
            aria-label="Star"
            role="img">
            🌟
          </header>
          <div className="grow my-auto text-xs">Give a review</div>
        </button>
        <button className="cursor-pointer flex gap-2 justify-between px-2.5 py-2 rounded-lg bg-violet-500 bg-opacity-10">
          <header
            className="justify-center items-center px-1 text-sm leading-5 text-gray-800 rounded aspect-square bg-amber-500 bg-opacity-20 h-[22px]"
            aria-label="Camera"
            role="img">
            🤳
          </header>
          <div className="grow my-auto text-xs text-stone-800">
            {" "}
            Post us on social media{" "}
          </div>
        </button>
      </div>
      <button className="flex gap-2 justify-between px-4 py-2 mt-2.5 font-semibold rounded-lg bg-violet-500 bg-opacity-10">
        <div
          className="justify-center items-center px-1 text-sm leading-5 text-gray-800 whitespace-nowrap rounded aspect-square bg-amber-500 bg-opacity-20 h-[22px]"
          aria-label="Mobile Icon">
          📱
        </div>
        <div className="flex-auto my-auto text-xs text-stone-800">
          Download the BeTimeful app
        </div>
      </button>
    </div>
  )
}

export default EarnCredits
