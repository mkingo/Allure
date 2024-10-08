import type { PlasmoCSConfig } from "plasmo"

import { Storage } from "@plasmohq/storage"

export const config: PlasmoCSConfig = {
  matches: ["https://twitter.com/*"]
}

const handleNewsFeedVisibility = async () => {
  const storage = new Storage()
  const timeOn = (await storage.get("timeOn")) as number;
  const socials = await storage.get("selectedSocials") as string[];
  const mainElement = document.querySelector('[data-testid="primaryColumn"]');
  // Determine if the user is logged in or not
  // const isUserLoggedOut = document.querySelector('[data-testid="login"]')

  // Don't do anything if the UI hasn't loaded yet
  // Select the correct Twitter feed based on the user's login status
  // let feed
  // if (isUserLoggedOut) {
  //   feed = document.querySelector(
  //     'div[data-testid="primaryColumn"] > div:last-child > div:nth-child(3)'
  //   )
  // } else {
  //   feed = document.querySelector(
  //     'div[data-testid="primaryColumn"] > div:last-child > div:nth-child(4)'
  //   )
  // }

  // if (feed == null) {
  //   return
  // }

  // const mainElement = feed

  if (mainElement) {
    if (socials && socials.includes("twitter") && timeOn != 0 ) {
      mainElement.style.visibility = "visible"
    } else {
      mainElement.style.visibility = "hidden"
    }
  }
  // storage.get("selectedSocials").then((socials) => {
  //   // const mainElement = document.querySelector("main")
   
  // })
}

const observer = new MutationObserver(handleNewsFeedVisibility)

window.addEventListener("load", () => {
  handleNewsFeedVisibility()

  // Observe changes to the DOM, including subtree modifications
  observer.observe(document.body, { subtree: true, childList: true });
  // window.addEventListener('storage', (event) => {
  //   if (event.key === 'selectedSocials' || event.key === 'timeOn') {
  //     handleNewsFeedVisibility();
  //   }
  // });
})
