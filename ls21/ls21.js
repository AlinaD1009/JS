// Виконайте 3 та 4 рівні задачника по JS:
// Уровень 3.1 задачника JavaScript
console.log('-------Уровень 3.1 задачника JavaScript-------');
// №1 Дано некоторое число. Проверьте, что цифры этого числа расположены по возрастанию.
console.log('------- 1 -------'); 
function Num(number) {
    const numbers = String(number);
    for (let i = 0; i < numbers.length - 1; i++) {
        if (numbers[i] > numbers[i + 1]) {
            return false;
        }
    }
    return true;
};
console.log(Num(123));

// №2 Дан массив:[1, '', 2, 3, '', 5]; Удалите из массива все пустые строки.
console.log('------- 2 -------'); 
const arr2 = [1, '', 2, 3, '', 5];
const result = arr2.filter(item => item !== '');
console.log(result);

// №3 Дан массив:[[2, 1, 4, 3, 5],[3, 5, 2, 4, 1],[4, 3, 1, 5, 2],]  Отсортируйте элементы в каждом подмассиве.
console.log('------- 3 -------'); 
const arr3 = [[2, 1, 4, 3, 5],[3, 5, 2, 4, 1],[4, 3, 1, 5, 2],];
const sortedArr3 = arr3.map(el => el.sort((a, b) => a - b));
console.log(sortedArr3);

// №4 Даны два массива:let arr1 = [1, 2, 3];let arr2 = [1, 2, 3, 4, 5];
// Удалите из большего массива лишние элементы с конца так, чтобы длины массивов стали одинаковыми.
console.log('------- 4 -------'); 
let arr4 = [1, 2, 3];
let arr41 = [1, 2, 3, 4, 5];
if (arr4.length > arr41.length) {
    arr4 = arr4.slice(0, arr41.length);
} else if (arr41.length > arr4.length) {
    arr41 = arr41.slice(0, arr4.length);
};
console.log(arr4); 
console.log(arr41); 

// Уровень 3.2 задачника JavaScript
console.log('-------Уровень 3.2 задачника JavaScript-------');
// №1 Выведите в консоль все числа в промежутке от 10 до 1000, у которых предпоследняя цифра четная.
console.log('------- 1 -------'); 
for (let i = 10; i <= 1000; i++) {
    const numbers2 = String(i);
    const result2 = numbers2[numbers2.length - 2];
    if (result2 % 2 === 0) {
        // console.log(i);
    }
};

// №2 Дан массив. Удалите из него каждый пятый элемент.
console.log('------- 2 -------'); 
const arr5 = [1, 2, 3, 4, 5, 6, 7, 8, 9, 10];
const result3 = arr5.filter((el, index) => (index + 1) % 5 !== 0);
console.log(result3); 

// №3 Дана некоторая переменная с числом:let num = 5;
// Сделайте строку, содержащую столько нулей, сколько указано в переменной. В нашем случае получится такая строка:'00000';
console.log('------- 3 -------'); 
let num = 5;
let zeros = '0'.repeat(num);
console.log(zeros);

// №4 Дана некоторая строка со словами:'aaa bbb ccc eee fff';
// Удалите из этой строки каждое второе слово. В нашем случае должно получится следующее:'aaa ccc fff'
console.log('------- 4 -------'); 
let str = 'aaa bbb ccc eee fff';
let words = str.split(' ');
let result4 = words.filter((el, index) => index % 2 === 0).join(' ');
console.log(result4);

// №5 Дан массив:[[1, 2, 3],[4, 5, 6],[7, 8, 9]]Найдите сумму элементов этого массива.
console.log('------- 5 -------'); 
const arr = [[1, 2, 3],[4, 5, 6],[7, 8, 9],];
let sum = 0;
for (let element of arr) {
    for (let num of element) {
        sum += num;
    }
};
console.log(sum);

