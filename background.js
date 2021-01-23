// Main Method
chrome.tabs.onUpdated.addListener(function (tabId, changeInfo, tab) {
    if(tab.url.includes('nyaa.si')) {
        chrome.tabs.sendMessage(tabId, {"message": "nyaa.si"});
    } else {
        chrome.tabs.sendMessage(tabId, {"message": "Microsoft Stream"});
    }
});
