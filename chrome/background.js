const urlRegex = /https:\/\/www\.gencon\.com\/events\/[0-9]+/;

const sendToPlanner = (response) => {
  const plannerUrl = `http://www.genconplanner.com/event/${response.gameId}`;
  chrome.tabs.update(response.tabId, { url: plannerUrl });
}

chrome.browserAction.onClicked.addListener(function (tab) {
  if (urlRegex.test(tab.url)) {
    chrome.tabs.sendMessage(tab.id, {tabId: tab.id}, sendToPlanner);
  }
});
