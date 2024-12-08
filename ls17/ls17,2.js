// Уровень 2.1 задачника JavaScript
console.log('-------Уровень 2.1 задачника JavaScript-------'); 

console.log('------- 1 -------'); 
// №1 Дана некоторая строка. Найдите позицию первого нуля в строке.
let str8 = "12301230";
let pos = str8.indexOf("0");
console.log('Позиция первого нуля: ', pos); 

// console.log('------- 2 -------'); 
// №2 Выведите в консоль все числа в промежутке от 1 до 1000, сумма первой и второй цифры которых равна пяти.

console.log('------- 3 -------'); 
// №3 Дан массив. Удалите из него элементы с заданным значением.
let arr3 = [11, 44, 15, 2, 7, 0, 44];
let del = 44;

let res = arr3.filter((el) => el !== del); 
console.log('Массив после удаления елементов: ', res);

console.log('------- 4 -------'); 
// №4 Дан некоторый массив, например, вот такой: [1, 2, 3, 4, 5, 6]; Найдите сумму первой половины элементов этого массива.
let arr4 = [1, 2, 3, 4, 5, 6];
let halfLength = Math.floor(arr4.length / 2); 
let firstHalf = arr4.slice(0, halfLength);
let summ = 0;
for (let num of firstHalf) {
    summ += num;
}
console.log('Cуммв первой половины: ', summ); // 6

// Уровень 2.2 задачника JavaScript
console.log('-------Уровень 2.2 задачника JavaScript-------'); 

console.log('------- 1 -------'); 
// №1 Дан массив с числами. Подсчитайте количество отрицательных чисел в этом массиве.
let arr5 = [1, -2, 3, -4, -5, 6];
let countNeg = 0;

for (let i = 0; i < arr5.length; i++) {
    if (arr5[i] < 0) {
        countNeg++;
    }
}
console.log('Kоличество отрицательных чисел :', countNeg);

console.log('------- 2 -------'); 
// №2 Дан массив с числами. Оставьте в нем только положительные числа.
let arr6 = [1, -2, 3, -4, -5, 6];
let posNumb = arr6.filter(num => num > 0);
console.log(posNumb);

console.log('------- 3 -------'); 
// №3 Дана строка. Удалите предпоследний символ из этой строки.
let str1 = 'JavaScript';
let newStr = str1.slice(0, -2) + str1.slice(-1);
console.log(newStr);

// console.log('------- 4 -------'); 
// №4 Дан некоторый массив, например, вот такой: [1, 2, 3, 4, 5, 6]
// Поделите сумму первой половины элементов этого массива на сумму второй половины элементов.

// Уровень 2.3 задачника JavaScript
console.log('-------Уровень 2.3 задачника JavaScript-------'); 

console.log('------- 1 -------'); 
// №1 Даны два слова. Проверьте, что последняя буква первого слова совпадает с первой буквой второго слова.
let word1 = 'One';
let word2 = 'Two';

let lastLet = word1[word1.length - 1];
let firstLet = word2[0];

// Проверяем совпадение
if (lastLet === firstLet) {
    console.log('Буквы совпадают');
} else {
    console.log('Буквы не совпадают');
}

console.log('------- 2 -------'); 
// №2 Дана некоторая строка. Найдите позицию третьего нуля в строке.
let string = '1020304050';

// Находим индекс третьего нуля
let position = string.indexOf("0", string.indexOf("0", string.indexOf("0")));

if (position !== -1) {
    console.log('Позиция третьего нуля:', position);
} else {
    console.log('Третьего нуля нет в строке.');
}

console.log('------- 3 -------'); 
// №3 Даны числа, разделенные запятыми: '12,34,56'; Найдите сумму этих чисел.
let numbers = '12,34,56';

let summ1 = numbers.split(",").reduce((acc, num) => acc + Number(num), 0);
console.log("Сумма чисел:", summ1);

console.log('------- 4 -------'); 
// №4 Дана дата в следующем формате: '2025-12-31'; Преобразуйте эту дату в следующий объект:
// {
// 	year: '2025',
// 	month: '12',
// 	day: '31',
// }
let date = "2025-12-31";
let [year, month, day] = date.split('-');

let dateObj = {
    year: year,
    month: month,
    day: day,
};
console.log(dateObj);

// Уровень 2.4 задачника JavaScript
console.log('-------Уровень 2.4 задачника JavaScript-------'); 

console.log('------- 1 -------'); 
// №1 Дана некоторая строка с буквами и цифрами. Получите позицию первой цифры в этой строке.
let string1 = 'ajh4kljh5dn4s5';
let pstn = string1.search(/\d/);
if (position !== -1) {
    console.log('Позиция первой цифры:', pstn);
} 

