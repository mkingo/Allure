import { useEffect, useState } from "react"

import "./style.css"

import { Provider } from "react-redux"

import { PersistGate } from "@plasmohq/redux-persist/integration/react"
import { Storage } from "@plasmohq/storage"
import { useStorage } from "@plasmohq/storage/hook"

import Header from "./components/Header"
import Main from "./components/Main"
import PinnedExtension from "./components/PinnedExtension"
import { persistor, store } from "./store"

function IndexPopup() {
  const storage = new Storage();
  const [firstTimeInstall] = useStorage("firstTimeInstalled")
  async function checkIsPinned() {
    let userSettings = await chrome.action.getUserSettings();
    console.log("userSettings", userSettings);
    if (userSettings.isOnToolbar == false) {
      await storage.set("firstTimeInstalled", "true");
    } else {
      await storage.set("firstTimeInstalled", "false");
    }
  }

  useEffect(() => {
    checkIsPinned();
  }, [])

  return (
    // <Provider store={store}>
    //   <PersistGate loading={null} persistor={persistor}>
        <div className="">
          <div className="w-full items-stretch bg-white flex max-w-[450px] flex-col rounded-xl p-[16px]">
            <Header />
            {firstTimeInstall == "true" ? <PinnedExtension /> : <Main />}
          </div>
        </div>
    //   </PersistGate>
    // </Provider>
  )
}

export default IndexPopup
