main();

function validation(count, MAX) {
	if (isNaN(count) || count <= 0 || count > MAX) {
		return false;
	} else {
		return true;
	}
}

//left
function print_star_left(count) {
	let starts = '';

	for(i = 0; i < count; i++) {
		starts +='*';
		console.log(starts);
	}
}

//right
function print_star_right(count) {
	let starts = '';

	for(i = 1; i <= count; i++) {
		let blank = '';
		for(j = count - i; j > 0; j--) {
			blank += ' ';
		}
		starts +='*';
		console.log(blank + starts);
	}
}

//center
function print_star_center(count) {
	let starts = '';
	let starts_r = '';

	for(i = 1; i <= count; i++) {
		let blank = '';
		for(j = count - i; j > 0; j--) {
			blank += ' ';
		}
		starts +='*';
		if(i != 1 ) starts_r += '*';

		console.log(blank + starts + starts_r);
	}
}

function print_star_box(count) {
	let starts = '';

	for(i = 0; i < count; i++) {
		starts +='*';
	}

	for(i = 0; i < count; i++) {
		console.log(starts + (i + 1));
	}
}

function main() {	
	console.log('start');
	const MAX = 100; // const 사용 예시
	let input = prompt("별 갯수를 입력하세요.");          // 문자열 입력
	let count = Number(input);                          // 숫자로 변환
	
	// 입력 유효성 검사 (도전 과제)
	if (validation(count, MAX) == false) {
		console.log(`Invalid count! Please enter a number between 0 and ${MAX}.`);
		return;
	}

	// 점수 반올림
	count = Math.round(count);

	// 최종 점수 제한 (100 넘을 경우)
	if (count > MAX) {
		count = MAX;
	}

	print_star_left(count);
	print_star_right(count);
	print_star_center(count);
	print_star_box(count);
}

