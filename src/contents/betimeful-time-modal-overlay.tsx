import type { PlasmoCSConfig, PlasmoGetInlineAnchor, PlasmoWatchOverlayAnchor } from "plasmo"
import TimeOffModal from "~src/components/TimeOffModal"
import cssText from "data-text:./styles/plasmo-root-container-style.css"
import { useStorage } from "@plasmohq/storage/hook"
import { Socials } from "~src/utils/Constants"



export const config: PlasmoCSConfig = {
  matches: Socials,
}

//Inject into the ShadowDOM
export const getStyle = () => {
  const style = document.createElement("style")
  style.textContent = cssText
  return style
}

export const getShadowHostId = () => "betimeful-time-modal"

// export const getInlineAnchor: PlasmoGetInlineAnchor = async () =>
// document.querySelector(`.b-chat__header__title .b-username-row:last-child`);

// export type PlasmoCSUIAnchor = {
//   type: "overlay" | "inline"
//   element: Element
// }

// export const watchOverlayAnchor: PlasmoWatchOverlayAnchor = (
//   updatePosition
// ) => {
//   const interval = setInterval(() => {
//     updatePosition()
//   }, 5000)
 
//   // Clear the interval when unmounted
//   return () => {
//     clearInterval(interval)
//   }
// }

const TimeModalOverlay = () => {
  const [showModal, setShowModal] = useStorage<string>(
    "showTimeOnModal",
    "false"
  )
  return (
    
    // <div
    //   style={{
    //     position: "fixed",
    //     width: "100%",
    //     height: "100%",
    //     top: "50%",
    //     left: "50%",
    //     transform: "translate(-50%, -50%)",
    //     zIndex: 1000,
    //     background: "rgba(0, 0, 0, 0.5)", // Darkened background
    //     padding: 16,
    //     borderRadius: 8,
    //     textAlign: "center",
    //     display: "flex",
    //     justifyContent: "center",
    //     alignItems: "center"
    //   }}>
    //   <TimeOffModal />
    // </div>
    // <div
    //   style={{
    //     position: "fixed",
    //     width: "100%",
    //     height: "100%",
    //     top: 0,
    //     left: 0,
    //     zIndex: 1000,
    //     background: "rgba(0, 0, 0, 0.5)", // Darkened background
    //     display: showBanner ? "flex" : "none",
    //     justifyContent: "center",
    //     alignItems: "center"
    //   }}>
      // <div
      // style={{
      //   padding: 16,
      //   borderRadius: 8,
      //   textAlign: "center",
      //   background: "white" // Modal background color
      // }}
      // >
      <>
       {showModal=="true" && <TimeOffModal />}
      </>
    //   </div>
    // </div>
  )
}

export default TimeModalOverlay
