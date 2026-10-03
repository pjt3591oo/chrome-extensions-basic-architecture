console.log("popup/popup.js loaded");

document.getElementById("btnMessage").addEventListener("click", async () => {
  try {
    const response = await chrome.runtime.sendMessage({
      type: "greeting",
      payload: {
        message: "안녕~ 이것은 popup에서 보내는 메시지야~",
      },
      from: "popup", // 메시지를 보낸 곳을 명시적으로 지정
    });

    console.log("Background 응답:", response);
  } catch (error) {
    console.error("메시지 전송 실패:", error);
  }
});