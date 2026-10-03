console.log("devtools/panel.js loaded");

document.getElementById("btnMessage").addEventListener("click", async () => {
  try {
    const response = await chrome.runtime.sendMessage({
      type: "greeting",
      payload: {
        message: "안녕~ 이것은 devtools panel에서 보내는 메시지야~",
      },
      from: "devtools", // 메시지를 보낸 곳을 명시적으로 지정
    });

    console.log("Background 응답:", response);
  } catch (error) {
    console.error("메시지 전송 실패:", error);
  }
});