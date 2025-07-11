let num1 = 10;
let num2 = 20;

let sum = 10 + 20;
let sub = 20 - 10;
let multi = 10 * 20;
let div = 10 / 2;
let remain = 10 % 3;
let expon = 2 ** 3;

screenLog("sum", sum);
screenLog("sub", sub);
screenLog("multi", multi);
screenLog("div", div);
screenLog("remain", remain);
screenLog("expon", expon);

let sumNum1Num2 = num1 + num2;
let subNum1Num2 = num1 - num2;
let subNum2Num1 = num2 + num1;
screenLog("num1 + num2", sumNum1Num2);
screenLog("num1 - num2", subNum1Num2);
screenLog("num2 - num1", subNum2Num1);

let totalSum = sumNum1Num2 + subNum1Num2 + subNum2Num1;
screenLog("total", totalSum);
