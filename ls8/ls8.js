
/*1. Створіть функцію для обчислення факторіалу числа.
Створіть функцію calculateFactorial(n), яка приймає аргумент n (ціле число)
і виводить в консоль факторіал цього числа. Використовуйте цикл для обчислення факторіалу. */

console.log('1. Створіть функцію для обчислення факторіалу числа.');

function calculateFactorial(n) {
    let factorial = 1;
    for (let i = 1; i <= n; i++) {
        factorial *= i;
    }
    console.log(factorial);
}

let sum = prompt('введіть число від 1 до 9') 

if(sum <=9 && sum >=1) {
    calculateFactorial(sum);
} else {
    console.log('Вы ввели = '+ sum, '.Будь ласка, введіть число от 1 до 9.');
}   

/*2. Підрахунок кількості слів у рядку.
Створіть функцію countSymb(sym), яка приймає рядок через prompt
і виводить в консоль кількість букв у цьому рядку.
Використовуйте умови та цикли для підрахунку букв.
** Підказка стрічку також можна ітерувати, використваши .length*/

console.log('2. Підрахунок кількості букв у рядку.');

function countSymb(sym){
    let count = 0;
    for (let i = 0; i < sym.length; i++) {
        let letter = sym[i];
        if ((letter >= 'А' && letter <= 'Я') || (letter >= 'а' && letter <= 'я')) {
            count++;
        }
    }
    console.log('Кількість букв у рядку: ',count);
}

let text = prompt('Введіть вашу улюблену цитaту');
countSymb(text);

/*3. Створіть функцію для визначення простого числа (ціле число це число без коми: 1, 44, 100 ітд).
Створіть функцію isPrime(number), яка приймає аргумент number і повертає (return) true,
якщо число є простим, і false, якщо не є.
** Просте число це 3, 56, 23
Не просте це 1.33, 4.1, 55.222*/

console.log('3. Функція для визначення простого числа.');

function isPrime(number) {
    if (!Number.isInteger(number) || number <= 1) {
        return false;
    }

    for (let i = 2; i <= Math.sqrt(number); i++) {
        if (number % i === 0) {
            return false;
        }
    }
    return true;
}

let whriteAnumber = +prompt('Введіть ціле число для перевірки, чи є воно простим:');

if (isPrime(whriteAnumber)) {
    console.log('Просте число');
} else {
    console.log('Не просте число');
}

console.log(isPrime(whriteAnumber));

/*4. Запит на пароль.
Створіть функцію passwordPrompt(), яка приймає пароль і повторення паролю через prompt().
Після цього викликайте цю функцію, якщо паролі співпадають має вивестись (console): Успіх, а в іншому випадку: Невдача.*/

console.log('4. Запит на пароль.');

function passwordPrompt() {
    let password = prompt('Пароль:');
    let password2 = prompt('Повторіть пароль:');

    if (password === password2) {
        console.log('Успіх');
    } else {
        console.log('Невдача');
    }  
}

passwordPrompt();


/*5. Факторіал чисел в діапазоні.
Створіть функцію factorialRange(num1, num2, num3),
яка приймає 2 числа.
Функція має обчислити факторіали всіх чисел і повернути (return) результат у вигляді об'єкта {num1: num2, num3: } і вивести*/



/*6. Калькурятор.
Створіть функцію calc(num1, num2, action), яка приймає 2 числа з prompt
та знак по якому потірбно порахувати приклад. Мусять бути наступні дії: (+, -, /, *)
Результат повернути (return) і вивести*/

console.log('6. Калькурятор.');

function calc(num1, num2, action) {
    // num1 = +num1; 
    // num2 = +num2; 
    let result;

    if (action === '+') {
        result = num1 + num2;
    } else if (action === '-') {
        result = num1 - num2;
    } else if (action === '*') {
        result = num1 * num2;
    } else if (action === '/') 
        result = num1 / num2;
    return result;
}

let number1 = +prompt('Введіть число');
let operation = prompt('Введіть дію (+, -, *, /):');
let number2 = +prompt('Введіть інше число');

let output = calc(number1, number2, operation);
console.log('Відповідь :', number1, operation, number2, '=', output);

