// Уровень 1.1 задачника JavaScript
console.log('-------Уровень 1.1 задачника JavaScript-------');  
console.log('------- 1 -------'); 
// №1 Дано число. Проверьте, отрицательное оно или нет. Выведите об этом информацию в консоль.
const num = -1;

if(num > 0){
    console.log('Число не отрицательное');   
} else{
    console.log('Число отрицательное');
}

console.log('------- 2 -------'); 
// №2 Дана строка. Выведите в консоль длину этой строки.
const str = 'My name is Aline'
console.log('Длина строки:', str.length);

console.log('------- 3 -------'); 
// №3 Дана строка. Выведите в консоль последний символ строки.
const str2 = 'My lastname is Dirkach'
console.log('Последний символ строки:', str2[str2.length -1]);

console.log('------- 4 -------'); 
// №4 Дано число. Проверьте, четное оно или нет.
const num2 = 1234;

if(num2 % 2 === 0){
    console.log('Число четное');
} else{
    console.log('Число не четное');
}

console.log('------- 5 -------'); 
// №5 Даны два слова. Проверьте, что первые буквы этих слов совпадают.
let animal1 = 'Cat';
let animal2 = 'Dog';

if(animal1[0] === animal2[0]){
    console.log('Первые буквы совпадают');
} else{
    console.log('Первые не буквы совпадают');
}

console.log('------- 6 -------'); 
// №6 Дано слово. Получите его последнюю букву. Если слово заканчивается на мягкий знак, то получите предпоследнюю букву.
let word = 'Абривиатура';

let lastLetter = word[word.length-1];
if(lastLetter === 'ь'){
    lastLetter = word[word.length-2];
}
console.log('Последняя буква слова:',lastLetter);

// Уровень 1.2 задачника JavaScript
console.log('-------Уровень 1.2 задачника JavaScript-------');   

console.log('------- 1 -------'); 
// №1 Дано число. Выведите в консоль первую цифру этого числа.
const num3 = 4321;
let firstNum = String(num3)[0];
console.log('Первая цифра числа:', firstNum);

console.log('------- 2 -------'); 
// №2 Дано число. Выведите в консоль последнюю цифру этого числа.
const num4 = 5678;
let lastNum = num4 % 10;
console.log('Последняя цифра числа:', lastNum);

console.log('------- 3 -------'); 
// №3 Дано число. Выведите в консоль сумму первой и последней цифры этого числа.
const num5 = 3456;
const strNum = String(num5);
let firstNum1 = Number(strNum[0]);
let lastNum1 = num5 % 10;
const result = firstNum1 + lastNum1;
console.log('Cуммa первой и последней цифры:', result);

console.log('------- 4 -------'); 
// №4 Дано число. Выведите количество цифр в этом числе.
const num6 = 12345;
const сolNum = String(num6).length; 
console.log('Количество цифр в числе:', сolNum);

console.log('------- 5 -------'); 
// №5 Даны два числа. Проверьте, что первые цифры этих чисел совпадают.
const num7 = 123;
const num8 = 456;

let firstNum3 = String(num7)[0];
let lastNum3 = String(num8)[0];

if (firstNum3 === lastNum3) {
    console.log("Первые цифры совпадают");
} else {
    console.log("Первые цифры не совпадают");
}

// Уровень 1.3 задачника JavaScript
console.log('-------Уровень 1.3 задачника JavaScript-------'); 

console.log('------- 1 -------'); 
// №1 Дана строка. Если в этой строке более одного символа, выведите в консоль предпоследний символ этой строки.
const str3 = 'I have a cat';

if(str3.length > 1) {
    console.log('Последний символ строки :', str3[str3.length - 1]); 
} 

console.log('------- 2 -------'); 
// №2 Даны два целых числа. Проверьте, что первое число без остатка делится на второе.
const numA = 34;
const numB = 12;

if(numA % numB === 0) {
    console.log('Первое число делится без остатка на второе');
} else {
    console.log('Первое число НЕ делится без остатка на второе');
}

// Уровень 1.4 задачника JavaScript
console.log('-------Уровень 1.4 задачника JavaScript-------'); 


