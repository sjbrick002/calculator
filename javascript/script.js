function sum(num1, num2) {
    return Math.round((num1 + num2) * 10000000000) / 10000000000;
};
function difference(num1, num2) {
    return Math.round((num1 - num2) * 10000000000) / 10000000000;
};
function product(num1, num2) {
    return Math.round((num1 * num2) * 10000000000) / 10000000000;
};
function quotient(num1, num2) {
    return Math.round((num1 / num2) * 10000000000) / 10000000000;
};

function operate(num1, num2, operation) {
    return operation(num1, num2);
};


let firstNumber = null;
let operator = null;
let secondNumber = null;
let answer;


//display = document.querySelector(".display")
const firstValue = document.querySelector(".first-value");
firstValue.textContent = 0;
const operatorValue = document.querySelector(".operator-value");
const secondValue = document.querySelector(".second-value");

const clearBtn = document.querySelector(".clear");
clearBtn.addEventListener("click", () => {
    firstValue.textContent = "0";
    operatorValue.textContent = null;
    secondValue.textContent = null;
    firstNumber = null;
    secondNumber = null;
    answer = null;
    operator = null;
    hasDecimalOne = false;
    hasDecimalTwo = false;
    firstNegative = false;
    secondNegative = false;
});

const divisionBtn = document.querySelector(".division");
divisionBtn.addEventListener("click", () => {
    if (secondValue.textContent) {
        getAnswer();
        hasDecimalTwo = false;
    };
    if (firstValue.textContent !== "TRY AGAIN!!!") {
        operatorValue.textContent = "/";
    };
    operator = quotient;
});

const multiplicationBtn = document.querySelector(".multiplication");
multiplicationBtn.addEventListener("click", () => {
    if (secondValue.textContent) {
        getAnswer();
        hasDecimalTwo = false;
    };
    operatorValue.textContent = "*";
    operator = product;
});

const subtractionBtn = document.querySelector(".subtraction");
subtractionBtn.addEventListener("click", () => {
    if (secondValue.textContent) {
        getAnswer();
        hasDecimalTwo = false;
    };
    operatorValue.textContent = "-";
    operator = difference;
});

const sevenBtn = document.querySelector(".seven");
sevenBtn.addEventListener("click", () => {
    if (operator === null) {
        if (firstValue.textContent === "0" || firstValue.textContent == answer) {
            firstValue.textContent = 7;
        } else if (firstValue.textContent === "-0") {
            firstValue.textContent = -7;
        }else {
            firstValue.textContent += 7;
        };
    } else {
        secondValue.textContent += 7;
    };
});

const eightBtn = document.querySelector(".eight");
eightBtn.addEventListener("click", () => {
    if (operator === null) {
        if (firstValue.textContent === "0" || firstValue.textContent == answer) {
            firstValue.textContent = 8;
        } else if (firstValue.textContent === "-0") {
            firstValue.textContent = -8;
        } else {
            firstValue.textContent += 8;
        };
    } else {
        secondValue.textContent += 8;
    };
});

const nineBtn = document.querySelector(".nine");
nineBtn.addEventListener("click", () => {
    if (operator === null) {
        if (firstValue.textContent === "0" || firstValue.textContent == answer) {
            firstValue.textContent = 9;
        } else if (firstValue.textContent === "-0") {
            firstValue.textContent = -9;
        } else {
            firstValue.textContent += 9;
        };
    } else {
        secondValue.textContent += 9;
    };
});

const fourBtn = document.querySelector(".four");
fourBtn.addEventListener("click", () => {
    if (operator === null) {
        if (firstValue.textContent === "0" || firstValue.textContent == answer) {
            firstValue.textContent = 4;
        } else if (firstValue.textContent === "-0") {
            firstValue.textContent = -4;
        } else {
            firstValue.textContent += 4;
        };
    } else {
        secondValue.textContent += 4;
    };
});

const fiveBtn = document.querySelector(".five");
fiveBtn.addEventListener("click", () => {
    if (operator === null) {
        if (firstValue.textContent === "0" || firstValue.textContent == answer) {
            firstValue.textContent = 5;
        } else if (firstValue.textContent === "-0") {
            firstValue.textContent = -5;
        } else {
            firstValue.textContent += 5;
        };
    } else {
        secondValue.textContent += 5;
    };
});

