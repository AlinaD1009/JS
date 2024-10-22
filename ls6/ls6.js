// * Результат виконання кожного алгоритму вивести в консоль по принципу: <назва алгоритму>: <масив даних>

// 1. Реалізувати алгоритм: лінійний пошук для наступного масиву ['Київ', 'Херсон', 'Крим', 'Запоріжжя', 'Донецьк', 'Білгород', 'Львів']

const city = ['Київ', 'Херсон', 'Крим', 'Запоріжжя', 'Донецьк', 'Білгород', 'Львів'];

const findedCity = 'Львів';

for (let i = 0; i < city.length; i++){

    if (findedCity === city[i]){
        console.log('лінійний пошук: ', city, '"Львів" має індекс:', i);
    }
};

// 2. Реалізувати алгоритм: бінарний пошук для наступного масиву [1, 3, 5, 6, 9, 10, 20, 30, 32, 33, 44, 50, 55, 56, 60, 100, 110]

const numbers = [1, 3, 5, 6, 9, 10, 20, 30, 32, 33, 44, 50, 55, 56, 60, 100, 110];

const findedN = 100;

let countAction = 0;

let startInd = 0;
let endInd = numbers.length-1;

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