console.log('------- 1 -------'); 
// №1 Выведите в консоль все целые числа от 1 до 100.
for (let i = 1; i <= 100; i++){
    console.log(i);
}

console.log('------- 2 -------'); 
// №2 Выведите в консоль все целые числа от -100 до 0.
for(let i = -100; i <= 0; i++){
    console.log(i);
}

console.log('------- 3 -------'); 
// №3 Выведите в консоль все целые числа от 100 до 1.
for (let i = 100; i >= 1; i--){
    console.log(i);
}

console.log('------- 4 -------'); 
// №4 Выведите в консоль все четные числа из промежутка от 1 до 100.
for (i = 2; i <= 100; i+=2){
    console.log(i);
}

console.log('------- 5 -------'); 
// №5 Выведите в консоль все числа кратные трем в промежутке от 1 до 100.
for (i = 3; i <=100; i+=3){
    console.log(i);
}

// Уровень 1.5 задачника JavaScript
console.log('-------Уровень 1.5 задачника JavaScript-------'); 

console.log('------- 1 -------'); 
// №1 Найдите сумму всех целых чисел от 1 до 100.
let sum = 0;
for (let i = 0; i<=100; i++){
    sum += i;
}
console.log('Сумма всех чисел от 1 до 100 :', sum);


console.log('------- 2 -------'); 
// №2 Найдите сумму всех целых четных чисел в промежутке от 1 до 100.
let sum2 = 0;
for (let i = 2; i <=100; i+=2){
    sum2 += i;
}
console.log('Cуммa всех четных чиселот 1 до 100:', sum2);

console.log('------- 3 -------'); 
// №3 Найдите сумму всех целых нечетных чисел в промежутке от 1 до 100.
let sum3 = 0;
for (let i = 1; i <=100; i+=2){
    sum3 += i;
}
console.log('Cуммa всех нечетных чиселот 1 до 100:', sum3);
 
console.log('------- 4 -------'); 
// №4 Даны два целых числа. Найдите остаток от деления первого числа на второе.
const numС = 34;
const numD = 12;

let sum4 = numС % numD;
console.log('Остаток от деления первого числа на второе:', sum4);

console.log('------- 5 -------'); 
// №5 Дана некоторая строка. Переберите и выведите в консоль по очереди все символы с конца строки.
const str4 = 'I live in Poland';
for (let i = str4.length - 1; i >=0; i--) {
    console.log(str4[i]);
}

// Уровень 1.6 задачника JavaScript
console.log('-------Уровень 1.6 задачника JavaScript-------'); 

console.log('------- 1 -------'); 
// №1 Дан массив с числами. Найдите сумму квадратов элементов этого массива.
const array = [1, 11, 23, 45, 123]
let sum5 = 0;
for (const num of array) {
    sum5 += num ** 2;
}
console.log('Сумма квадратов элементов:', sum5);

console.log('------- 2 -------'); 
// №2 Дан массив с числами. Найдите сумму квадратных корней элементов этого массива.
const array1 = [1, 11, 23, 45, 123]
let sum6 = 0;
for (const num of array1) {
    sum6 += Math.sqrt(num);
}
console.log('Сумма квадратных корней элементов:', sum6);

console.log('------- 3 -------'); 
// №3 Дан массив с числами. Найдите сумму положительных элементов этого массива.
const array2 = [0, 12, -1, 9, 3, -4];
let sum7= 0;
for (const num of array2) {
    if (num > 0) {
        sum7 += num;
    }
}
console.log('Сумма положительных элементов:', sum7);

console.log('------- 4 -------'); 
// №4 Дан массив с числами. Найдите сумму тех элементов этого массива, которые больше нуля и меньше десяти.
const array3 = [3, 2, 4, 14, 16, 19];
let sum8 = 0;
for (const num of array3) {
    if (num > 0 && num < 10) {
        sum8 += num;
    }
}
console.log('Сумма элементов больше нуля и меньше десяти:', sum8);


// Уровень 1.7 задачника JavaScript
console.log('-------Уровень 1.7 задачника JavaScript-------'); 

