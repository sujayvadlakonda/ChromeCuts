// Main Method
chrome.tabs.onUpdated.addListener(function (tabId, changeInfo, tab) {
    console.log("Detected a match!");
    chrome.tabs.sendMessage(tabId, {"message": "nyaa.si"});
});