// Уровень 3.3 задачника JavaScript
console.log('-------Уровень 3.3 задачника JavaScript-------');
// №1Дан массив со словами. Удалите из него слова, состоящие более чем из трех символов.
console.log('------- 1 -------'); 
const words1 = ['cat', 'dog', 'elephant', 'ant', 'bee'];
const result5 = words1.filter(word => word.length <= 3);
console.log(result5);

// №2 Дано некоторое число:1357.Проверьте, что все цифры этого числа являются нечетными.
console.log('------- 2 -------'); 
const numbers3 = 1357;
const stringg = String(num).split('');
const result6= stringg.every(element => parseInt(element) % 2 !== 0);
console.log(result6);

// №3 Дано некоторое слово:'abcba';Проверьте, что это слово читается одинаково с любой стороны.
console.log('------- 3 -------'); 
const word = 'abcba';
let isPalindrome = true;
for (let i = 0; i < word.length / 2; i++) {
    if (word[i] !== word[word.length - 1 - i]) {
        isPalindrome = false;
        break;
    }
};
console.log(isPalindrome);

// №4 Дан массив; Найдите сумму элементов этого массива.
console.log('------- 4 -------'); 
const arr6 = [
    [[11, 12, 13],[14, 15, 16],[17, 17, 19],],
    [[21, 22, 23],[24, 25, 26],[27, 27, 29],],
    [[31, 32, 33],[34, 35, 36],[37, 37, 39],],
];
let sum1 = 0;
for (const subArr1 of arr6) {
    for (const subArr2 of subArr1) {
        for (const num of subArr2) {
            sum1 += num;
        }
    }
};
console.log(sum1); 

// Уровень 3.4 задачника JavaScript
console.log('-------Уровень 3.4 задачника JavaScript------');
// №1 Выведите в консоль все числа в промежутке от 10 до 1000, у которых первая цифра четная.
console.log('------- 1 -------'); 
for (let i = 10; i < 1000; i++) {
    if (parseInt(i.toString()[0]) % 2 === 0) {
        // console.log(i);
    }
};

// №2 Дан некоторый массив, например, вот такой:[1, 2, 3, 4, 5, 6]
// Поменяйте местами пары элементов этого массива:[2, 1, 4, 3, 6, 5]
console.log('------- 2 -------'); 
const arr7 = [1, 2, 3, 4, 5, 6];
for (let i = 0; i < arr7.length; i += 2) {
    [arr7[i], arr7[i + 1]] = [arr7[i + 1], arr7[i]];
};
console.log(arr7); 

// №3 Дан следующий объект: Найдите сумму элементов этого объекта.
console.log('------- 3 -------'); 
let object = {
    1: { 1: 11, 2: 12, 3: 13 },
    2: { 1: 21, 2: 22, 3: 23 },
    3: { 1: 24, 2: 25, 3: 26 },
};
let summ = 0;
for (let key1 in object) {
    for (let key2 in object[key1]) {
        summ += object[key1][key2];
    }
};
console.log(summ);

// Уровень 3.5 задачника JavaScript
console.log('-------Уровень 3.5 задачника JavaScript------');
// №1 Дан текст со словами. Запишите в массив все слова, начинающиеся на букву 'a'.
console.log('------- 1 -------'); 
const text = 'Alabama, Oregon, Alaska, Ohio, Arizona';
const words2 = text.split(' ');
const wordsA = words2.filter(word => word[0].toLowerCase() === 'a');
console.log(wordsA);

// №2 Дан массив с числами. Оставьте в нем только те числа, которые делятся на 5.
console.log('------- 2 -------'); 
const numbers5 = [12, 15, 17, 20, 22, 25];
const result7 = numbers5.filter(number => number % 5 === 0);
console.log(result7); 

// №3 Дан массив с числами. Оставьте в нем только те числа, которые содержат цифру ноль.
console.log('------- 3 -------'); 
const numbers4 = [10, 15, 20, 25, 30, 35, 40];
const result8 = numbers4.filter(number => number.toString().includes('0'));
console.log(result8);

