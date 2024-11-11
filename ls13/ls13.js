// Пропишіть приклади використання всі допоміжних функцій починаючи з Math і закінчуючи Object

// Math.floor - округляє до меньшого
let a = Math.floor(9.99); 
console.log('Math.floor: ', a);

// Math.ceil - округляє до більшого
let a1 = Math.ceil(9.1);
console.log('Math.ceil: ', a1);

//Math.round - округляє до ближчого цілого 
let a2 = Math.round(Math.sqrt(3));
console.log('Math.round: ', a2);

// Math.random - повертає рандомне число до * 
let a3 = Math.round(Math.random()*1000);
console.log('Math.random: ', a3);

// Math.pow - возводить число в задану ступінь
let a4 = Math.pow(2, 3);
console.log('Math.pow: ', a4);


// Методи масивів

let arr = [1, 5, true, false, 123, "hello", 111, "sumer", "orange"];
console.log(arr);

// push - додає в кінець масиву
arr.push('Hi!');
console.log('push: ', arr);

// unshift - додае в початок масиву
arr.unshift('Hi!');
console.log('unshift: ', arr);

//  pop - усуває з кінця  масиву
arr.pop();
console.log('pop: ', arr);

// shift - усуває з початку масиву
arr.shift();
console.log('shift: ', arr);

// slice - вирізає елементи по індексу() в новий масив
let newArr = arr.slice(1,6)                                // з якого індексу починаемо відалення, скільки елементів
console.log('slice: ',newArr);

// splice - видаляє елементи та/або додає нові
arr.splice(1, 5, "Hi!")                     // з якого індексу починаемо відалення, скільки елементів(можливо 0), елементи які додаємо
console.log('splice: ',arr);

// join - поєднує всі елементи масиву в рядок
let a33 = arr.join()
console.log('join: ',a33);

// split - поєднує всі елементи в масив 
let a44 = a33.split()
console.log('split: ',a44);

const array = [1, 5, true, 'hello', false, null, 'iiii', 54, 1, 1, null];
console.log(array);

// find - пошук, якщо нічого не знаходить повертає undefined 
let result1 = array.find((element, index, arr) => {
    return element === 'hello';                                  
})
console.log("find: ", result1, array);

// findIndex - повертає індекс елемента, якщо нічого не знаходить повертає -1
let result2 = array.findIndex((element, index, arr) => {
    return element === 54;                                
})
console.log("findIndex: ", result2);

// indexOf - шукає по порядку, як лінійний пошук повертає індекс елемента, якщо нічого не знаходить повертає -1
let result3 = array.indexOf(null);                                
console.log("indexOf: ", result3);                         

// lastIndexOf - шукає у зворотньому порядку, як лінійний пошук повертає індекс елемента,
let result4 = array.lastIndexOf(1);                         
console.log("lastIndexOf: ", result4);  


let array2 = [1, 2, 222, 5, 4, 10, 3, 13, 11, 100, 8, 15, 20, 19];

// sort - сортує з меньшого до більшого, (b - a) з більшого до меньшого. Якщо не прописати умови, то порядок буде 1, 222, 3, 44, 5
array2.sort((a, b) => a - b)                                  
console.log("sort: ", array2);

// filter - фільтрує за умовами
let result5 = array2.filter((element, index, arr) => element > 10) 
console.log("filter: ", result5)

// some - якщо хочаб якийсь елемент підходить під умову повертає true
let result6 = array2.some((element, index, arr) => element < 2)  
console.log("some: ", result6)                                         

// every -  якщо всі елементи відповідают умові повертає true
let result7 = array2.every(element => element < 2)              
console.log("every: ",result7)                                            

//includes - знаходить елемент, якщо він є - true
let result8 = array2.includes(100)                               
console.log("includes: ", result8)   

let array3 = [1, 3, ['a', 'b', 'c',[true, false,[null,['a', 'b', 'c',[1,2,3]]]]],123, ]

// flat - розкриває рівні масиву
let result9 = array3.flat(Infinity)                              
console.log("9.flat: ", result9);

// contact - склеює масиви
let result10 = array3.concat(['hello'])
console.log("10.concat: ", result10);

// toString - перетворює на стрічку
let result11 = array2.toString()
console.log("11.toString: ", result11);


// map - замінює елемент на новий
let result12 = array.map((element, index, arr) => {
    if (element === 'iiii') {
        return 'BLACK';
    } else return element;
})
console.log("12.map: ", result12, array);