const sixBtn = document.querySelector(".six");
sixBtn.addEventListener("click", () => {
    if (operator === null) {
        if (firstValue.textContent === "0" || firstValue.textContent == answer) {
            firstValue.textContent = 6;
        } else if (firstValue.textContent === "-0") {
            firstValue.textContent = -6;
        } else {
            firstValue.textContent += 6;
        };
    } else {
        secondValue.textContent += 6;
    };
});

const additionBtn = document.querySelector(".addition");
additionBtn.addEventListener("click", () => {
    if (secondValue.textContent) {
        getAnswer();
        hasDecimalTwo = false;
    };
    operatorValue.textContent = "+";
    operator = sum;
});


const oneBtn = document.querySelector(".one");
oneBtn.addEventListener("click", () => {
    if (operator === null) {
        if (firstValue.textContent === "0" || firstValue.textContent == answer) {
            firstValue.textContent = 1;
        } else if (firstValue.textContent === "-0") {
            firstValue.textContent = -1;
        } else {
            firstValue.textContent += 1;
        };
    } else {
        secondValue.textContent += 1;
    };
});

const twoBtn = document.querySelector(".two");
twoBtn.addEventListener("click", () => {
    if (operator === null) {
        if (firstValue.textContent === "0" || firstValue.textContent == answer) {
            firstValue.textContent = 2;
        } else if (firstValue.textContent === "-0") {
            firstValue.textContent = -2;
        } else {
            firstValue.textContent += 2;
        };
    } else {
        secondValue.textContent += 2;
    };
});

const threeBtn = document.querySelector(".three");
threeBtn.addEventListener("click", () => {
    if (operator === null) {
        if (firstValue.textContent === "0" || firstValue.textContent == answer) {
            firstValue.textContent = 3;
        } else if (firstValue.textContent === "-0") {
            firstValue.textContent = -3;
        } else {
            firstValue.textContent += 3;
        };
    } else {
        secondValue.textContent += 3;
    };
});

const zeroBtn = document.querySelector(".zero");
zeroBtn.addEventListener("click", () => {
    if (operator === null) {
        if (firstValue.textContent === "0" || firstValue.textContent == answer) {
            firstValue.textContent = 0;
        } else if (firstValue.textContent === "-0") {
            firstValue.textContent = -0;
        } else {
            firstValue.textContent += 0;
        };
    } else {
        secondValue.textContent += 0;
    };
});

let hasDecimalOne = false;
let hasDecimalTwo = false;

const decimalBtn = document.querySelector(".decimal");
decimalBtn.addEventListener("click", () => {
    if (secondValue.textContent && hasDecimalTwo === false) {
        secondValue.textContent += ".";
        hasDecimalTwo = true;
    } else if (hasDecimalOne === false) {
        firstValue.textContent += ".";
        hasDecimalOne = true;
    }
});


let firstNegative = false;
let secondNegative = false;

const negativeBtn = document.querySelector(".negative");
negativeBtn.addEventListener("click", () => {
    if (operatorValue.textContent) {
        if (secondNegative === false) {
            let secondValueArr = secondValue.textContent.split("");
            console.log(secondValueArr);
            secondValueArr.unshift("-");
            console.log(secondValueArr);
            secondValue.textContent = secondValueArr.join("");
            secondNegative = true;
        } else {
            let secondValueArr = secondValue.textContent.split("");
            console.log(secondValueArr);
            secondValueArr.shift();
            console.log(secondValueArr);
            secondValue.textContent = secondValueArr.join("");
            secondNegative = false;
        }
    } else {
        if (firstNegative === false) {
            let firstValueArr = firstValue.textContent.split("");
            firstValueArr.unshift("-");
            firstValue.textContent = firstValueArr.join("");
            firstNegative = true;
        } else {
            let firstValueArr = firstValue.textContent.split("");
            firstValueArr.shift();
            firstValue.textContent = firstValueArr.join("");
            firstNegative = false;
        }
    }
});

operateBtn = document.querySelector(".operate-btn");
operateBtn.addEventListener("click", () => {
    getAnswer();
    hasDecimalOne = false;
    hasDecimalTwo = false;
});

function getAnswer() {
    firstNumber = Number(firstValue.textContent);
    secondNumber = Number(secondValue.textContent);
    if (secondNumber === 0 && operator === quotient) {
        answer = "U MAD LAD";
    } else {
        answer = operate(firstNumber, secondNumber, operator);
    }
    operator = null;

    firstValue.textContent = answer;
    operatorValue.textContent = "";
    secondValue.textContent = "";
};