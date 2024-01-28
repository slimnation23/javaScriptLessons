// 1 project

let num = 42;
let firstName = "Oleksandr";
const isProgrammer = true;

const resultElement = document.querySelector("#result");
const input1 = document.querySelector("#input1");
const input2 = document.querySelector("#input2");
const submitBtn = document.querySelector("#submit");
const plusBtn = document.querySelector("#plus");
const minusBtn = document.querySelector("#minus");
let action = "+";

plusBtn.onclick = function () {
  action = "+";
};

minusBtn.onclick = function () {
  action = "-";
};

function printResult(result) {
  if (result < 0) {
    resultElement.style.color = "red";
  } else {
    resultElement.style.color = "green";
  }
  resultElement.textContent = result;
}

function computeNumbersWithAction(inp1, inp2, actionSymbol) {
  const num1 = Number(inp1.value);
  const num2 = Number(inp2.value);

  return actionSymbol == "+" ? num1 + num2 : num1 - num2;
}

submitBtn.onclick = function () {
  const result = computeNumbersWithAction(input1, input2, action);
  printResult(result);
};

// 2 project

function Calculator() {
  (this.read = function () {
    this.a = +prompt("a?", "");
    this.b = +prompt("b?", "");
  }),
    (this.sum = function () {
      return this.a + this.b;
    }),
    (this.mul = function () {
      return this.a * this.b;
    });
}

function Accumulator(startingValue) {
  this.value = startingValue;
  this.read = function() {
    this.value += +prompt('Скільки додати?', '0')
  }
}

let accumulator = new Accumulator(0);

