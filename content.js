//Receives Messages from Background
chrome.runtime.onMessage.addListener(
    function(request, sender, sendResponse) {
        if(request.message === "nyaa.si") {
            nyaaDotSi();
        }
    }
);

// Sorts nyaa.si pages by # of seeders on page load
function nyaaDotSi() {
    // If the current page is not sorted
    if(!window.location.href.includes("&s=seeders&o=desc") && !window.location.href.includes("nyaa.si/view")) {
        // Append the sorting parameters
        if(!window.location.href.includes("?")) {
            window.location.replace(window.location.href + "?&s=seeders&o=desc");
        }
        else {
            window.location.replace(window.location.href + "&s=seeders&o=desc");
        }
    }
    // Else if the page is sorted
    else {
        // Click on the search bar
        $("input.form-control.search-bar").focus();
    }
}
