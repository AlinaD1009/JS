
//5 прикладів анонімної функції

console.log("5 прикладів анонімної функції");

// 1
let a = (function() {
    console.log(".1 приклад анонімної функціі: Hello world");
})();

// 2
(function(a, b) {
    console.log(".2 приклад анонімної функціі:", "Sum:", a + b,);
})

(3, 4);

// 3
const c = (a, b) => {
    return a * b;
};
console.log(".3 приклад анонімної функціі:" , "Sum:", c(2, 3)); 

// 4
(function() {
    let counter = 0;
    counter++;
    console.log(".4 приклад анонімної функціі:", counter);
})();

// 5
const greetings = function(name) {
    return `Hello, ${name}!`;
};
console.log(".5 приклад анонімної функціі:", greetings("Aline"));


//5 прикладів самовикликаючої функції

console.log("5 прикладів самовикликаючої функції");

// 1
(function() {
    console.log(".1 приклад самовикликаючої функціі: 123");
})();

// 2
(function() {
    const num1 = 5;
    const num2 = 10;
    const sum = num1 + num2;
    console.log(".2 приклад самовикликаючої функціі: Сумма: ", sum);
})();

// 3
(function() {
    const num1 = 5;
    const num2 = 10;
    console.log(".3 приклад самовикликаючої функціі: Сумма: ", num1 * num2); 
})();

// 4
(function() {
    const a = 29;
    console.log(".4 приклад самовикликаючої функціі: Сумма: ", a % 2); 
})();

// 5
(function whichNumIsBigger() {
    const num1 = 12;
    const num2 = 20;
    const result = num1 > num2 ? num1 : num2;
    console.log(".5 приклад самовикликаючої функціі: >?: " + result);
})();

// Повторіть колбек функцію bubbleSort з лекції 

console.log("Колбек функція bubbleSort з лекції");

function babbleSort(array, callback){
    let act = 0;

    for(let i = 0; i < array.length; i++){
        for(let j = 0; j < array.length; j++){
            act++;

            const compareResult = callback(array [j], array [j + 1]);

            if(compareResult){
                let temp = array [j];
                array [j] = array [j + 1];
                array [j + 1] = temp;
            }
        }
    }

    return array;

}

let arr = [3, 8, 1, 10, -2, 0, 15, 4];

const arrSort3 = babbleSort(arr, (a, b) => a > b);
console.log(arrSort3);

// function compareFunctionLeft (a,b){
//     return a > b;
// }

// function compareFunctionRight (a,b){
//     return a < b;
// }

// const arrSort = babbleSort(arr, compareFunctionLeft);
// console.log(arrSort);

// const arrSort2 = babbleSort(arr, compareFunctionRight);
// console.log(arrSort2);

//  Калькурятор.
//   Створіть функцію calc(num1, num2, action), яка приймає 2 числа з prompt
//   та знак по якому потірбно порахувати приклад. Мусять бути наступні дії: (+, -, /, *)
//   Результат повернути (return) і вивести

//   На основі цього завдання зробіть 3 приклади:
//  - Зробіть калькулятор застосовуючи підхід Function in function (1-ий приклад Function in function в лекції)
console.log("Kалькулятор застосовуючи підхід 1-ий приклад Function in function");

function calc(a, b, act){
    function add(){return a + b};
    function sub(){return a - b};
    function mul(){return a * b};
    function div(){return a / b};

    switch (act){
        case '+': return add;
        case '-': return sub;
        case '*': return mul;
        case '/': return div;
    }

}

let number1 = +prompt('Введіть число');
let operation = prompt('Введіть дію (+, -, *, /):');
let number2 = +prompt('Введіть інше число');

let output = calc(number1, number2, operation);
console.log(output());

//  - Зробіть калькулятор застосовуючи підхід Function in function (2-ий приклад Function in function в лекції)

console.log("Kалькулятор застосовуючи підхід 2-ий приклад Function in function");

function add(a, b){return a + b};
function sub(a, b){return a - b};
function mul(a, b){return a * b};
function div(a, b){return a / b};

function calc1(a, b, act){

    switch (act){
        case '+': return add(a, b);
        case '-': return sub(a, b);
        case '*': return mul(a, b);
        case '/': return div(a, b);
    }

}


let out = calc1(number1, number2, operation);
console.log(out);


//  - Зробіть калькулятор використовуючи функцію зворотнього виклику (callback function)

console.log("Kалькулятор використовуючи функцію зворотнього виклику(callback function)");

function calculator(a, b, callback) {
    return callback(a, b);
}

function add(a, b){return a + b};
function sub(a, b){return a - b};
function mul(a, b){return a * b};
function div(a, b){return a / b};

let num1 = 4;
let num2 = 5;

let result = calculator(num1, num2, add);
console.log(result);