// №4 Дан массив со числами. Проверьте, что в нем есть число, содержащее в себе цифру 3.
console.log('------- 4 -------'); 
const numbers6 = [10, 23, 45, 67, 89];
const result9 = numbers6.some(number => number.toString().includes('3'));
console.log(result9); 

// №5 Дано некоторое число:35142
// Отсортируйте цифры этого числа. В нашем случае должно получится следующее:12345
console.log('------- 5 -------'); 
const numbers7 = 35142;
const result10 = numbers7.toString().split('').sort().join('');
console.log(result10);

// №6 Напишите программу, которая сформирует следующую строку:'-1-2-3-4-5-'
console.log('------- 6 -------'); 
const numbers8 = [1, 2, 3, 4, 5];
const result11 = numbers8.map(number => number).join('-');
console.log(result11);

// №7 Дан следующий объект;Найдите сумму элементов этого объекта.
console.log('------- 7 -------'); 
let obj2 = {
    1: {
        1: { 1: 111, 2: 112, 3: 113 },
        2: { 1: 121, 2: 122, 3: 123 },
    },
    2: {
        1: { 1: 211, 2: 212, 3: 213 },
        2: { 1: 221, 2: 222, 3: 223 },
    },
    3: {
        1: { 1: 311, 2: 312, 3: 313 },
        2: { 1: 321, 2: 322, 3: 323 },
    },
};
function sumOfNum(obj) {
    let sum = 0;
    for (let key in obj) {
        if (typeof obj[key] === 'object') {
            sum += sumOfNum(obj[key]);
        } else if (typeof obj[key] === 'number') {
            sum += obj[key];
        }
    }
    return sum;
};
console.log(sumOfNum(obj2)); 

// Уровень 3.6 задачника JavaScript
console.log('-------Уровень 3.6 задачника JavaScript------');
// №1Дан массив со числами. Удалите из него числа, состоящие более чем из трех цифр.
console.log('------- 1 -------'); 
let numbers9 = [11, 123, 2345, 6543, 25, 89];
let result12 = numbers9.filter(number => number < 1000);
console.log(result12); 

// №2 Дано число, например, вот такое:let num = 12345; Проверьте, что все цифры этого числа больше нуля.
console.log('------- 2 -------'); 
let numbers10 = 12345;
let result13 = [...numbers10.toString()].every(digit => digit > '0');
console.log(result13); 


// №3 Дан некоторый массив, например, вот такой:[123, 456, 789]
// Слейте все элементы этого массива в один массив, разбив их посимвольно:[1, 2, 3, 4, 5, 6, 7, 8, 9]
console.log('------- 3 -------'); 
let numbers11 = [123, 456, 789];
let result14 = numbers11.flatMap(number => [...number.toString()]);
console.log(result14);

// №4 Дан следующая структура:let data = [{1: 11,2: 12,3: 13,},{1: 21,2: 22,3: 23,},{1: 24,2: 25,3: 26,},];
// Найдите сумму элементов этой структуры.
console.log('------- 4 -------'); 
let data = [
    { 1: 11, 2: 12, 3: 13 },
    { 1: 21, 2: 22, 3: 23 },
    { 1: 24, 2: 25, 3: 26 },
];
let sum3 = data.reduce((acc, obj) => {
    return acc + Object.values(obj).reduce((sum3, value) => sum3 + value, 0);
}, 0);
console.log(sum3); 

// Уровень 3.7 задачника JavaScript
console.log('-------Уровень 3.7 задачника JavaScript------');

// №1 Дана строка со словами. Отсортируйте слова в алфавитном порядке.
console.log('------- 1 -------');
let text2 = 'Georgia Idaho Delawere Hawaii Florida';
let words3 = text2.split(' ');
let result15 = words3.sort();
console.log(result15); 

