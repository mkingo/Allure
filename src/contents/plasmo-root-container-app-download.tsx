// import type {
//   PlasmoCSConfig,
//   PlasmoCSUIJSXContainer,
//   PlasmoCSUIProps,
//   PlasmoRender,
//   PlasmoWatchOverlayAnchor
// } from "plasmo"
// import { useEffect, useState, type FC } from "react"
// import { createRoot } from "react-dom/client"

// import cssText from "./styles/plasmo-root-container-style.css"

// export const config: PlasmoCSConfig = {
//   matches: ["<all_urls>"]
// }

// export type PlasmoCSUIAnchor = {
//   type: "overlay" | "inline"
//   element: Element
// }

// export const watchOverlayAnchor: PlasmoWatchOverlayAnchor = (
//   updatePosition
// ) => {
//   const interval = setInterval(() => {
//     updatePosition()
//   }, 1000)
 
//   // Clear the interval when unmounted
//   return () => {
//     clearInterval(interval)
//   }
// }

// export const getRootContainer = () =>
//   new Promise((resolve) => {
//     const checkInterval = setInterval(() => {
//       const rootContainerParent = document.body
//       if (rootContainerParent) {
//         clearInterval(checkInterval)
//         const rootContainer = document.createElement("div")
//         rootContainerParent.appendChild(rootContainer)
//         resolve(rootContainer)
//       }
//     }, 137)
//   })

// export const getStyle = () => {
//   const style = document.createElement("style")
//   style.textContent = cssText
//   return style
// }

// const PlasmoOverlay: FC<PlasmoCSUIProps> = () => {
//   // const storage = new Storage();
//   // const [showBanner, setShowBanner] = useState(false)
//   // useEffect(() => {
//   //   const getCredits = async () => {
//   //     const showDAB = storage.get("showDownloadAppBanner");
//   //     console.log("showDAB value is :- ", showDAB);
//   //     setShowBanner(showDAB == "true" ? true : true);
//   //   }
//   //   getCredits();
//   // }, [])
  
//   // return (
//     // <div
//     //   style={{
//     //     position: "fixed",
//     //     width: "100%",
//     //     height: "100%",
//     //     top: "50%",
//     //     left: "50%",
//     //     transform: "translate(-50%, -50%)",
//     //     zIndex: 1000,
//     //     background: "rgba(0, 0, 0, 0.5)", // Darkened background
//     //     padding: 16,
//     //     borderRadius: 8,
//     //     textAlign: "center",
//     //     display: "flex",
//     //     justifyContent: "center",
//     //     alignItems: "center"
//     //   }}>
//     // return (
//     //   <OverlayModal />
//     // )
//     // </div>
//   //   <div
//   //     style={{
//   //       position: "fixed",
//   //       width: "100%",
//   //       height: "100%",
//   //       top: 0,
//   //       left: 0,
//   //       zIndex: 1000,
//   //       background: "rgba(0, 0, 0, 0.5)", // Darkened background
//   //       display: showBanner ? "flex" : "none",
//   //       justifyContent: "center",
//   //       alignItems: "center"
//   //     }}>
//   //     <div
//   //       // style={{
//   //       //   padding: 16,
//   //       //   borderRadius: 8,
//   //       //   textAlign: "center",
//   //       //   background: "white" // Modal background color
//   //       // }}
//   //       >
//   //       <DownloadApp />
//   //     </div>
//   //   </div>
//   // )
//   return ""
  
// }

// export const render: PlasmoRender<PlasmoCSUIJSXContainer> = async ({
//   createRootContainer
// }) => {
//   const rootContainer = await createRootContainer()
//   const root = createRoot(rootContainer)
//   root.render(<PlasmoOverlay />)
// }

// export default PlasmoOverlay
