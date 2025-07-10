main();
// 화면 콘솔에 메시지 출력하는 함수
function screenLog(message) {
	const consoleDiv = document.getElementById('console');
	consoleDiv.textContent += message + '\n';
}


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
		screenLog(starts);
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
		screenLog(blank + starts);
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

		screenLog(blank + starts + starts_r);
	}
}

function print_star_center2(count) {
	let starts = '';

	for(i = 1; i <= count; i++) {
		let blank = '';
		for(j = count - i; j > 0; j--) {
			blank += ' ';
		}

		starts +='*';
		if(i != 1) starts +='*';

		screenLog(blank + starts);
	}
}

//left-reverse
function print_star_left_reverse(count) {
	for(i = count; i > 0; i--) {
		let starts = '';
		for(j = 0; j < i; j++) {
			starts +='*';
		}
		screenLog(starts);
	}
}

//right-reverse
function print_star_right_reverse(count) {
	let blank = '';

	for(i = count; i > 0; i--) {
		let starts = '';
		for(j = 0; j < i; j++) {
			starts +='*';
		}
		screenLog(blank + starts);
		blank += ' ';
	}
}

//center
function print_star_center_reverse(count) {
	let blank = '';

	for(i = count; i > 0; i--) {
		let starts = '';
		let starts_r = '';
		
		for(j = 0; j < i; j++) {
			starts +='*';
			if(j !== (i - 1)) starts_r += '*';
		}

		screenLog(blank + starts + starts_r);
		blank += ' ';
	}
}

function print_star_box(count) {
	let starts = '';

	for(i = 0; i < count; i++) {
		starts +='*';
	}

	for(i = 0; i < count; i++) {
		screenLog(starts + (i + 1));
	}
}

function main() {	
	const MAX = 100; 
	let input = prompt("별 갯수를 입력하세요.");
	let count = Number(input);      

	if (validation(count, MAX) == false) {
		screenLog(`Invalid count! Please enter a number between 0 and ${MAX}.`);
		return;
	}

	count = Math.round(count);

	if (count > MAX) {
		count = MAX;
	}

	setTimeout(() => print_star_left(count), 200);
	setTimeout(() => print_star_right(count), 300);
	setTimeout(() => print_star_center(count), 400);
	setTimeout(() => print_star_center_reverse(count), 500);
	setTimeout(() => print_star_left_reverse(count), 600);
	setTimeout(() => print_star_right_reverse(count), 700);
	setTimeout(() => print_star_center2(count), 800);
	setTimeout(() => print_star_box(count), 1000);
}

