

chrome.browserAction.onClicked.addListener((tab) => {
  chrome.tabs.executeScript({
    file: 'send-data.js'
  });
});

    // code: 'sendData(fetchData());'
