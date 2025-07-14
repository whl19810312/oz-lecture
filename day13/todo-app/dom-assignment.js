// DOM 요소 선택
const taskInput = document.getElementById('taskInput');
const addButton = document.getElementById('addButton');
const taskList = document.getElementById('taskList');
const clearButton = document.getElementById('clearButton');

// 할 일 추가 함수
function addTask() {
    const taskText = taskInput.value.trim(); // 공백 제거한 입력값

    // 입력값이 비어있는 경우 경고
    if (taskText === '') {
        alert('할 일을 입력해주세요!');
        return;
    }

    // <li> 요소 생성
    const li = document.createElement('li');
    li.className = 'task-item';

    // <span>에 할 일 텍스트 넣기
    const span = document.createElement('span');
    span.textContent = taskText;

    // 클릭하면 완료 상태 토글
    span.addEventListener('click', function () {
        span.classList.toggle('completed');
    });

    // 삭제 버튼 만들기
    const deleteButton = document.createElement('button');
    deleteButton.textContent = '삭제';
    deleteButton.className = 'delete-button';

    // 삭제 버튼 클릭 시 항목 삭제
    deleteButton.addEventListener('click', function () {
        taskList.removeChild(li);
    });

    // <li>에 <span>과 삭제 버튼 추가
    li.appendChild(span);
    li.appendChild(deleteButton);

    // <ul>에 <li> 추가
    taskList.appendChild(li);

    // 입력창 초기화
    taskInput.value = '';
}

// 모든 할 일 삭제 함수
function clearAllTasks() {
    taskList.innerHTML = '';
}

// 추가 버튼 클릭 이벤트
addButton.addEventListener('click', addTask);

// Enter 키 입력 처리
taskInput.addEventListener('keypress', function (event) {
    if (event.key === 'Enter') {
        addTask();
    }
});

// 전체 삭제 버튼 이벤트
clearButton.addEventListener('click', clearAllTasks);

