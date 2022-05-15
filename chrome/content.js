function checkAll() {
  const user_id = document.evaluate("//div[@user-id]", document, null, XPathResult.ANY_TYPE, null).iterateNext().getAttribute('user-id');
  var box = document.getElementById('tickets_for_' + user_id);
  box.checked = true;
  for (var i = 1; i < 10; ++i) {
    box = document.getElementById('extra_tickets_for_' + i);
    if (!box) {
      alert('Not enough available!');
      return;
    }
    box.checked = true;
  }
  document.getElementById('all_or_nothing').checked = true;
}

if (document.URL.startsWith('https://www.gencon.com/events/')) {
  const gameId = document.evaluate("//div[div='Game ID:']/div[2]", document, null, XPathResult.ANY_TYPE, null).iterateNext().innerText;
  if (gameId.startsWith('TDA')) {
    checkAll();
  }
}

chrome.runtime.onMessage.addListener(function (msg, sender, sendResponse) {
  sendResponse({ gameId: gameId, tabId: msg.tabId });
});
