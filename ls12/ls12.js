// Даний масив: [1, 3, 5, 6, 8, 1, 4, 5, 3, 15, 19, 20, 11, [11, [true]]]. Застосувати наступні методи:
// reverse, flat, includes, join, map, reduce

let array = [1, 3, 5, 6, 8, 1, 4, 5, 3, 15, 19, 20, 11, [11, [true]]];
console.log(array);

// reverse - звертає порядок елементів у масиві у зворотному напрямку
let res = array.reverse()                              
console.log("reverse: ", res);

let res1 = array.reverse()                              
console.log("reverse2: ", res1);

// flat - розкриває рівні
let res2 = array.flat(3)                              
console.log("flat: ", res2);

// includes - знаходить елемент, якщо він є - true
let res3 = res2.includes(true)                                 
console.log("includes: ", res3)   

// join - поєднує всі елементи масиву в рядок
let res4 = res2.join()                                 
console.log("join: ", res4)   

// map - замінює елемент на новий
let res5 = res2.map((element, index, arr) => {
    if (element === true) {
        return false;
    } else return element;
})
console.log("map: ", res5);

// reduce - зводить дані з масиву до одного значення
console.log('reduce: ');

res2.reduce((previousVal, currentVal) => {
    console.log(previousVal, currentVal);
    return previousVal + currentVal;
})
// Даний рядок: 'Hello world and my dear friend ...' Застосувати наступні методи:
// split, trim, toLocaleUpperCase, toLocaleLowerCase, charAt, charCodeAt, includes,
// concat, search, startsWith, endsWith, indexOf, lastIndexOf, replace

let string = 'Hello world and my dear friend ...';

// split - розділяє по літерах, або по контретних символах/буквах ('e')
let result1 = string.split('')
console.log("split: ", result1) 

// trim - прибирає прогалини на початку та в кінці рядка
let result2 = string.trim()
console.log("trim: ", result2) 

// toLocaleUpperCase - текст великими літерами
let result3 = string.toLocaleUpperCase()
console.log("toLocaleUpperCase: ", result3) 

// toLocaleLowerCase - текст маленькими літерами
let result4 = string.toLocaleLowerCase()
console.log("toLocaleLowerCase: ", result4) 

// charAt - повертає символ за вказаним індексом
let result5 = string.charAt(6)
console.log("charAt: ", result5) 

// charCodeAt - повертає код символу (Unicode), що стоїть на певній позиції у рядку.
let result6 = string.charCodeAt(6)
console.log("charCodeAt: ", result6) 

// includes - перевіряє, чи є елемент у масиві чи підрядок у рядку (true/false)
let result7 = string.includes('Hello')
console.log("includes: ", result7) 

// concat - об'єднує задані аргументи
let result8 = string.concat('!')
console.log("concat: ", result8) 

// search - повернути перший збіг з () у рядку або -1 якщо збігу немає.
let result9 = string.search('world')
console.log("search: ", result9) 

// startsWith - перевірка чи починается рядок з 
let result10 = string.startsWith('Hello')
console.log("startsWith: ", result10) 

// endsWith - перевірка чи закінчуєтся рядок (пробіли теж рахуются)
let result11 = string.endsWith('...')
console.log("endsWith: ", result11) 

// indexOf - шукає індекс елемента по порядку
let result12 = string.indexOf('e')
console.log("indexOf: ", result12) 

// lastIndexOf - шукає індекс елемента у зворотньому порядку
let result13 = string.lastIndexOf('e')
console.log("lastIndexOf: ", result13) 

// replace - повертає новий рядок із заміною зазначеного слова (аналог метода splice)
let result14 = string.replace('...',' Monika!')
console.log("replace: ", result14) 

// Застосувати інші методи які були використані в лекції (методи стрічок та методи об'єктів)

// padStart - підставляє (кількість, значення) на початок рядка до заданої довжини
let res111 = string.padStart(50, "*")
console.log("padStart: ", res111) 

// padEnd - заповнює (кількість, значення) рядок до заданої довжини
let res112 = string.padEnd(50, "*")
console.log("padEnd: ", res112) 
 
// repeat - повторює рядок () разів.
let res114 = string.repeat(3)
console.log("repeat: ", res114) 

const user = {
    name: 'Alina',
    age: 26,
    job: 'Magazyner' 
    
}

let a = Object.values(user)
console.log('Object.values: ', a);

let b = Object.keys(user)
console.log('Object.keys: ', b);

let c = Object.entries(user)
console.log('Object.entries: ', c);

//  Object.freeze - заморожує об'єкт і не дає його редагувати
let user1 = Object.freeze({
    name: 'Alina',
    age: 26,
    job: 'Magazyner' 
})
 
delete user1.name
user1.age = 27;
console.log(user1)

// Object.seal - дозволяє міняти значення, але не видаляти та додавати нові
let user2 = Object.seal({
    name: 'Alina',
    age: 26,
    job: 'Magazyner' 
})

delete user2.name;
user2.age = 27;
console.log(user2)