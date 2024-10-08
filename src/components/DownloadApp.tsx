import React, { useEffect, useState } from "react"


import { Storage } from "@plasmohq/storage";
import downloadApp from "../../assets/download-app.svg"

function DownloadApp() {
  const storage = new Storage();
  // const [downApp] = useStorage("showDownloadAppBanner", "false");

  const handleClose = async () => {
    await storage.set("showDownloadAppBanner", "false");
  }
  return (
    <div
      style={{
        position: "fixed",
        width: "100%",
        height: "100%",
        top: "50%",
        left: "50%",
        transform: "translate(-50%, -50%)",
        zIndex: 1000,
        background: "rgba(0, 0, 0, 0.5)", // Darkened background
        padding: 16,
        textAlign: "end",
        display: "flex",
        justifyContent: "center",
        alignItems: "center"
      }}
      >
      <div className="relative">
        <img src={downloadApp} alt="Image" className="w-full h-auto" />
        <button
          onClick={handleClose}
          className="absolute top-0 right-0 mt-4 mr-4 p-2 bg-white rounded-full shadow-md hover:bg-gray-200 focus:outline-none">
          <svg
            xmlns="http://www.w3.org/2000/svg"
            className="h-6 w-6 text-gray-600"
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
    </div>
  )
}

export default DownloadApp
