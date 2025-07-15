// 상수 선언 (const)
const MAX_TIME = 10;
const MIN_TIME = 1;

// 변수 선언 (var, let)
var timerMessage = "";
let timerCount;
let timerInterval;

// DOM 요소 선택
const timerInput = document.getElementById("timerInput");
const startButton = document.getElementById("startTimer");
const timerDisplay = document.getElementById("timerDisplay");

// 함수 선언문 (매개변수 기본값 포함)
function startTimer(seconds = 10) {
  let count = seconds;
  timerDisplay.classList.remove("error");
  timerDisplay.textContent = `타이머: ${count}초`;

  // 타이머 실행 (setInterval)
  timerInterval = setInterval(() => {
    count--;
    if (count > 0) {
      timerDisplay.textContent = `타이머: ${count}초`;
    } else {
      clearInterval(timerInterval); // 타이머 종료
      timerDisplay.textContent = "타이머 종료!";
      startButton.disabled = false; // 버튼 재활성화
    }
  }, 1000);
}

// 이벤트 리스너 설정
startButton.addEventListener("click", () => {
  // 입력값 가져오기 및 변환
  const input = Number(timerInput.value);

  // 입력 유효성 검사
  if (isNaN(input) || input < MIN_TIME || input > MAX_TIME) {
    timerDisplay.textContent = "유효한 숫자(1-10)를 입력하세요!";
    timerDisplay.classList.add("error");
    return;
  }

  // 타이머 시작 준비
  startButton.disabled = true; // 버튼 비활성화
  timerCount = input;
  startTimer(timerCount); // 타이머 시작
});

