console.log("Popup page is running.");

document.querySelector("#popup-btn").addEventListener("click", () => {
  chrome.runtime.sendMessage({ text: "Popup" });
  chrome.tabs.query(
    {
      active: true,
      currentWindow: true,
    },
    (tabs) => {
      chrome.tabs.sendMessage(tabs[0]?.id, { text: "Popup" });
    }
  );
});

// source that sends the msg will not recieve it
chrome.runtime.onMessage.addListener((msg) => {
  document.body.innerHTML += `<div>${msg.text}</div>`;
});
