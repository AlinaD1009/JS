// Bсі методи масивів із лекції

// Пошук
const array = [1, 5, true, 'hello', false, null, 'iiii', 54, 1, 1, null];

// find

let result1 = array.find((element, index, arr) => {
    return element === 'hello';                                    // якщо нічого не знаходить повертає undefined 
})

console.log("1.find: ", result1, array);

// findIndex

let result2 = array.findIndex((element, index, arr) => {
    return element === false;                                 // якщо нічого не знаходить повертає -1
})

console.log("2.findIndex: ", result2);

// indexOf

let result3 = array.indexOf(1);                                // шукає по порядку, як лінійний пошук
console.log("3.indexOf: ", result3);                           // якщо нічого не знаходить повертає -1

// lastIndexOf
let result4 = array.lastIndexOf(1);                            // шукає з останього елементу
console.log("3.indexOf: ", result4);  

// Сортування

let array2 = [1, 2, 5, 4, 10, 3, 13, 11, 100, 8, 15, 20, 19];

// sort

array2.sort((a, b) => a - b)                                   // b - a з більшого до меньшого
console.log("4.sort: ", array2);


let fruits = ['orange', 'apple', 'banana', 'pineapple']       
fruits.sort()                                                  // якщо це цифри, то порядок буде 1, 222, 3, 44, 5
console.log("4.1 sort: ", fruits);


// Фільтрация

// filter
let result5 = array2.filter((element, index, arr) => element > 10) 
console.log("5.filter: ", result5)

// some
let result6 = array2.some((element, index, arr) => element < 2)  //якщо хочаб якийсь елемент підходить під умову
console.log("6.some: ", result6)                                             //true

// every
let result7 = array2.every(element => element < 2)               // якщо всі елементи відповідают умові
console.log("7.every: ",result7)                                             // false

let result8 = array2.includes(100)                               //знаходить елемент, якщо він є - true
console.log("8.includes: ", result8)   

// Розкриття рівнів

let array3 = [1, 3, ['a', 'b', 'c',[true, false,[null,['a', 'b', 'c',[1,2,3]]]]],123, ]

let result9 = array3.flat(Infinity)                              
console.log("9.flat: ", result9);

// Склеювання масивів

let result10 = array3.concat(['hello'])
console.log("10.concat: ", result10);

// Приведення до стрічки

let result11 = array2.toString()
console.log("11.toString: ", result11);


// map  (замінює елемент на новий)

let result12 = array.map((element, index, arr) => {
    if (element === 'iiii') {
        return 'BLACK';
    } else return element;
})

console.log("12.map: ", result12, array);