console.log('------- 2 -------'); 
// №2 Дан объект с ключами и значениями. Запишите в первый массив ключи объекта, а во второй - значения.
let obj = {name: 'Oliwia', age: 30, car: 'Honda'};
let keys = Object.keys(obj);
let values = Object.values(obj);
console.log('Ключи:', keys);
console.log('Значения:', values);

console.log('------- 3 -------'); 
// №3 Дано число. Выведите в консоль количество четных цифр в этом числе.
let numbers1 = 123456;
let count = String(numbers1).split('').filter(digit => Number(digit) % 2 === 0).length;
console.log('Количество четных цифр:', count);

console.log('------- 4 -------');  
// №4 Дана некоторая строка: 'abcde'; 
// Переведите в верхний регистр все нечетные буквы этой строки. В нашем случае должно получится следующее: 'AbCdE'
let string2 = 'abcde';
let reslt = string2.split('').map((element, index) => (index % 2 === 0 ? element.toUpperCase() : element)).join('');
console.log('Результат:', reslt);

console.log('------- 5 -------'); 
// №5 Дана некоторая строка со словами: 'aaa bbb ccc';
// Сделайте заглавным первый символ каждого слова в этой строке. В нашем случае должно получится следующее: 'Aaa Bbb Ccc';
let string3 = 'aaa bbb ccc';
let reslt1 = string3.split(' ').map(word => word[0].toUpperCase() + word.slice(1)).join(' ');
console.log(reslt1);

// Уровень 2.5 задачника JavaScript
console.log('-------Уровень 2.5 задачника JavaScript-------'); 

console.log('------- 1 -------'); 
// №1 Дана некоторая строка, например, вот такая: '023m0df0dfg0'; Получите массив позиций всех нулей в этой в строке.
let string4 = '023m0df0dfg0';
let posZero = [];

for (let i = 0; i < string4.length; i++) {
    if (string4[i] === '0') {
        posZero.push(i);
    }
}
console.log(posZero);

console.log('------- 2 -------'); 
// №2 Дана некоторая строка: 'abcdefg';
// Удалите из этой строки каждый третий символ. В нашем случае должно получится следующее: 'abdeg'
let string5 = 'abcdefg';
let result2 = string5.split('').filter((_, index) => (index + 1) % 3 !== 0).join('');
console.log(result2);

console.log('------- 3 -------'); 
// №3 Дан некоторый массив, например, вот такой: [1, 2, 3, 4, 5, 6];
// Поделите сумму элементов, стоящих на четных позициях, на сумму элементов, стоящих на нечетных позициях.
let arr7 = [1, 2, 3, 4, 5, 6];
let sumEven = 0;
let sumOdd = 0;  

for (let i = 0; i < arr7.length; i++) {
    if (i % 2 === 0) { 
        sumEven += arr7[i];
    } else { 
        sumOdd += arr7[i];
    }
}

let result3 = sumEven / sumOdd;
console.log(result3); 

// Уровень 2.6 задачника JavaScript
console.log('-------Уровень 2.6 задачника JavaScript-------'); 

console.log('------- 1 -------'); 
// №1 Дана некоторая строка с буквами и цифрами. Получите массив позиций всех цифр из этой строки.
let string6 = 'abc123xyz45';

let posNum = [];
for (let i = 0; i < string6.length; i++) {
    if (!isNaN(string6[i]) && string6[i] !== ' ') {
        posNum.push(i);
    }
}
console.log(posNum); 

console.log('------- 2 -------'); 
// №2 Дан массив с некоторыми числами, например, вот такой:[123, 456, 789];
// Напишите код, который перевернет числа в этом массиве по следующему принципу:[321, 654, 987];
let arr8 = [123, 456, 789];
let reverseArr8 = arr8.map(num => Number(String(num).split('').reverse().join('')));
console.log(reverseArr8);

console.log('------- 3 -------'); 
// №3 Дана некоторая строка с числом:'1234567';
// Отделите тройки цифр пробелами, начиная с конца числа. В нашем случае должно получится следующее: '1 234 567';


console.log('------- 4 -------'); 
// №4 Дана некоторая строка:'AbCdE'
// Смените регистр букв этой строки на противоположный. В нашем случае должно получится следующее:'aBcDe'

console.log('------- 5 -------'); 
// №5 Дан некоторый массив с числами, например, вот такой:[1, 2, 3, 4, 5, 6]
// Слейте пары элементов вместе:[12, 34, 56]


console.log('------- 6 -------'); 
// №6 Дана некоторая строка со словами:'aaa bbb ccc eee fff'
// Сделайте заглавным первый символ каждого второго слова в этой строке. В нашем случае должно получится следующее:
// 'aaa Bbb ccc Eee fff'
let string7 = 'aaa bbb ccc eee fff';
let result4 = string7.split(' ').map((word, index) => index % 2 !== 0 ? word[0].toUpperCase() + word.slice(1) : word).join(' ');
console.log(result4); 

