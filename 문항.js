// 듣기 문항 원본 하나. A = v1(첫날), B·C·D = 재시험판(할 일 28, 2026-11-04). 같은 칸 번호 = 같은 문형·길이대, 판끼리 문장 겹침 0.
const FORMS={
"A": [
{
"say": "Can I get a glass of water, please?",
"q": "이 사람이 부탁한 것은?",
"a": [
"계산서",
"물 한 잔",
"메뉴판",
"커피 한 잔"
],
"c": 1
},
{
"say": "My sister lives near the station.",
"q": "언니나 여동생이 사는 곳은?",
"a": [
"역 근처",
"학교 근처",
"시골",
"회사 근처"
],
"c": 0
},
{
"say": "We didn't have time for lunch today.",
"q": "오늘 무슨 일이 있었나요?",
"a": [
"점심이 맛없었다",
"점심을 먹으러 나갔다",
"점심 먹을 시간이 없었다",
"점심을 사 줬다"
],
"c": 2
},
{
"say": "The store opens at nine, but it closes early on Sundays.",
"q": "일요일의 가게는?",
"a": [
"문을 열지 않는다",
"9시에 닫는다",
"평소보다 늦게 연다",
"평소보다 일찍 닫는다"
],
"c": 3
},
{
"say": "Could you tell me where the nearest bank is?",
"q": "이 사람이 묻는 것은?",
"a": [
"가장 가까운 은행의 위치",
"은행 여는 시간",
"은행까지 걸리는 시간",
"환전하는 방법"
],
"c": 0
},
{
"say": "I was going to call you last night, but I fell asleep on the sofa.",
"q": "어젯밤 전화하지 못한 까닭은?",
"a": [
"휴대폰이 고장 나서",
"소파에서 잠들어서",
"번호를 잊어서",
"일이 늦게 끝나서"
],
"c": 1
},
{
"say": "We were supposed to leave at eight, but the train got cancelled, so now we're taking the bus instead.",
"q": "처음 계획과 달라진 것은?",
"a": [
"8시보다 일찍 떠난다",
"기차를 다시 예약했다",
"기차 대신 버스로 간다",
"출발을 내일로 미뤘다"
],
"c": 2
},
{
"say": "If it rains tomorrow, we'll probably stay home and watch a movie.",
"q": "내일 비가 오면 어떻게 하나요?",
"a": [
"극장에 간다",
"약속을 다음 주로 옮긴다",
"그래도 밖에 나간다",
"아마 집에서 영화를 본다"
],
"c": 3
},
{
"say": "She would have missed the flight if her friend hadn't given her a ride.",
"q": "실제로 일어난 일은?",
"a": [
"친구가 태워 줘서 비행기를 탔다",
"비행기를 놓쳤다",
"친구가 비행기를 놓쳤다",
"친구를 태워 줬다"
],
"c": 0
},
{
"say": "I wouldn't say the book was bad. It just took a while to get into, and I'm glad I didn't give up on it.",
"q": "이 사람의 생각에 가장 가까운 것은?",
"a": [
"재미없어서 중간에 그만뒀다",
"처음부터 끝까지 재미있었다",
"처음엔 잘 안 읽혔지만 포기하지 않아 다행이다",
"다른 책을 읽을 걸 그랬다"
],
"c": 2
}
],
"B": [
{
"say": "Could you open the window, please?",
"q": "이 사람이 부탁한 것은?",
"a": [
"문 닫기",
"불 켜기",
"창문 열기",
"에어컨 끄기"
],
"c": 2
},
{
"say": "My brother works at a hospital.",
"q": "남자 형제가 일하는 곳은?",
"a": [
"은행",
"병원",
"학교",
"호텔"
],
"c": 1
},
{
"say": "I couldn't sleep well last night.",
"q": "어젯밤 어땠나요?",
"a": [
"늦게까지 일했다",
"일찍 잠들었다",
"친구를 만났다",
"잠을 잘 못 잤다"
],
"c": 3
},
{
"say": "The museum is free on weekdays, but you have to pay on weekends.",
"q": "주말의 박물관은?",
"a": [
"돈을 내야 한다",
"문을 닫는다",
"무료다",
"일찍 닫는다"
],
"c": 0
},
{
"say": "Do you know what time the last bus leaves?",
"q": "이 사람이 묻는 것은?",
"a": [
"버스 요금",
"막차 출발 시간",
"버스 타는 곳",
"첫차 시간"
],
"c": 1
},
{
"say": "I meant to buy some milk on the way home, but I completely forgot.",
"q": "무슨 일이 있었나요?",
"a": [
"우유를 사 왔다",
"가게가 닫혀 있었다",
"우유가 다 팔렸다",
"우유 사는 걸 깜빡했다"
],
"c": 3
},
{
"say": "We were planning to eat out tonight, but my husband has to work late, so I'm just going to cook something simple.",
"q": "오늘 저녁은 어떻게 하나요?",
"a": [
"집에서 간단히 요리한다",
"남편과 외식한다",
"남편이 요리한다",
"저녁을 건너뛴다"
],
"c": 0
},
{
"say": "If the weather is nice on Saturday, we'll probably go hiking.",
"q": "토요일에 날씨가 좋으면?",
"a": [
"집에서 쉰다",
"바다에 간다",
"아마 등산을 간다",
"약속을 미룬다"
],
"c": 2
},
{
"say": "He would have been late for the interview if he hadn't left home early.",
"q": "실제로 일어난 일은?",
"a": [
"면접에 늦었다",
"일찍 나와서 늦지 않았다",
"면접이 취소됐다",
"집에 늦게 들어갔다"
],
"c": 1
},
{
"say": "I can't say I loved the movie, but it wasn't a waste of time either. The ending actually made me think.",
"q": "이 사람의 생각에 가장 가까운 것은?",
"a": [
"시간 낭비였다",
"너무 좋아서 또 보고 싶다",
"결말이 실망스러웠다",
"아주 좋진 않았지만 결말이 생각할 거리를 줬다"
],
"c": 3
}
],
"C": [
{
"say": "Can you pass me the salt, please?",
"q": "이 사람이 부탁한 것은?",
"a": [
"소금",
"후추",
"물",
"휴지"
],
"c": 0
},
{
"say": "Our office is next to a big park.",
"q": "사무실이 있는 곳은?",
"a": [
"역 앞",
"병원 근처",
"큰 공원 옆",
"강가"
],
"c": 2
},
{
"say": "She didn't come to class yesterday.",
"q": "어제 무슨 일이 있었나요?",
"a": [
"그녀가 수업에 늦었다",
"그녀가 수업에 오지 않았다",
"그녀가 수업을 했다",
"수업이 취소됐다"
],
"c": 1
},
{
"say": "The restaurant is usually quiet, but it gets very busy on Friday nights.",
"q": "금요일 밤의 식당은?",
"a": [
"조용하다",
"문을 닫는다",
"일찍 닫는다",
"아주 붐빈다"
],
"c": 3
},
{
"say": "Can you tell me how long it takes to get to the airport?",
"q": "이 사람이 묻는 것은?",
"a": [
"공항 가는 방법",
"비행기 출발 시간",
"공항까지 걸리는 시간",
"공항버스 요금"
],
"c": 2
},
{
"say": "I was about to leave the house when it started to rain heavily.",
"q": "무슨 일이 있었나요?",
"a": [
"나가려던 참에 비가 많이 오기 시작했다",
"집에 도착하자 비가 왔다",
"비 때문에 늦게 일어났다",
"우산을 잃어버렸다"
],
"c": 0
},
{
"say": "The meeting was supposed to be on Monday, but the manager is sick, so it's been moved to Wednesday afternoon.",
"q": "처음 계획과 달라진 것은?",
"a": [
"회의가 월요일 오전으로 당겨졌다",
"회의가 취소됐다",
"매니저가 바뀌었다",
"회의가 수요일 오후로 옮겨졌다"
],
"c": 3
},
{
"say": "If you finish your work early, you can leave at four today.",
"q": "일을 일찍 끝내면?",
"a": [
"내일 쉰다",
"오늘 4시에 가도 된다",
"일을 더 받는다",
"4시에 회의한다"
],
"c": 1
},
{
"say": "I wouldn't have found this place if you hadn't sent me the address.",
"q": "실제로 일어난 일은?",
"a": [
"길을 잃었다",
"이곳을 못 찾았다",
"주소를 받아서 찾아왔다",
"상대에게 주소를 보냈다"
],
"c": 2
},
{
"say": "It's not that I don't like my job. I just wish I had more time for my family.",
"q": "이 사람의 생각에 가장 가까운 것은?",
"a": [
"일은 괜찮지만 가족과 보낼 시간이 더 있었으면 한다",
"일이 싫어서 그만두고 싶다",
"가족이 내 일을 싫어한다",
"일이 너무 적다"
],
"c": 0
}
],
"D": [
{
"say": "Could I see the menu, please?",
"q": "이 사람이 부탁한 것은?",
"a": [
"계산서",
"물 한 잔",
"영수증",
"메뉴판"
],
"c": 3
},
{
"say": "My parents live in a small town by the sea.",
"q": "부모님이 사는 곳은?",
"a": [
"바닷가 작은 마을",
"큰 도시",
"산골 마을",
"역 근처 아파트"
],
"c": 0
},
{
"say": "I left my umbrella at the office.",
"q": "무슨 일이 있었나요?",
"a": [
"우산을 새로 샀다",
"우산이 망가졌다",
"우산을 사무실에 두고 왔다",
"우산을 빌렸다"
],
"c": 2
},
{
"say": "The library is open until ten, but the café inside closes at six.",
"q": "도서관 안 카페는?",
"a": [
"10시에 닫는다",
"6시에 닫는다",
"문을 열지 않는다",
"6시에 연다"
],
"c": 1
},
{
"say": "Do you know where I can buy a phone charger around here?",
"q": "이 사람이 묻는 것은?",
"a": [
"휴대폰 고치는 곳",
"충전기 값",
"와이파이 비밀번호",
"충전기를 살 수 있는 곳"
],
"c": 3
},
{
"say": "I wanted to reply to your email, but my computer suddenly stopped working.",
"q": "답장하지 못한 까닭은?",
"a": [
"메일을 못 봐서",
"너무 바빠서",
"컴퓨터가 갑자기 멈춰서",
"주소가 틀려서"
],
"c": 2
},
{
"say": "We had planned to visit my aunt this weekend, but she caught a cold, so we're going next month instead.",
"q": "처음 계획과 달라진 것은?",
"a": [
"이번 주말에 간다",
"다음 달에 가기로 했다",
"이모가 우리 집에 온다",
"방문을 아예 취소했다"
],
"c": 1
},
{
"say": "If the store doesn't have my size, I'll probably order it online.",
"q": "맞는 치수가 없으면?",
"a": [
"아마 온라인으로 주문한다",
"다른 색을 산다",
"다음에 다시 온다",
"사지 않는다"
],
"c": 0
},
{
"say": "We would have won the game if our best player hadn't been injured.",
"q": "실제로 일어난 일은?",
"a": [
"경기에서 이겼다",
"선수가 다치지 않았다",
"경기가 취소됐다",
"가장 잘하는 선수가 다쳐서 졌다"
],
"c": 3
},
{
"say": "I'm not saying the trip was a mistake. It was just more tiring than I expected, and next time I'd plan fewer stops.",
"q": "이 사람의 생각에 가장 가까운 것은?",
"a": [
"여행은 실수였다",
"다시는 여행을 안 간다",
"생각보다 피곤해서 다음엔 일정을 줄이겠다",
"생각보다 편했다"
],
"c": 2
}
]
};
const LIS=FORMS.A;
