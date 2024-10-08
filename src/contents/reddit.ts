import type { PlasmoCSConfig } from "plasmo"
import { Storage } from "@plasmohq/storage"

export const config: PlasmoCSConfig = {
  matches: ["https://www.reddit.com/*"]
}

const handleNewsFeedVisibility = async () => {
  const storage = new Storage();
  const timeOn = await storage.get("timeOn") as number;
  const socials = await storage.get("selectedSocials") as string[];
  let mainElement;
  const mainLoginElement = document.querySelector("div.rpBJOHq2PR60pnwJlUyP0, div.FohHGMokxXLkon1aacMoi, #TrendingPostsContainer, [data-testid='frontpage-sidebar'], div._2l7c_Oz0UVsamALvPrlznq");
  const mainLogoutElement = document.querySelector("main");
  const mastHead = document.getElementsByClassName("masthead");

  if (mainLoginElement) {
    mainElement = mainLoginElement;

  } else if (mainLogoutElement) {
    mainElement = mainLogoutElement;
  }
  // Hide the main element
  // mainLoginElement.style.visibility = "hidden";
  // mainLogoutElement.style.visibility = "hidden";
  // mastHead[0].style.display = "none";
  // if (socials && socials.includes("reddit") && timeOn != 0) {
  //   if (mainLoginElement) {
  //     mainLoginElement.style.visibility = "visible";
  //     mastHead[0].style.display = "flex";
  //   }
  //   if (mainLogoutElement) {
  //     mainLogoutElement.style.visibility = "visible";
  //   }
  // }

  if (mainElement) {
    if (socials && socials.includes("reddit") && timeOn != 0 ) {
      mainElement.style.visibility = "visible"
      mastHead[0].style.display = "flex";
    } else {
      mainElement.style.visibility = "hidden"
      mastHead[0].style.display = "none";
    }
  }
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

