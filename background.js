// Main Method
chrome.tabs.onUpdated.addListener(function (tabId, changeInfo, tab) {
    chrome.tabs.sendMessage(tabId, {"message": "nyaa.si"});
});