console.log('------- 1 -------'); 
// №1 Дана строка; Получите массив букв этой строки.
let str5 = 'abcde'; 
const arrLet = str5.split('');
console.log('Массив букв строки:', arrLet);

console.log('------- 2 -------'); 
// №2 Дано некоторое число; Получите массив цифр этого числа.
let num9 = 12345;
const arrNum = num9.toString().split('');
console.log('Массив цифр числа:', arrNum);

console.log('------- 3 -------'); 
// №3 Дано некоторое число; Переверните его: 54321;
let num10 = 12345;
const revNum = num10.toString().split('').reverse().join(''); 
console.log('Перевернутое число:', revNum);

console.log('------- 4 -------'); 
// №4 Дано некоторое число; Найдите сумму цифр этого числа.
let num11 = 12345;
let sumNum = 0;
for (let num of String(num11)) {
    sumNum += Number(num); 
}
console.log('Сумма цифр числа:', sumNum);

// Уровень 1.8 задачника JavaScript
console.log('-------Уровень 1.8 задачника JavaScript-------'); 

console.log('------- 1 -------'); 
// №1 Заполните массив целыми числами от 1 до 10.
let array4 = [];
for (let i = 1; i <= 10; i++){
    array4.push(i);
}
console.log(array4);


console.log('------- 2 -------'); 
// №2 Заполните массив четными числами из промежутка от 1 до 100.
let array5 = [];
for (let i = 2; i <= 100; i+=2 ){
    array5.push(i);
}
console.log(array5);

console.log('------- 3 -------'); 
// №3 Дан массив с дробями; Округлите эти дроби до одного знака в дробной части.
let arr = [1.456, 2.125, 3.32, 4.1, 5.34];
for (let i = 0; i < arr.length; i++) {
    arr[i] = Math.round(arr[i] * 10) / 10;
}
console.log(arr);

// Уровень 1.9 задачника JavaScript
console.log('-------Уровень 1.9 задачника JavaScript-------'); 

console.log('------- 1 -------'); 
// №1 Дан массив со строками. Оставьте в этом массиве только те строки, которые начинаются на http://.
const str6 = ["http://teams.com", "www.englishclass101.com", "http://google.com"];
const strFilt = str6.filter(callb => callb.startsWith("http://"));
console.log(strFilt);

console.log('------- 2 -------'); 
// №2 Дан массив со строками. Оставьте в этом массиве только те строки, которые заканчиваются на .html.
const str7 = ["ls17.html", "ls2.css", "index.html", "ls17.js"];
const strFilt2 = str7.filter(callb => callb.endsWith(".html"));
console.log(strFilt2);

console.log('------- 3 -------'); 
// №3 Дан массив с числами. Увеличьте каждое число из массива на 10 процентов.
const numb = [10, 20, 30, 40];
const procNumb = numb.map(num => num * 1.1);
console.log(procNumb);

// Уровень 1.10 задачника JavaScript
console.log('-------Уровень 1.10 задачника JavaScript-------'); 

console.log('------- 1 -------'); 
// №1 Заполните массив случайными числами из промежутка от 1 до 100.
let randNumb = [];
for (let i = 0; i < 10; i++) {
    randNumb.push(Math.floor(Math.random() * 100));
}
console.log(randNumb);

console.log('------- 2 -------'); 
// №2 Дано некоторое число; Выведите в консоль все его символы с конца.
let num12 = 12345;
let numStr = String(num12);
for (let i = numStr.length - 1; i >= 0; i--) {
    console.log(numStr[i]);
}

console.log('------- 3 -------'); 
// №3 Дан некоторый массив, например, вот такой; По очереди выведите в консоль подмассивы из двух элементов нашего массива: 
// [1, 2]
// [3, 4]
// [5, 6]
let array6 = [1, 2, 3, 4, 5, 6];

for (let i = 0; i < array6.length; i += 2) {
    console.log(array6.slice(i, i + 2));
}

console.log('------- 4 -------'); 
// №4 Даны два массива; Слейте эти массивы в новый массив: [1, 2, 3, 4, 5, 6] ;
let arr1 = [1, 2, 3];
let arr2 = [4, 5, 6];
let arr12 = [...arr1, ...arr2];
console.log(arr12);
