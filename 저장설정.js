// 동행 측정 저장처 (할 일 28 나). 레벨테스트.html·1분말하기.html이 같이 쓴다.
// ENDPOINT = 구글 시트 「동행 측정」 탭에 붙인 Apps Script 웹 앱 주소(저장/동행측정_AppsScript.gs, 저장/연결순서.md).
// 비어 있으면 보내지 않고 이 기기에만 남긴다(내부 초안 상태).
window.WIN_ENDPOINT = "https://script.google.com/macros/s/AKfycbzDFcx0rIllv85rxrNY6vGKtSnVPSUPSgOASiJiiGLwRFvsC2F0peExLpKpT26qF3pXHw/exec";
// 광고 동의 칸 글자 = 무료 PDF 폼 동의 문구(카피/무료PDF_폼동의문구_최종.md ②·③, 리차드 「바꿔」 11/24) 글자 그대로 재사용(상시 승인 D). 기본 미체크.
window.WIN_AD_TEXT = "(선택) 광고성 정보 수신에 동의합니다 · 1월 2기 48시간 먼저 입장";
window.WIN_AD_NOTE = "동의하신 분께는 1월 2기를 48시간 먼저 열어 드려요. 그 48시간 안에 2기에 들어오시면 첫 30일 동안 오는 답장을 60일까지 받으실 수 있어요. 리차드(위닝 웨이)가 보내는 강의·워크북·기수 모집 등 광고성 정보를 이메일로 받습니다. 언제든 메일 아래 링크로 철회할 수 있어요.";
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
  // 챌린지 링크(?c=1)에서는 보내기 칸을 그리지 않는다(챌린지 동의 범위 밖, 할 일 50).
  if (new URLSearchParams(location.search).get("c") === "1") { host.innerHTML = ""; return; }
  const who = window.winWho();
  host.innerHTML = `<div class="send"><p><b>오늘 기록 남기기</b> · 이메일을 적고 한 번 누르면 오늘 점수가 저장돼요. 다음에 다시 잴 때 오늘 숫자와 나란히 볼 수 있어요.</p>
<input id="wn" placeholder="이름" autocomplete="name"><input id="we" type="email" placeholder="이메일" autocomplete="email">
<label style="display:flex;gap:8px;align-items:flex-start;margin:8px 0;font-size:14px"><input type="checkbox" id="wa" style="width:auto;margin-top:3px"><span>(선택) 90일 뒤 다시 재 보시라고 메일로 한 번 알려 드릴게요.</span></label>
<label style="display:flex;gap:8px;align-items:flex-start;margin:8px 0;font-size:14px"><input type="checkbox" id="wc" style="width:auto;margin-top:3px"><span>${window.WIN_AD_TEXT}</span></label>
<p class="note" style="font-size:12px">${window.WIN_AD_NOTE}</p>
<button id="ws">기록 남기기</button><p class="note" id="wm"></p></div>`;
  const n = host.querySelector("#wn"), e = host.querySelector("#we"), b = host.querySelector("#ws"), m = host.querySelector("#wm"), a = host.querySelector("#wa"), c = host.querySelector("#wc");
  n.value = who.name || ""; e.value = who.email || "";
  b.onclick = async () => {
    const name = n.value.trim(), email = e.value.trim();
    if (!/^[^@\s]+@[^@\s]+\.[^@\s]+$/.test(email)) { m.textContent = "이메일을 확인해 주세요."; return; }
    window.winRemember({ name, email }); b.disabled = true; m.textContent = "보내는 중…";
    const extra = { notify: a.checked === true, ad: c.checked === true, adText: c.checked ? window.WIN_AD_TEXT : "", src: location.pathname.split("/").pop() + location.search };
    const r = await window.winSend(Object.assign({ name, email }, extra, getRec()));
    m.textContent = r === "sent" ? "저장했어요. 이 화면은 닫아도 돼요." : r === "noendpoint" ? "저장처가 아직 연결되지 않은 내부 초안이에요. 이 기기에만 남겼어요." : "보내지 못했어요. 인터넷 연결을 확인하고 다시 눌러 주세요.";
    if (r === "fail") b.disabled = false;
  };
};
