console.log("Service worker is running.");

chrome.runtime.onMessage.addListener((msg) => console.log(msg.text));
