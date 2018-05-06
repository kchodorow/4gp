chrome.runtime.onMessage.addListener(function (msg, sender, sendResponse) {
  const gameId = document.evaluate("//div[div='Game ID:']/div[2]", document, null, XPathResult.ANY_TYPE, null).iterateNext().innerText;
  sendResponse({ gameId: gameId, tabId: msg.tabId });
});
