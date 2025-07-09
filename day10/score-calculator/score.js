let input = prompt("점수를 입력하세요.");          // 문자열 입력
let score = Number(input);                          // 숫자로 변환

// 입력 유효성 검사 (도전 과제)
if (isNaN(score) || score < 0 || score > 100) {
    console.log("Invalid score! Please enter a number between 0 and 100.");
} else {
    // 점수 1점 증가 (단항 산술), 10% 스케일링 (복합 대입)
    score++;                // 단항 산술 연산자
    score--;

    // 5점 보너스 추가 (이항 산술 또는 복합 대입)
    score += 5;

    // 최종 점수 제한 (100 넘을 경우)
    if (score > 105) {
        score = 105;
    }

    // 점수 반올림
    score = Math.round(score);

    const maxScore = 100; // const 사용 예시
    var grade;            // 등급 변수
    let status = score >= 60 ? "Pass" : "Fail";   // 삼항 연산자

    // 등급 부여 (if ~ else if ~ else 사용)
    if (score >= 100) {
        grade = "S";
    } else if (score >= 90) {
        grade = "A";
    } else if (score >= 80) {
        grade = "B";
    } else if (score >= 70) {
        grade = "C";
    } else if (score >= 60) {
        grade = "D";
    } else {
        grade = "F";
    }

    // 메시지 출력 (switch 사용)
    let message = "";
    switch (grade) {
        case "S":
            message = score === 105 ? "Perfect Score!" : "Super!!";
            break;
        case "A":
            message = "Excellent work!";
            break;
        case "B":
            message = "Good job!";
            break;
        case "C":
            message = "Satisfactory performance.";
            break;
        case "D":
            message = "Needs improvement.";
            break;
        case "F":
            message = "Please try harder!";
            break;
        default:
            message = "No message.";
    }

    // 결과 출력
    console.log("Final Score: " + score);
    console.log("Grade: " + grade);
    console.log("Status: " + status);
    console.log("Message: " + message);
}

