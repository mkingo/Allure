import React, { useEffect, useState } from "react"

import { Storage } from "@plasmohq/storage"
import { useStorage } from "@plasmohq/storage/hook"

import { Sources } from "~src/utils/Constants"

import main from "../../assets/main.svg"
import ProUser from "./ProUser"

const Main = () => {
  const [isChecked, setIsChecked] = useState(true)
  const [clickedImages, setClickedImages] = useState([])
  const storage = new Storage()
  const [credits, setCredits] = useStorage("credits", 0)
  const [userType, setUserType] = useStorage("userType", 0)

  useEffect(() => {
    const loadSelectedSocials = async () => {
      // const selectedSocials = await storage.get("selectedSocials")
      // setClickedImages(selectedSocials)
      // if (selectedSocials.length > 0) {
      //   setIsChecked(false)
      // }
      // const selectedSocials = await storage.get("selectedSocials");
      // setClickedImages(selectedSocials) // Ensure to handle case when selectedSocials is null or undefined
      // if (selectedSocials && selectedSocials.length > 0) {
      //   setIsChecked(false)
      // }
      const storedClickedImages = await storage.get("selectedSocials");
      if (storedClickedImages) {
        setClickedImages(storedClickedImages);
        if (storedClickedImages.length > 0) {
          setIsChecked(false); // Assuming isChecked should be false if there are selected images
        }
      }
    }

    loadSelectedSocials()
  }, []) // Run once on component mount

  useEffect(() => {
    const saveSelectedSocials = async () => {
      await storage.set("selectedSocials", clickedImages)
    }

    saveSelectedSocials()
  }, [clickedImages])

  const handleImageClick = async (source) => {
    // setClickedImages((prevClickedImages) => {
    //   if (prevClickedImages.includes(source)) {
    //     return prevClickedImages.filter((img) => img !== source)
    //   } else {
    //     return [...prevClickedImages, source]
    //   }
    // })
    const allSources = Object.keys(Sources)
    setClickedImages(allSources)
    // await storage.set("selectedSocials", allSources)
    await storage.set("showTimeOnModal", "true")
    // setClickedImages(Object.keys(Sources));
    // // await storage.set("selectedSocials", Object.keys(Sources));

    // await storage.set("showTimeOnModal", "true");
    window.close();
  }

  const handleCheckboxChange = async () => {
    if (isChecked) {
      await storage.set("showTimeOnModal", "true");
      const allSources = Object.keys(Sources)
      setClickedImages(allSources)
      setIsChecked(!isChecked);
    } else {
      setIsChecked(!isChecked);
      setClickedImages([]);
      await storage.set("timeOn", 0);
    }

    window.close();
  }

  const handleGetApp = async () => {
    await storage.set("showDownloadAppBanner", "true")
    window.close()
  }

  return (
    <>
      <span className="justify-between flex gap-5 mt-5 items-start">
        <div className="text-gray-700 text-center text-sm font-semibold leading-5">
          Block All
        </div>
        <div className="self-stretch flex aspect-[2] flex-col justify-center items-stretch">
          <label className="autoSaverSwitch relative inline-flex cursor-pointer select-none items-center">
            <input
              type="checkbox"
              name="autoSaver"
              className="sr-only"
              checked={isChecked}
              onChange={handleCheckboxChange}
            />
            <span
              className={`slider mr-3 flex h-[26px] w-[50px] items-center rounded-full p-1 duration-200 ${
                isChecked ? "bg-purple-500" : "bg-[#CCCCCE]"
              }`}>
              <span
                className={`dot h-[18px] w-[18px] rounded-full bg-white duration-200 ${
                  isChecked ? "translate-x-6" : ""
                }`}></span>
            </span>
          </label>
        </div>
      </span>
      <div className="bg-black bg-opacity-10 shrink-0 h-px mt-4" />
      <div className="items-stretch flex gap-4 mt-6">
        {Object.entries(Sources).map(([key, source], index) => (
          <img
            key={index}
            loading="lazy"
            src={source}
            className={`cursor-pointer aspect-square object-contain object-center w-[31px] fill-[linear-gradient(315deg,#FBE18A_0.96%,#FCBB45_21.96%,#F75274_38.96%,#D53692_52.96%,#8F39CE_74.96%,#5B4FE9_100.96%)] overflow-hidden shrink-0 max-w-full ${
              clickedImages.includes(key) ? "opacity-30" : "opacity-100"
            }`}
            onClick={() => handleImageClick(key)}
            alt={`Source ${index + 1}`}
          />
        ))}
      </div>
      <div className="justify-center items-stretch bg-stone-50 flex w-full flex-col mt-5 p-3 rounded-lg border-[0.5px] border-solid border-black border-opacity-10">
        <div className="justify-between items-stretch flex gap-5 pr-1.5">
          <span className="flex grow basis-[0%] flex-col items-stretch">
            <div className="text-teal-900 text-xs italic leading-4 tracking-normal bg-clip-text bg-[linear-gradient(219deg,#CE1B29_15.55%,#9B6CFF_57.98%,#FA9622_83.43%)]">
              😍 You have unlocked
              <span className="font-extrabold"> PRO,</span> Enjoy BeTimeful App
              for FREE!
            </div>
            <button
              className="text-white text-center text-xs font-semibold justify-center items-stretch bg-[linear-gradient(135deg,#7C3AED_0%,#5821B6_100%)] mt-3 px-3 py-1.5 rounded-[109.442px]"
              onClick={handleGetApp}>
              Get the app
            </button>
          </span>
          <img
            src={main}
            className="aspect-[0.65] object-contain object-center w-11 overflow-hidden shrink-0 max-w-full self-start"
          />
        </div>
      </div>

      <div className="bg-black bg-opacity-10 shrink-0 mt-4" />
      {userType == 1 && credits <= 0 && <ProUser credits={credits} />}
      <div className="bg-black bg-opacity-10 shrink-0 h-px mt-4" />
      {/* <EarnCredits /> */}
      {/* <div className="bg-black bg-opacity-10 shrink-0 h-px mt-4" /> */}
      <div className="items-center flex justify-between gap-2.5 mt-5 pr-7">
        <button
          className="justify-between items-stretch bg-[#9B80BB] flex gap-1 px-2.5 py-2 rounded-lg"
          onClick={() => window.open("mailto:hello@betimeful.com", "_blank")}>
          <div className="text-white text-xs font-semibold grow whitespace-nowrap">
            Request a feature
          </div>
          <img
            loading="lazy"
            src="https://cdn.builder.io/api/v1/image/assets/TEMP/5ab8f6af5d7c8c687f372f2f3193b42cd0e02b70eb1b5f7b5135fc7f60a0749c?"
            className="aspect-square justify-center object-contain object-center w-3 overflow-hidden shrink-0 max-w-full self-start mx-1"
          />
        </button>

        <div className="flex justify-center items-center">
          <button
            className="bg-[#9B80BB] flex justify-center items-center px-2.5 py-2 rounded-lg"
            onClick={() => window.open("mailto:hello@betimeful.com", "_blank")}>
            <div className="text-white text-xs font-semibold grow whitespace-nowrap">
              Send us a feedback
            </div>
            <img
              loading="lazy"
              src="https://cdn.builder.io/api/v1/image/assets/TEMP/cdb39ed690ad1211e6d06b3612c1f9ae47401fabf92b34908e0fcb9409227788?"
              className="text-center aspect-square object-contain object-center w-3 overflow-hidden shrink-0 max-w-full self-start mx-1"
            />
          </button>
        </div>
      </div>
    </>
  )
}

export default Main
