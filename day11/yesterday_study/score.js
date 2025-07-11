main();

function validation(score) {
	if (isNaN(score) || score < 0 || score > 100) {
		return false;
	} else {
		return true;
	}
}

function get_message(grade, score) {
	// 메시지 V출력 (switch 사용)
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

	return message;
}

function get_grade(score) {
	var grade;            // 등급 변수

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

	return grade;
}

function get_status(score) {
	let status = score >= 60 ? "Pass" : "Fail";   // 삼항 연산자
	return status;
}

function main() {	
	let input = prompt("점수를 입력하세요.");          // 문자열 입력
	let score = Number(input);                          // 숫자로 변환
	const maxScore = 105; // const 사용 예시
	const BONUS = 5;

	// 입력 유효성 검사 (도전 과제)
	if (validation(score) == false) {
		screenLog("Invalid score! Please enter a number between 0 and 100.");
		return;
	}

	// 점수 반올림
	score = Math.round(score);

	//보너스 스코어
	score += BONUS;

	// 최종 점수 제한 (100 넘을 경우)
	if (score > maxScore) {
		score = maxScore;
	}

	let status = get_status(score);
	let grade = get_grade(score);
	let message = get_message(grade, score);

	// 결과 출력
	screenLog("##################");
	screenLog("Final Score: " + score);
	screenLog("Grade: " + grade);
	screenLog("Status: " + status);
	screenLog("Message: " + message);
	screenLog("##################");
}