// №2 Дано число. Получите массив делителей этого числа.
console.log('------- 2 -------'); 
let numbers12 = 36;
let arr8 = [];
for (let i = 1; i <= numbers12; i++) {
    if (numbers12 % i === 0) {
        arr8.push(i);
    }
};
console.log(arr8); 

// №3 Даны два числа. Получите массив общих делителей этих чисел.
console.log('------- 3 -------'); 
let number1 = 36;
let number2 = 48;
let arr9 = [];
for (let i = 1; i <= Math.min(number1, number2); i++) {
    if (number1 % i === 0 && number2 % i === 0) {
        arr9.push(i);
    }
};
console.log(arr9); 

// №4 Дано число. Проверьте, что у этого числа есть только один делитель, кроме него самого и единицы.
console.log('------- 4 -------');
let number3 = 1;
let arr10 = [];
for (let i = 2; i <= number3 / 2; i++) {
    if (number3 % i === 0) {
        arr10.push(i);
    }
};
console.log(arr10.length === 1); 

// №5 Через запятую написаны числа. Получите максимальное из этих чисел.
console.log('------- 5 -------'); 
let numbers = "3,5,7,2,8,6";
let maxNumber = Math.max(...numbers.split(',').map(Number));
console.log(maxNumber); 

// №6 Дан массив с числами. После каждого однозначного числа вставьте еще такое же.
console.log('------- 6 -------'); 
let arr11 = [1, 2, 3, 10, 11, 12];
let result16 = [];
arr11.forEach(num => {
    result16.push(num); 
  if (num < 10) result16.push(num);
});
console.log(result16); 

// №7 Дана строка. Удалите из нее все гласные буквы.
console.log('------- 7 -------'); 

// №8 Дана строка. Сделайте заглавной последнюю букву каждого слова в этой строке.
console.log('------- 8 -------'); 

// №9 Дан следующая структура; Найдите сумму элементов этой структуры.
console.log('------- 9 -------'); 
let data2 = [
	{1: [1, 2, 3],2: [1, 2, 3],3: [1, 2, 3],},
	{1: [1, 2, 3],2: [1, 2, 3],3: [1, 2, 3],},
	{1: [1, 2, 3],2: [1, 2, 3],3: [1, 2, 3],},
];
let sum4 = 0;
data2.forEach(obj => {
    for (let key in obj) {
        sum4 += obj[key].reduce((acc, num) => acc + num, 0);
    }
});
console.log(sum4); 

// Уровень 3.8 задачника JavaScript
console.log('-------Уровень 3.8 задачника JavaScript------');

// №1 Дан массив со числами. Проверьте, что все числа из этого массива содержат в себе цифру 3.
console.log('------- 1 -------'); 
let numbers13 = [13, 23, 33, 43];
let result17 = numbers13.every(num => num.toString().includes('3'));
console.log(result17); 

// №2 Дана строка в формате:'kebab-case'Преобразуйте ее в формат:'snake_case'
console.log('------- 2 -------'); 
let kebabCase = 'kebab-case';
let snakeCase = kebabCase.replace('-', '_');
console.log(snakeCase); 

// №3 Дана строка в формате:'snake_case'Преобразуйте ее в формат:'camelCase'
console.log('------- 3 -------'); 
function snakeToCamel(str) {
    return str.toLowerCase().replace(/_./g, match => match.charAt(1).toUpperCase());
};
let snakeCase2 = 'snake_case';
let camelCase = snakeToCamel(snakeCase2);
console.log(camelCase); 
  
// №4 Дана строка в формате:'camelCase' Преобразуйте ее в формат:'snake_case'
console.log('------- 4 -------'); 
function camelToSnake(str) {
    return str
      .replace(/([A-Z])/g, '_$1')
      .toLowerCase();
};
let camelCase2 = 'camelCase';
let snakeCase3 = camelToSnake(camelCase2);
console.log(snakeCase3); 

