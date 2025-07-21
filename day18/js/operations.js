export default function calculateOperation(firstNumber, secondNumber, operator) {
    console.log(firstNumber +' ' + operator + ' ' + secondNumber +  ' = ');
    switch (operator) {
        case '+': return firstNumber + secondNumber;
        case '-': return firstNumber - secondNumber;
        case '*': return firstNumber * secondNumber;
        case '/':
            if (secondNumber === 0) throw new Error("0으로 나눌 수 없습니다.");
            return firstNumber / secondNumber;
        default:
            throw new Error("유효하지 않은 연산자입니다.");
    }
}
