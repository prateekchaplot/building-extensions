console.log("Content script is running.");

document.body.innerHTML += `
<div id="container">
    <h1>This is the content script!</h1>
    <button id="content-btn">Send content script message</button>
</div>
`;

document.querySelector("#content-btn").addEventListener("click", () => {
  chrome.runtime.sendMessage({ text: "Content script" });
});

chrome.runtime.onMessage.addListener((msg) => {
  document.querySelector("#container").innerHTML += `<div>${msg.text}</div>`;
});
