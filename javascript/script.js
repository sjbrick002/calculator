function sum(num1, num2) {
    return num1 + num2;
};
function difference(num1, num2) {
    return num1 - num2;
};
function product(num1, num2) {
    return num1 * num2;
};
function quotient(num1, num2) {
    return num1 / num2;
};

function operate(num1, num2, operation) {
    return operation(num1, num2);
};


let firstNumber;
let operator;
let secondNumber;
let answer;


display = document.querySelector(".display")

clearBtn = document.querySelector(".clear");
clearBtn.addEventListener("click", () => {
    display.textContent = "";
    firstNumber = null;
    secondNumber = null;
    answer = null;
    operator = null;
});

divisionBtn = document.querySelector(".division");
divisionBtn.addEventListener("click", () => {
    firstNumber = Number(display.textContent);
    console.log(firstNumber);
    display.textContent = "";
    operator = quotient;
});

multiplicationBtn = document.querySelector(".multiplication");
multiplicationBtn.addEventListener("click", () => {
    firstNumber = Number(display.textContent);
    console.log(firstNumber);
    display.textContent = "";
    operator = product;
});

subtractionBtn = document.querySelector(".subtraction");
subtractionBtn.addEventListener("click", () => {
    firstNumber = Number(display.textContent);
    console.log(firstNumber);
    display.textContent = "";
    operator = difference;
});

sevenBtn = document.querySelector(".seven");
sevenBtn.addEventListener("click", () => display.textContent += 7);

eightBtn = document.querySelector(".eight");
eightBtn.addEventListener("click", () => display.textContent += 8);

nineBtn = document.querySelector(".nine");
nineBtn.addEventListener("click", () => display.textContent += 9);

fourBtn = document.querySelector(".four");
fourBtn.addEventListener("click", () => display.textContent += 4);

fiveBtn = document.querySelector(".five");
fiveBtn.addEventListener("click", () => display.textContent += 5);

sixBtn = document.querySelector(".six");
sixBtn.addEventListener("click", () => display.textContent += 6);

additionBtn = document.querySelector(".addition");
additionBtn.addEventListener("click", () => {
    firstNumber = Number(display.textContent);
    console.log(firstNumber);
    display.textContent = "";
    operator = sum;
});

oneBtn = document.querySelector(".one");
oneBtn.addEventListener("click", () => display.textContent += 1);

twoBtn = document.querySelector(".two");
twoBtn.addEventListener("click", () => display.textContent += 2);

threeBtn = document.querySelector(".three");
threeBtn.addEventListener("click", () => display.textContent += 3);

zeroBtn = document.querySelector(".zero");
zeroBtn.addEventListener("click", () => display.textContent += 0);

decimalBtn = document.querySelector(".decimal");
decimalBtn.addEventListener("click", () => display.textContent += ".");

operateBtn = document.querySelector(".operate-btn");
operateBtn.addEventListener("click", () => {
    secondNumber = Number(display.textContent);
    console.log(secondNumber);
    answer = operate(firstNumber, secondNumber, operator);
    console.log(answer);
    display.textContent = answer;
});