// Уровень 2.7 задачника JavaScript
console.log('-------Уровень 2.7 задачника JavaScript-------'); 

console.log('------- 1 -------'); 
// №1 Дана некоторая строка:'a bc def ghij';
// Переведите в верхний регистр все подстроки, в которых количество букв меньше или равно трем. 
// В нашем случае должно получится следующее:'A BC DEF ghij'
let string8 = 'a bc def ghij';
let result5 = string8.split(' ').map(el => el.length <= 3 ? el.toUpperCase() : el).join(' ');
console.log(result5);

console.log('------- 2 -------'); 
// №2 Дан символ. Узнайте, в каком регистре этот символ - в верхнем или нижнем.
let string9 = 'A';

if (string9 === string9.toUpperCase()) {
    console.log('Верхний регистр');
} else {
    console.log('Нижний регистр');
}

console.log('------- 3 -------'); 
// №3 Дано некоторое число, например, такое:123789
// Удалите из этого числа все нечетные цифры. В нашем случае получится такой результат:28
let numbers2 = 123789;
let filter = Number(String(numbers2).split('').filter(el => el % 2 === 0).join(''));
console.log(filter);

// Уровень 2.8 задачника JavaScript
console.log('-------Уровень 2.8 задачника JavaScript-------'); 

console.log('------- 1 -------'); 
// №1 Дана строка с буквами. Проверьте, что в этой строке не более двух заглавных букв.
let string10 = 'HeLlo';

let countstring10 = string10.split('').filter(el => el === el.toUpperCase() && el !== el.toLowerCase()).length;

if (countstring10 <= 2) {
    console.log('Не более двух заглавных букв');
} else {
    console.log('Больше двух заглавных букв');
}


console.log('------- 2 -------'); 
// №2 Дана некоторая строка:'1 22 333 4444 22 5555 1'
// Удалите из этой строки все подстроки, в которых количество символов больше трех. В нашем случае должно получится следующее:
// '1 22 333 22 1'
let string11 = '1 22 333 4444 22 5555 1';
let result6 = string11.split(' ').filter(el => el.length <= 3).join(' ');
console.log(result6); 

console.log('------- 3 -------'); 
// №3 Даны два массива:
// let arr1 = [1, 2, 3];
// let arr2 = ['a', 'b', 'c'];
// Слейте эти массивы в новый массив следующим образом:
// [1, 2, 'a', 'b', 'c', 3]
let arr9 = [1, 2, 3];
let arr10 = ['a', 'b', 'c'];

let result7 = [...arr9.slice(0, 2), ...arr10, arr9[2]];
console.log(result7); 

// Уровень 2.9 задачника JavaScript
console.log('-------Уровень 2.9 задачника JavaScript-------'); 

console.log('------- 1 -------'); 
// №1 Дано некоторое число:123456
// Найдите сумму пар цифр этого числа. В нашем случае имеется ввиду следующее:12 + 34 + 56
let numbers3 = '123456';

let pairs = [];
for (let i = 0; i < numbers3.length; i += 2) {
    pairs.push(Number(numbers3[i] + numbers3[i + 1])); 
}

let summ2 = pairs.reduce((el, pair) => el + pair, 0); 
console.log(summ2); // 102

console.log('------- 2 -------'); 
// №2 Дан массив с числами:[1, 2, 3, 4, 5]
// Выведите в консоль элементы этого массива в обратном порядке.
let arr11 = [1, 2, 3, 4, 5];

let reverseArr12 = arr11.reverse(); 
console.log(reverseArr12);

// Уровень 2.10 задачника JavaScript
console.log('-------Уровень 2.10 задачника JavaScript-------'); 

console.log('------- 1 -------'); 
// №1 Дана строка с буквами и цифрами. Проверьте, что в этой строке не более трех букв.
let string12 = '123abc456';

let countLet = (string12.match(/[a-zA-Z]/g) || []).length; 
console.log(countLet <= 3); 

console.log('------- 2 -------'); 
// №2 Дано число. Получите первую четную цифру с конца этого числа.
let numbers4 = 1234567;

let digits = String(numbers4).split('').reverse(); 
let evenDigit = digits.find(digit => digit % 2 === 0); 
console.log(evenDigit); 

console.log('------- 3 -------'); 
// №3 Дана некоторая строка:'abcde abcde abcde'
// Замените в ней первый символ каждого слова на '!':'!bcde !bcde !bcde'
let string13 = 'abcde abcde abcde';

let result8 = string13.replace(/\b\w/g, '!');
console.log(result8);


console.log('------- 4 -------'); 
// №4 Дан массив с числами:[1, 2, 3, 3, 4, 5];
// Проверьте, что в этом массиве есть два одинаковых элемента подряд.
let array12 = [1, 2, 3, 3, 4, 5];

let countEl = array12.some((el, idx) => el === array12[idx + 1]); 
console.log(countEl);
