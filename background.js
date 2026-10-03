console.log("background.js loaded");

// popup 대신 side panel을 열기위한 설정
// openPanelOnActionClick: true로 설정하면 확장 프로그램 아이콘을 클릭할 때 사이드 패널이 열리도록 설정
// manifest.json에서 "side_panel"을 설정해야 함
chrome.sidePanel.setPanelBehavior({
  openPanelOnActionClick: false
});

chrome.runtime.onMessage.addListener((message, sender, sendResponse) => {
  console.log("Received  message:", message);

  if (message.type === "greeting") {
    sendResponse({ farewell: "goodbye" });
  }
});