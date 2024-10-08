import { Storage } from "@plasmohq/storage"

const storage = new Storage();

let currentEmail: string;
chrome.identity.getProfileUserInfo(function (info) {
  storage.set("currentUser", info.email);
  currentEmail = info.email;
})

chrome.runtime.onInstalled.addListener(async function (details) {
  if (details.reason == "install") {
    console.log("Extension installed")

    await storage.set("credits", 30)
    await storage.set("firstTimeInstalled", "true")
    await storage.set("timeOn", 0)

    const email = await storage.get("currentUser") // Assuming the storage key is "email"
    currentEmail = email;
    const url = "https://www.betimeful.com/permission?email=" + email;
    if (email) {
      getPermission(url);
    }
    chrome.extension.getViews({ type: "popup" });
  } else if (details.reason == "update") {
    // perform some logic
    console.log("Extension updated");
  }
})

const url = "https://www.betimeful.com/permission?email=" + currentEmail;
let currentUserType
// const data = { email: email }
if (currentEmail) {
  fetch(url, {
    method: "POST",
    headers: {
      "Content-Type": "application/json"
    },
  })
    .then((response) => response.json())
    .then((data) => {
      currentUserType = data.userType
      storage.set("userType", data.userType)
    })
    .catch((error) => {
      console.error("Error:", error)
    })
}


function getPermission(permissionUrl) {
  fetch(permissionUrl, {
    method: "POST",
    headers: {
      "Content-Type": "application/json"
    },
  })
    .then((response) => response.json())
    .then(async (data) => {
      currentUserType = data.userType
      await storage.set("userType", data.userType);
      if (currentUserType == "0") {
        // storage.set("credits", 0)
        chrome.tabs.create({ url: "https://www.betimeful.com/mobileonly" });
      } else {
        chrome.tabs.create({ url: "https://www.youtube.com" });
      }
    })
    .catch((error) => {
      console.error("Error:", error)
    })
}

function getSubscription(currEmail) {
  const subscription_url = "https://www.betimeful.com/upgrade-subscription"
  if (currEmail) {
    fetch(subscription_url, {
      method: "POST",
      headers: {
        "Content-Type": "application/json"
      },
      body: JSON.stringify({ email: currEmail })
    })
      .then((response) => response.json())
      .then((data) => {
        if (data.status) {
          storage.set("userType", 2)
        }
      })
      .catch((error) => {
        console.error("Error:", error)
      })
  }
}

chrome.runtime.onMessage.addListener((message, sender, sendResponse) => {
  if (message.reloadPage) {
    chrome.tabs.reload(sender.tab.id); // Reload the tab
  }
});

// Monitor the storage values and make the API call when conditions are met
setInterval(async () => {
  const credits = await storage.get("credits");
  const userType = await storage.get("userType");
  const currEmail = currentEmail;

  if (userType == "1" && (credits as unknown as number) <= 0) {
    // Make the API call here
    getSubscription(currEmail)
  }
}, 60000) // Check every minute


// Add event listener for tab updates
chrome.tabs.onUpdated.addListener(function(tabId, changeInfo, tab) {
  // Check if the tab has completed loading and the URL is ready
  if (changeInfo.status === 'complete' && tab.url) {
    // Check if the URL contains the specific string you're looking for
    if (tab.url.includes('https://www.betimeful.com/success')) {
      // Redirect the user to youtube.com
      chrome.tabs.create({ url: 'https://www.youtube.com/' });
    }
  }
});