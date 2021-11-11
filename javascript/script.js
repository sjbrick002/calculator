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


let firstNumber = null;
let operator = null;
let secondNumber = null;
let answer;


//display = document.querySelector(".display")
firstValue = document.querySelector(".first-value");
operatorValue = document.querySelector(".operator-value");
secondValue = document.querySelector(".second-value");

clearBtn = document.querySelector(".clear");
clearBtn.addEventListener("click", () => {
    firstValue.textContent = "0";
    operatorValue.textContent = "";
    secondValue.textContent = "";
    firstNumber = null;
    secondNumber = null;
    answer = null;
    operator = null;
});

divisionBtn = document.querySelector(".division");
divisionBtn.addEventListener("click", () => {
    firstNumber = Number(firstValue.textContent);
    if (secondValue.textContent) {

        secondNumber = Number(secondValue.textContent);
        answer = operate(firstNumber, secondNumber, operator);

        firstValue.textContent = answer;
        secondValue.textContent = "";
    };
    operatorValue.textContent = "/";
    operator = quotient;
});

multiplicationBtn = document.querySelector(".multiplication");
multiplicationBtn.addEventListener("click", () => {
    firstNumber = Number(firstValue.textContent);
    if (secondValue.textContent) {

        secondNumber = Number(secondValue.textContent);
        answer = operate(firstNumber, secondNumber, operator);

        firstValue.textContent = answer;
        secondValue.textContent = "";
    };
    operatorValue.textContent = "*";
    operator = product;
});


subtractionBtn = document.querySelector(".subtraction");
subtractionBtn.addEventListener("click", () => {
    firstNumber = Number(firstValue.textContent);
    if (secondValue.textContent) {

        secondNumber = Number(secondValue.textContent);
        answer = operate(firstNumber, secondNumber, operator);

        firstValue.textContent = answer;
        secondValue.textContent = "";
    };
    operatorValue.textContent = "-";
    operator = difference;
});


sevenBtn = document.querySelector(".seven");
sevenBtn.addEventListener("click", () => {
    if (operator === null) {
        if (firstValue.textContent === "0") {
            firstValue.textContent = 7;
        } else {
            firstValue.textContent += 7;
        };
    } else {
        secondValue.textContent += 7;
    };
});

eightBtn = document.querySelector(".eight");
eightBtn.addEventListener("click", () => {
    if (operator === null) {
        if (firstValue.textContent === "0") {
            firstValue.textContent = 8;
        } else {
            firstValue.textContent += 8;
        };
    } else {
        secondValue.textContent += 8;
    };
});

nineBtn = document.querySelector(".nine");
nineBtn.addEventListener("click", () => {
    if (operator === null) {
        if (firstValue.textContent === "0") {
            firstValue.textContent = 9;
        } else {
            firstValue.textContent += 9;
        };
    } else {
        secondValue.textContent += 9;
    };
});

fourBtn = document.querySelector(".four");
fourBtn.addEventListener("click", () => {
    if (operator === null) {
        if (firstValue.textContent === "0") {
            firstValue.textContent = 4;
        } else {
            firstValue.textContent += 4;
        };
    } else {
        secondValue.textContent += 4;
    };
});

fiveBtn = document.querySelector(".five");
fiveBtn.addEventListener("click", () => {
    if (operator === null) {
        if (firstValue.textContent === "0") {
            firstValue.textContent = 5;
        } else {
            firstValue.textContent += 5;
        };
    } else {
        secondValue.textContent += 5;
    };
});

sixBtn = document.querySelector(".six");
sixBtn.addEventListener("click", () => {
    if (operator === null) {
        if (firstValue.textContent === "0") {
            firstValue.textContent = 6;
        } else {
            firstValue.textContent += 6;
        };
    } else {
        secondValue.textContent += 6;
    };
});

additionBtn = document.querySelector(".addition");
additionBtn.addEventListener("click", () => {
    firstNumber = Number(firstValue.textContent);
    if (secondValue.textContent) {

        secondNumber = Number(secondValue.textContent);
        answer = operate(firstNumber, secondNumber, operator);

        firstValue.textContent = answer;
        secondValue.textContent = "";
    };
    operatorValue.textContent = "+";
    operator = sum;
});


oneBtn = document.querySelector(".one");
oneBtn.addEventListener("click", () => {
    if (operator === null) {
        if (firstValue.textContent === "0") {
            firstValue.textContent = 1;
        } else {
            firstValue.textContent += 1;
        };
    } else {
        secondValue.textContent += 1;
    };
});

twoBtn = document.querySelector(".two");
twoBtn.addEventListener("click", () => {
    if (operator === null) {
        if (firstValue.textContent === "0") {
            firstValue.textContent = 2;
        } else {
            firstValue.textContent += 2;
        };
    } else {
        secondValue.textContent += 2;
    };
});

threeBtn = document.querySelector(".three");
threeBtn.addEventListener("click", () => {
    if (operator === null) {
        if (firstValue.textContent === "0") {
            firstValue.textContent = 3;
        } else {
            firstValue.textContent += 3;
        };
    } else {
        secondValue.textContent += 3;
    };
});

zeroBtn = document.querySelector(".zero");
zeroBtn.addEventListener("click", () => {
    if (operator === null) {
        if (firstValue.textContent === "0") {
            firstValue.textContent = 0;
        } else {
            firstValue.textContent += 0;
        };
    } else {
        secondValue.textContent += 0;
    };
});

decimalBtn = document.querySelector(".decimal");
//decimalBtn.addEventListener("click", () => display.textContent += ".");

operateBtn = document.querySelector(".operate-btn");
operateBtn.addEventListener("click", () => {
    firstNumber = Number(firstValue.textContent);
    secondNumber = Number(secondValue.textContent);
    answer = operate(firstNumber, secondNumber, operator);
    operator = null;

    firstValue.textContent = answer;
    operatorValue.textContent = "";
    secondValue.textContent = "";
});