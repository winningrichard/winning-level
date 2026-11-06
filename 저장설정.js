// 동행 측정 저장처 (할 일 28 나). 레벨테스트.html·1분말하기.html이 같이 쓴다.
// ENDPOINT = 구글 시트 「동행 측정」 탭에 붙인 Apps Script 웹 앱 주소(저장/동행측정_AppsScript.gs, 저장/연결순서.md).
// 비어 있으면 보내지 않고 이 기기에만 남긴다(내부 초안 상태).
window.WIN_ENDPOINT = "";
window.winWho = function () { try { return JSON.parse(localStorage.getItem("winning_who") || "{}"); } catch (e) { return {}; } };
window.winRemember = function (who) { try { localStorage.setItem("winning_who", JSON.stringify(who)); } catch (e) {} };
// rec: {kind:"듣기"|"말하기", name, email, ...}. 결과: "sent" | "noendpoint" | "fail"
window.winSend = async function (rec) {
  rec.sentAt = new Date().toISOString();
  rec.device = /iPhone|iPad|Android/i.test(navigator.userAgent) ? "휴대폰" : "컴퓨터";
  try { const k = "winning_outbox", h = JSON.parse(localStorage.getItem(k) || "[]"); h.push(rec); localStorage.setItem(k, JSON.stringify(h.slice(-50))); } catch (e) {}
  if (!window.WIN_ENDPOINT) return "noendpoint";
  try {
    // Apps Script 웹 앱은 CORS 응답을 못 읽으므로 no-cors + text/plain으로 보낸다(응답 확인 없음).
    await fetch(window.WIN_ENDPOINT, { method: "POST", mode: "no-cors", headers: { "Content-Type": "text/plain;charset=utf-8" }, body: JSON.stringify(rec) });
    return "sent";
  } catch (e) { return "fail"; }
};
// 결과 화면에 붙이는 「한 번에 보내기」 칸. host에 그리고, getRec()이 보낼 값을 준다.
window.winSendBox = function (host, getRec) {
  const who = window.winWho();
  host.innerHTML = `<div class="send"><p><b>기록 보내기</b> · 이름과 이메일을 적고 한 번 누르면 끝나요. 다음에 잴 때 오늘 숫자와 비교하는 데만 써요.</p>
<input id="wn" placeholder="이름" autocomplete="name"><input id="we" type="email" placeholder="이메일(동행에 등록한 주소)" autocomplete="email">
<button id="ws">보내기</button><p class="note" id="wm"></p></div>`;
  const n = host.querySelector("#wn"), e = host.querySelector("#we"), b = host.querySelector("#ws"), m = host.querySelector("#wm");
  n.value = who.name || ""; e.value = who.email || "";
  b.onclick = async () => {
    const name = n.value.trim(), email = e.value.trim();
    if (!name || !/^[^@\s]+@[^@\s]+\.[^@\s]+$/.test(email)) { m.textContent = "이름과 이메일을 확인해 주세요."; return; }
    window.winRemember({ name, email }); b.disabled = true; m.textContent = "보내는 중…";
    const r = await window.winSend(Object.assign({ name, email }, getRec()));
    m.textContent = r === "sent" ? "보냈어요. 이 화면은 닫아도 돼요." : r === "noendpoint" ? "저장처가 아직 연결되지 않은 내부 초안이에요. 이 기기에만 남겼어요." : "보내지 못했어요. 인터넷 연결을 확인하고 다시 눌러 주세요.";
    if (r === "fail") b.disabled = false;
  };
};
