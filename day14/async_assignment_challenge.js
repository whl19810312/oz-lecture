// async_assignment_challenge.js

// 상수 선언 (const)
const API_URL = "https://jsonplaceholder.typicode.com/posts/";

// 변수 선언 (var, let)
var errorMessage = "유효한 ID(1-100)를 입력하세요!";
let isFetching = false;

// DOM 요소 선택
const inputEl = document.getElementById("postIds");
const buttonEl = document.getElementById("fetchPosts");
const outputEl = document.getElementById("output");

// 화살표 함수: 여러 게시물 데이터를 fetch (ID는 ...rest로 받음)
const fetchMultiplePosts = async (...ids) => {
  const results = {};
  for (const id of ids) {
    try {
      const res = await fetch(`${API_URL}${id}`);
      if (!res.ok) throw new Error("존재하지 않는 게시물입니다.");
      const data = await res.json();
      results[id] = data.title;
    } catch (err) {
      results[id] = `에러: ${err.message}`;
    }
  }
  return results;
};

// 함수 표현식: 메인 로직 실행
const runChallenge = async () => {
  const rawInput = inputEl.value;
  const idArray = rawInput
    .split(",")
    .map((v) => Number(v.trim()))
    .filter((n) => !isNaN(n) && n >= 1 && n <= 100);

  // 유효성 검사 실패 시
  if (idArray.length === 0) {
    outputEl.classList.add("error");
    outputEl.innerHTML = errorMessage;
    return;
  }

  // 초기화
  outputEl.classList.remove("error");
  outputEl.innerHTML = "";
  buttonEl.disabled = true;

  // 데이터 가져오기
  const postResults = await fetchMultiplePosts(...idArray);

  // 결과 렌더링
  for (const id in postResults) {
    const div = document.createElement("div");
    div.className = "post";
    div.textContent = `post${id}: ${postResults[id]}`;
    outputEl.appendChild(div);
  }

  // 버튼 재활성화
  buttonEl.disabled = false;
};

// 이벤트 리스너 등록
buttonEl.addEventListener("click", runChallenge);

