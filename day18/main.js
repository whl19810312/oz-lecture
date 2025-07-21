<!DOCTYPE html>
<html lang="ko">
<head>
  <meta charset="UTF-8" />
  <meta name="viewport" content="width=device-width, initial-scale=1.0" />
  <title>ES 모듈 계산기</title>
  <link rel="stylesheet" href="styles.css" />
</head>
<body>
  <div class="container">
    <h1>계산기 (ES Modules)</h1>
    <div id="display" class="display">0</div>
    <div class="buttons">
      <button onclick="append('1')">1</button>
      <button onclick="append('2')">2</button>
      <button onclick="append('3')">3</button>
      <button onclick="operator('+')">+</button>

      <button onclick="append('4')">4</button>
      <button onclick="append('5')">5</button>
      <button onclick="append('6')">6</button>
      <button onclick="operator('-')">-</button>

      <button onclick="append('7')">7</button>
      <button onclick="append('8')">8</button>
      <button onclick="append('9')">9</button>
      <button onclick="operator('*')">*</button>

      <button onclick="append('0')">0</button>
      <button onclick="backspace()">←</button>
      <button onclick="calculate()">=</button>
      <button onclick="operator('/')">/</button>
    </div>
    <div id="result" class="alert d-none"></div>
  </div>

  <script type="module">
    import calculate, {
      appendNumber,
      setOperator,
      subDisplay,
      resetDisplay,
      VALID_NUMBERS,
      VALID_OPERATORS
    } from './js/index.js';

    let currentInput = "";
    let firstNumber = null;
    let operatorVal = null;

    resetDisplay();

    window.append = (val) => {
      try {
        currentInput = appendNumber(val, currentInput);
      } catch (e) {
        showError(e.message);
      }
    };

    window.operator = (op) => {
      try {
        operatorVal = setOperator(op, currentInput);
        firstNumber = Number(currentInput);
        currentInput = resetDisplay();
      } catch (e) {
        showError(e.message);
      }
    };

    window.calculate = () => {
      import('./js/index.js').then((mod) => mod.default());
    };

    window.backspace = () => {
      currentInput = subDisplay();
    };
  </script>
</body>
</html>

