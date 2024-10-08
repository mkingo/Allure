import type { PlasmoCSConfig } from "plasmo"
import { Storage } from "@plasmohq/storage"

export const config: PlasmoCSConfig = {
  matches: ["https://www.linkedin.com/*"]
}

const handleNewsFeedVisibility = async () => {
  const storage = new Storage();
  const timeOn = await storage.get("timeOn") as number;
  const socials = await storage.get("selectedSocials") as string[];
  const mainElement = document.querySelector('main');
  
  if (mainElement) {
    if (socials && socials.includes("linkedin") && timeOn != 0) {
      mainElement.style.visibility = "visible"
    } else {
      mainElement.style.visibility = "hidden"
    }
  }
}

const observer = new MutationObserver(handleNewsFeedVisibility)

window.addEventListener("load", () => {
  handleNewsFeedVisibility()

  // Observe changes to the DOM, including subtree modifications
  observer.observe(document.body, { subtree: true, childList: true })
  // window.addEventListener('storage', (event) => {
  //   if (event.key === 'selectedSocials' || event.key === 'timeOn') {
  //     handleNewsFeedVisibility();
  //   }
  // });
})
