import React, { useEffect, useState } from "react"
import { IoCloseCircleSharp } from "react-icons/io5"

import { Storage } from "@plasmohq/storage"
import { useStorage } from "@plasmohq/storage/hook"

const TimeOffModal = () => {
  const storage = new Storage()
  const [selectedTime, setSelectedTime] = useState(null);
  const gradientColors = "linear-gradient(135deg, #7C3AED 0%, #5821B6 100%)";

  const [credits, setCredits] = useStorage<number>("credits", 0)
  const [userType, setUserType] = useStorage("userType", 0)
  const handleButtonClick = async (time) => {
    if (credits <= 0 && userType == 0) {
      window.open("https:://www.betimeful.com/mobileonly", "_blank")
    } else {
      setSelectedTime(time)
      setCredits((cred) => cred - 1)
      await storage.set("timeOn", time * 60)
    }
  }

  const handleNoDuration = async (time) => {
    setSelectedTime(time)
    await storage.set("timeOn", time)
  }

  const handleClose = async () => {
    await storage.set("showTimeOnModal", "false")
    chrome.runtime.sendMessage({ reloadPage: true })
  }

  return (
    <div
      style={{
        position: "fixed",
        width: "100%",
        height: "100%",
        top: 0,
        left: 0,
        zIndex: 1000,
        background: "rgba(0, 0, 0, 0.5)", // Darkened background
        // display: showModal == "true" ? "flex" : "none",
        display: "flex",
        justifyContent: "center",
        alignItems: "center"
      }}>
      <span className="relative justify-end items-stretch border bg-white flex w-[493px] h-[200px] flex-col pt-7 pb-11 px-6 rounded-2xl border-solid border-black border-opacity-10 max-md:px-5">
        <IoCloseCircleSharp
          className="cursor-pointer text-4xl absolute right-0 top-0 mt-2 mr-2 outline-2 outline-slate-900"
          onClick={handleClose}
        />
        <div className="text-gray-700 text-2xl font-semibold tracking-tight max-md:max-w-full">
          Timed breaks to Show News Feed
        </div>
        <div className="bg-gray-100 shrink-0 h-px mt-4 max-md:max-w-full" />
        <span className="justify-between items-center bg-stone-50 flex gap-5 mt-5 p-3 rounded-lg border-[0.5px] border-solid border-black border-opacity-10 max-md:max-w-full max-md:flex-wrap mb-4">
          <div className="text-teal-900 text-xl italic tracking-normal my-auto">
            {((userType == 0 && credits > 0) || userType == 2) && (
              <p className="italic">
                "Time is the sculptor of our destiny; use each moment to chisel
                a masterpiece of purpose and fulfillment."
              </p>
            )}
          </div>
          <div className="text-teal-900 text-xl italic tracking-normal my-auto">
            {userType == 1 && credits > 0 && (
              <p>You'll be charged once you surpass your credits</p>
            )}
            {userType == 0 && credits <= 0 && (
              <>
                <span
                  className="text-purple-500 underline mr-1 cursor-pointer"
                  onClick={() =>
                    window.open(
                      "https://www.betimeful.com/mobileonly",
                      "_blank"
                    )
                  }>
                  {" "}
                  Start $0 Trial
                </span>
                <span>to Get +30 New Credits</span>
              </>
            )}
          </div>

          {((userType == 0 && credits <= 0) ||
            (userType == 1 && credits > 0)) && (
            <span className="text-gray-700 text-center text-lg font-medium leading-4 whitespace-nowrap justify-center items-stretch bg-amber-300 self-stretch px-2 py-1 rounded-[100px]">
              {credits < 0 ? 0 : credits}/30 credits left
            </span>
          )}
        </span>
        <div className="items-stretch flex gap-2 mt-5 max-md:max-w-full max-md:flex-wrap">
          {[1, 5, 15, 60].map((time) => (
            <button
              key={time}
              onClick={() => handleButtonClick(time)}
              className={`text-slate-600 text-xl leading-5 whitespace-nowrap justify-center items-stretch border grow px-4 py-2 rounded-[100px] max-md:px-3 ${
                selectedTime === time
                  ? "border-solid border-violet-700"
                  : "bg-white border-solid border-black border-opacity-10"
              }`}
              style={{
                backgroundImage: selectedTime == time ? gradientColors : "none",
                backgroundClip: selectedTime == time ? "text" : "unset"
              }}>
              {time} mins
            </button>
          ))}
          {userType == 0 && credits <= 0 && (
            <button
              key={0}
              onClick={() => handleNoDuration(-1)}
              className={`text-slate-600 text-xl leading-5 whitespace-nowrap justify-center items-stretch border grow px-4 py-2 rounded-[100px] max-md:px-3 ${
                selectedTime === 0
                  ? "border-solid border-violet-700 bg-clip-text bg-[linear-gradient(135deg,#7C3AED_0%,#5821B6_100%)]"
                  : "bg-white border-solid border-black border-opacity-10"
              }`}>
              No Duration
              <span className="text-gray-700 text-center text-xl font-medium leading-4 whitespace-nowrap justify-center items-stretch bg-amber-300 self-stretch mx-1 px-2 py-1 rounded-[100px]">
                Free
              </span>
            </button>
          )}
        </div>
      </span>
    </div>
  )
}

export default TimeOffModal
