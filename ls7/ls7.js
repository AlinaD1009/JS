// 1. Реалізувати алгоритм: сортування бульбашкою для наступного масиву 
console.log('Алгоритм: сортування бульбашкою')

let arr = [1, 2, 5, 4, 10, 3, 13, 11, 100, 8, 15, 20, 19];

let iterations = 0;

for (let i = 0; i < arr.length; i++) {
    for (let j = 0; j < arr.length - 1; j++) {
        iterations++; 
        if (arr[j] > arr[j + 1]) { 
            [arr[j], arr[j + 1]] = [arr[j + 1], arr[j]];
        };
    };
};

console.log("Отсортированный массив:", arr, "Количество итераций:", iterations);

// 2. Вивести всі алгоритми цієї лекції і попередньої в функції, викличте функції

console.log('Функція: сортування бульбашкою алгоритму цієї лекціі')

const test = [1, 2, 5, 4, 10, 3, 13, 11, 100, 8, 15, 20, 19];

let iterations1 = 0;

function bubbleSort(test) {
    for (let i = 0; i < test.length; i++){
        for(let j = 0; j < test.length - 1; j++){
            iterations1++; 
            if(test[j] > test[j + 1]){
                [test[j], test[j + 1]] = [test[j + 1], test[j]];
            };
        };
    };
    console.log("Отсортированный массив:", test, "Количество итераций:", iterations1);
}

bubbleSort(test)

// Функція: сортування бульбашкою лінійного алгоритму попередньої лекціі.

console.log('Функція: сортування бульбашкою лінійного алгоритму попередньої лекціі')

const city = ['Київ', 'Херсон', 'Крим', 'Запоріжжя', 'Донецьк', 'Білгород', 'Львів'];

const findedCity = 'Львів';

function lineFound(){
    for (let i = 0; i < city.length; i++){
        if (findedCity === city[i]){
            console.log('лінійний пошук: ', city, '"Львів" має індекс:', i);
        };
    };
    
}

lineFound()

// Функція: сортування бульбашкою бінарного алгоритму попередньої лекціі.
console.log('Функція: сортування бульбашкою бінарного алгоритму попередньої лекціі')

const numbers = [1, 3, 5, 6, 9, 10, 20, 30, 32, 33, 44, 50, 55, 56, 60, 100, 110];

const findedN = 100;

let countAction = 0;

let startInd = 0;
let endInd = numbers.length-1;

function binFound(){
    while (startInd <= endInd) {
        countAction ++;
        let center = Math.round((startInd + endInd) / 2);
    
        if ( numbers[center] === findedN) { 
            console.log('бінарний пошук: ', numbers, '"100" кількість операцій/дій', countAction);
            break;
        } else if (numbers[center] > findedN) {
            endInd = center - 1;
        } else if (numbers[center] < findedN) {
            startInd = center + 1;
        };  
    };
}

binFound()

// 3. Створіть функцію яка виводить в консоль пояснення того що таке hosting
console.log('Function "What is Hoisting?"')

function whatIsHoisting() {
    console.log('Поднятие или hoisting — это механизм в JavaScript, в котором переменные и объявления функций',
        ' передвигаются вверх своей области видимости перед тем, как код будет выполнен.')
} 

whatIsHoisting()

// 4. Створіть функцію яка виводить в консоль пояснення що таке scope 

console.log('Function "What is Scope?"')

function whatIsScope() {
    console.log('Область видимости или scope - это как "зона доступа" для переменных и функций. Если переменная объявлена глобально, её видно везде. Локально – только внутри функции.')
}

whatIsScope()

// 5. Створіть функцію яка виводить в консоль пояснення чим поганий var

console.log('Function "Why Var is bad?"')

function whyVarIsBad(){
    console.log('Одна из главных проблем с var заключается в том, что у него отсутствует область действия блока . Несмотря на то, что var объявлен внутри блока, он доступен за его пределами. Такое поведение может привести к непреднамеренным последствиям и ошибкам в коде, особенно в больших приложениях.')
}

whyVarIsBad()