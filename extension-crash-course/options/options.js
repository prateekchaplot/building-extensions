console.log("Options page is running.");

document.querySelector("#options-btn").addEventListener("click", () => {
  chrome.runtime.sendMessage({ text: "Options" });
});

chrome.runtime.onMessage.addListener((msg) => {
  document.body.innerHTML += `<div>${msg.text}</div>`;
});
