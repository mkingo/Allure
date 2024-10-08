import type { PlasmoCSConfig } from "plasmo"

import { Storage } from "@plasmohq/storage"

export const config: PlasmoCSConfig = {
  matches: ["https://www.youtube.com/*"]
}

const handleNewsFeedVisibility = async () => {
  const storage = new Storage();
  // const timeOn = await storage.get("timeOn") as number;
  // storage.get("selectedSocials").then((socials) => {
  //   const mainElement = document.getElementById("contents");
  //   // const mainElement = document.querySelector('main');

  //   if (mainElement) {
  //     if (socials && socials.includes("youtube") && timeOn != 0) {
  //       mainElement.style.display = "flex"
  //     } else {
  //       mainElement.style.display = "none"
  //     }
  //   }
  // })
  const timeOn = (await storage.get("timeOn")) as number
  const socials = (await storage.get("selectedSocials")) as string[]

  const mainElement = document.getElementById("contents")

  if (mainElement) {
    if (socials && socials.includes("youtube") && timeOn !== 0) {
      mainElement.style.display = "flex"
    } else {
      mainElement.style.display = "none"
    }
  }
}

const observer = new MutationObserver(handleNewsFeedVisibility)

window.addEventListener("load", () => {
  handleNewsFeedVisibility();

  // Observe changes to the DOM, including subtree modifications
  observer.observe(document.body, { subtree: true, childList: true })
  // Run the script when the browser is idle
  // Listen for changes to storage values
})
