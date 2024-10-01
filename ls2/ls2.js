// Data types - Tипы данных

// String - Строка (можно использовать два вида ковычек)
var greetings = "Hello JS";


// Number (писать без ковычек иначе будет string)
const num = 8000;

// Boolian - Логическое значение 
let boolTrue = true;
let boolFalse = false;

// Null - Нулевой (не абсолютная пустота, значение елемента нулевое)
var someNull = null;

// underfined - Hеопределенный (абсолютная пустота, ничего не было никогда, переменная не получила еще своего значения)
let someUnderfined;
let someUnderfined2 = undefined;

// Symbol (способ дать уникальный ключ(айдишник) объекту)

// Bigint (огромные числа)
const bigInt = 99999999999999999999999999999999n;


// object (перечень информации про объект)
const obj = {
    name: 'Alina',
    age: 26,
    gender: 'Female'
};
obj.age = 26;
obj['gender'] = 'female';


// +, -, /, *, %

let A = 10 + 5;
document.write(A)
document.write('<hr>')

let B = 20 + A;
document.write(B)
document.write('<hr>')

let C = B - A;
document.write(C)
document.write('<hr>')

let D = A / 2;
document.write(D)
document.write('<hr>')

let E = D * 17.3333;
document.write(E)
document.write('<hr>')

document.write(E.toFixed(2))
document.write('<hr>')

let F = C % 2;
document.write(F)
document.write('<hr>')

let G = D / E;
document.write(G)
document.write('<hr>')

let H = A * D;
document.write(H)
document.write('<hr>')

let I = H - D;
document.write(I)
document.write('<hr>')

let J = 123 % 4;
document.write(J)
document.write('<hr>')


// Number, Boolean, String

let c1 = true;

let c2 = Number(c1)   
console.log(c1, c2)  // true - 1

let c3 = String(c1)  
console.log(c1, c3)  // true - 'true'

let c4 = Boolean(c3)
console.log(c1, c4)  // true - true


let a1 = false;

let a2 = Number(a1)  
console.log(a1, a2)  // false - 0 


let a3 = String(a1)
console.log(a1, a3)  // false - 'false'

let a4 = Boolean(a3)  
console.log(a1, a4)  // false - true  (если в String есть любое 'символ' оно уже не false/0 поэтому Boolean отображает true)








let apples = "4";
let oranges = "3"; 

console.log(apples + oranges)    // 43

console.log(+apples + +oranges)  // 7

let tomatos = ++apples; 

console.log(tomatos)             // 5

console.log(tomatos + true)      // 6

console.log(true + true + false) // 2

console.log( '' + Number(true) + Number(true) + Number(false))  // 110











