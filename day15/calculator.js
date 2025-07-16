// 변수 선언
const operators = ["+", "-", "*", "/"]; // const 사용
let currentInput = "";                  // let 사용
let firstNumber = null;
let operator = null;
var result = 0;                         // var 사용
let history = [];                      // 계산 기록 배열

// 숫자 입력 함수
function appendNumber(number) {
    if (!/^[0-9]$/.test(number)) {
        showError("유효한 숫자를 입력하세요.");
        return;
    }
    currentInput += number;
    document.getElementById("display").innerText = currentInput;
}

// 연산자 설정 함수
function setOperator(op) {
    if (!operators.includes(op)) {
        showError("유효한 연산자가 아닙니다.");
        return;
    }

    if (currentInput === "") {
        showError("숫자를 먼저 입력하세요.");
        return;
    }

    firstNumber = Number(currentInput);
    if (isNaN(firstNumber)) {
        showError("올바른 숫자를 입력하세요.");
        return;
    }

    operator = op;
    currentInput = "";
    document.getElementById("display").innerText = "0";
}

// 계산 실행 함수
function calculate() {
    if (firstNumber === null || operator === null || currentInput === "") {
        showError("계산할 수 없습니다. 값을 모두 입력하세요.");
        return;
    }

    const secondNumber = Number(currentInput);
    if (isNaN(secondNumber)) {
        showError("올바른 숫자를 입력하세요.");
        return;
    }

    if (operator === "/" && secondNumber === 0) {
        showError("에러: 0으로 나눌 수 없습니다.");
        return;
    }

    switch (operator) {
        case "+":
            result = firstNumber + secondNumber;
            break;
        case "-":
            result = firstNumber - secondNumber;
            break;
        case "*":
            result = firstNumber * secondNumber;
            break;
        case "/":
            result = firstNumber / secondNumber;
            break;
        default:
            showError("지원하지 않는 연산자입니다.");
            return;
    }

    document.getElementById("display").innerText = result;
    document.getElementById("result").innerText = `결과: ${result}`;

    const record = {
        firstNumber,
        operator,
        secondNumber,
        result
    };

    history.push(record);
    console.log(JSON.stringify(history, null, 2));
}

// 결과 창에 오류 표시
function showError(message) {
    document.getElementById("result").innerText = `${message}`;
}

// 입력 초기화 함수
function clearAll() {
    currentInput = "";
    firstNumber = null;
    operator = null;
    result = 0;
    document.getElementById("display").innerText = "0";
    document.getElementById("result").innerText = "";
}

