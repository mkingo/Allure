import cssText from "data-text:./styles/plasmo-root-container-style.css"
import type { PlasmoCSConfig } from "plasmo"
import { useEffect, useState } from "react"

// Inject to the webpage itself
import "./styles/plasmo-sidebar-style.css"

import { Storage } from "@plasmohq/storage"
import { useStorage } from "@plasmohq/storage/hook"

import Timer from "~src/components/Timer"
import { Socials } from "~src/utils/Constants"

export const config: PlasmoCSConfig = {
  matches: Socials,
  run_at: "document_end",
}

// Inject into the ShadowDOM
export const getStyle = () => {
  const style = document.createElement("style")
  style.textContent = cssText
  return style
}

export const getShadowHostId = () => "plasmo-index-side-panel"

const IndexSidePanel = () => {
  const [timeOn, setTimeOn] = useStorage("timeOn", 0)
  const storage = new Storage();

  const currentUrl = "https://" + window.location.hostname + "/*";
  const isHostNameValid = Socials.includes(currentUrl);

  //   const [timer, setTimer] = useState(0);

  useEffect(() => {
    // Assuming you have the timer value from storage in minutes
    // const storedTime = timeOn || 0;
    // setTimer(storedTime);
    // Update timer every second
    const interval = setInterval(async () => {
      if (timeOn > 0) {
        // setTimer((prevTimer) => prevTimer - 1);
        setTimeOn((prev) => prev - 1)
      } else {
        clearInterval(interval)
        await storage.set("selectedSocials", [])
      }
    }, 1000)
    // Todo :- Fix selectedSocials to [] when timer has finished
    const setSocialsToEmpty = async () => {
      if (timeOn == 0) {
        await storage.set("selectedSocials", [])
      }
    }

    // setSocialsToEmpty()

    return () => clearInterval(interval)
  }, [timeOn])

  // Format the timer value to display in MM:SS format
  const formattedTime = new Date(timeOn * 1000).toISOString().substr(14, 5)

  return <>{timeOn > 0 && isHostNameValid && <Timer formattedTime={formattedTime} />}</>
}

export default IndexSidePanel
