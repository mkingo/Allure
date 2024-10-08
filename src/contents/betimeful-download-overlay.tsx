import cssText from "data-text:./styles/plasmo-root-container-style.css"
import type { PlasmoCSConfig } from "plasmo"

import { useStorage } from "@plasmohq/storage/hook"

import { Socials } from "~src/utils/Constants"
import DownloadApp from "~src/components/DownloadApp"

export const config: PlasmoCSConfig = {
  matches: Socials,
}

// Inject into the ShadowDOM
export const getStyle = () => {
  const style = document.createElement("style")
  style.textContent = cssText
  return style
}

export const getShadowHostId = () => "betimeful-download-app"

const DownloadAppOverlay = () => {
  const [downApp] = useStorage("showDownloadAppBanner", "false");

  return <>{downApp == "true" && <DownloadApp />}</>
}

export default DownloadAppOverlay;