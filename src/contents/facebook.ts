// // import { useStorage } from "@plasmohq/storage/hook";
// import type { PlasmoCSConfig } from "plasmo"

// import { Storage } from "@plasmohq/storage"

// export const config: PlasmoCSConfig = {
//   matches: ["https://www.facebook.com/*"]
// }

// window.addEventListener("load", async () => {
//   const storage = new Storage()
//   const socials = await storage.get("selectedSocials")

//   console.log("socials vale is:- ", socials)

//   // Find the element with role="main"
//   const mainElement = document.querySelector('[role="main"]')

//   // Hide the main element
//   mainElement.style.display = "none"
//   if (socials && socials.includes("facebook")) {
//     if (mainElement) {
//       mainElement.style.display = "flex"
//     }
//   }
// })

import type { PlasmoCSConfig } from "plasmo"

import { Storage } from "@plasmohq/storage"

export const config: PlasmoCSConfig = {
  matches: ["https://www.facebook.com/*"]
}

const handleNewsFeedVisibility = async () => {
  const storage = new Storage()
  const timeOn = (await storage.get("timeOn")) as number
  const socials = (await storage.get("selectedSocials")) as string[]
  const mainElement = document.querySelector('[role="main"]')
  if (mainElement) {
    if (socials && socials.includes("facebook") && timeOn != 0) {
      mainElement.style.display = "flex"
    } else {
      mainElement.style.display = "none"
    }
  }
}

const observer = new MutationObserver(handleNewsFeedVisibility)

window.addEventListener("load", () => {
  handleNewsFeedVisibility()

  // Observe changes to the DOM, including subtree modifications
  observer.observe(document.body, { subtree: true, childList: true })
  // window.addEventListener("storage", (event) => {
  //   if (event.key === "selectedSocials" || event.key === "timeOn") {
  //     handleNewsFeedVisibility()
  //   }
  // })
})
