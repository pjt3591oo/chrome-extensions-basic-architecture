console.log('content.js loaded');


// most bottom innerHTML insert <h1>Content Script</h1>
const h1 = document.createElement('h1');
h1.textContent = 'Content Script By content.js 여기를 누르면 background.js로 메시지를 보내고 응답을 받습니다.';
document.body.appendChild(h1);

h1.addEventListener("click", async () => {
  try {
    const response = await chrome.runtime.sendMessage({
      type: "greeting",
      payload: {
        message: "안녕~ 이것은 content script에서 보내는 메시지야~",
      },
      from: "content", // 메시지를 보낸 곳을 명시적으로 지정
    });

    console.log("Background 응답:", response);
  } catch (error) {
    console.error("메시지 전송 실패:", error);
  }
});