// №5 Сформируйте с помощью циклов следующий массив:[[1, 2, 3],[1, 2, 3],[1, 2, 3],[1, 2, 3],[1, 2, 3],]
console.log('------- 5 -------'); 
let result18 = [];
for (let i = 0; i < 5; i++) {
    result18.push([1, 2, 3]);
};
console.log(result18);

// Уровень 3.9 задачника JavaScript
console.log('-------Уровень 3.9 задачника JavaScript------');
// №1 Дана строка. Проверьте, что эта строка состоит только из цифр.
console.log('------- 1 -------'); 
const numbersOnly = str => /^\d+$/.test(str); // ^\d+$ — регулярное выражение только цифры от начала до конца
console.log(numbersOnly('123'));

// №2 Дана строка. Проверьте, что эта строка состоит только из четных цифр.
console.log('------- 2 -------'); 
const evenNumbersOnly = str => /^[02468]+$/.test(str); //^[02468]+$ — регулярное выражение только чётные цифры
console.log(evenNumbersOnly("2468"));

// №3 Дан массив со числами. Удалите из него числа, имеющие два и более нуля.
console.log('------- 3 -------'); 

// №4 Найдите все числа от 1 до 1000, сумма цифр которых равна 13.
console.log('------- 4 -------'); 

// №5 Сформируйте с помощью циклов следующий массив:[[1, 2, 3],	[4, 5, 6],[7, 8, 9],]
console.log('------- 5 -------'); 
const array = () => {
    const result = [];
    for (let i = 0; i < 3; i++) {
        const row = [];
        for (let j = 1; j <= 3; j++) {
            row.push(i * 3 + j);
        }
    result.push(row);
    }
    return result;
};
console.log(array());

// Уровень 3.10 задачника JavaScript
console.log('-------Уровень 3.10 задачника JavaScript------');
// №1 Дан массив. Сделайте так, чтобы в нем каждый элемент повторился два раза.
console.log('------- 1 -------'); 
const dublEl = arr => arr.flatMap(item => [item, item]);
const arr12 = [1, 2, 3];
const dublNumbers = dublEl(arr12);
console.log(dublNumbers); 

// №2 Дан массив и число. Оставьте в массиве только те числа, которые являются делителями заданного числа.
console.log('------- 2 -------'); 
const filterDiv = (arr, num) => arr.filter(item => num % item === 0);
const arr13 = [1, 2, 3, 4, 5, 6];
const div = filterDiv(arr13, 12);
console.log(div); 

// №3 Даны два числа. Получите массив цифр, которые есть и в одном, и во втором числе.
console.log('------- 3 -------'); 

// №4 Дано число. Получите массив позицией всех цифр 3 в этом числе, за исключением первой и последней.
console.log('------- 4 -------'); 
let pos = num =>{
    let str = String(num);
    let positions = [];
    for (let i = 0; i < str.length; i++){
        if(str[i] === '3') positions.push(i);
    }
    return positions.slice(1, -1);
};
const positions = pos(130345363);
console.log(positions);

// №5 Дан массив с числами. Оставьте в нем числа, состоящие из разных цифр, а остальные удалите.
console.log('------- 5 -------'); 
const digNumbers = arr => arr.filter(num => {
    const digits = String(num);
    const uniqDigits = new Set(digits);
    return digits.length === uniqDigits.size;
});
const arr16 = [123, 112, 456, 787, 890];
const uniqNumbers = digNumbers(arr16);

// №6 Дан массив:[[1, 2, 3],[4, 5, 6],[7, 8, 9],]Слейте элементы этого массива в один одномерный массив:[1, 2, 3, 4, 5, 6, 7, 8, 9]
console.log('------- 6 -------'); 
const flatArray = arr => arr.flat();
const arr14 = [[1, 2, 3],[4, 5, 6],[7, 8, 9]];
const arr15 = flatArray(arr14);
console.log(arr15); 
