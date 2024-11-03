// * 1-8 завдання повинно бути виконане через цикл forEach.

// 1. Напишіть цикл, який виводить всі парні числа від 20 до 32.
console.log("1.Цикл, який виводить всі парні числа від 20 до 32.");

const array = [20, 21, 22, 23, 24, 25, 26, 27, 28, 29, 30, 31, 32];
array.forEach( function(element){
    if (element % 2 === 0){
        console.log(element);
    }
})

// 2. Створіть масив зі списком: вашого улюбленого фрукту, вашого улюбленого кольору, ім'я, рандомного числа, вашого віку.
//    Виведіть цей проітерований масив на консоль і визначте його тип даних.
console.log("2.Проітерований масив та його тип даних.");

const array1 = ["strawberry", "green", "Alina", 123, 26];
array1.forEach( function(element, index){
    console.log(index, element, typeof element);
})

// 3. Напишіть цикл який виводить всі непарні числа від 17 до 39.
console.log("3.Цикл який виводить всі непарні числа від 17 до 39.");

const array2 = [17, 18, 19, 20, 21, 22, 23, 24, 25, 26, 27, 28, 29, 30, 31, 32, 33, 34, 35, 36, 37, 38, 39];
array2.forEach(function(element){
    if (element % 2 === 1){             // !== 0
        console.log(element);
    }
})

// 4. Даний масив [1, 5, true, 'hello', false, null, 'iiii', 54, null], виведіть парні елементи
console.log("4.Парні елементи");

const array4 = [1, 5, true, 'hello', false, null, 'iiii', 54, null];
array4.forEach(function(element, index){
    if (index % 2 === 0){                      
        console.log(array4[element, index])
    }
})
 
// 5. Даний масив [1, 5, true, 'hello', false, null, 'iiii', 54, null], виведіть не парні елементи
console.log("5.Не парні елементи");

const array5 = [1, 5, true, 'hello', false, null, 'iiii', 54, null];
array4.forEach(function(element, index){
    if (index % 2 === 1){
        console.log(array4[element, index])
    }
})

// 6. Даний масив [1, 2, 4, 2, 3, 55, 66, 777, 12]. Виведіть суму всіх  елементів масиву.
console.log("6.Сума всіх  елементів масиву.");

const array6 = [1, 2, 4, 2, 3, 55, 66, 777, 12];
let sum = 0;
array6.forEach(function(element){
    sum += element;  
})
console.log(sum);

// 7. Даний масив [1, 2, 4, 2, 3, 5, 6, 7, 1]. Перемножити та вивести всі елементи масиву.
console.log("7.Перемноження всіх елементів масиву.");

const array7 = [1, 2, 4, 2, 3, 5, 6, 7, 1];
let sum2 = 1;
array7.forEach(function(element){
    sum2 *= element;
})
console.log(sum2);

// 8. Створіть prompt в якому потрібно проітерувати число з 0. 
//    Якщо це числа 5, 6, 7, 8, 9, 10 то пропустити ітерацію.
//    Якщо це числа 100 і більше, завершити ітерацію.
console.log("8.prompt в якому потрібно проітерувати число з 0.");

let a123 = +prompt("Введіть число: ")
let array8 = [];
for (let i = 0; i <= a123; i++) array8[i] = i; 

array8.forEach(function(element){
    if(element >= 5 && element <= 10) return;
    if(element >= 100) return;
    console.log(element);  
})

// * Використовуємо Math
// 9. Створіть функцію яка приймає дробове значення (наприклад 1.34 чи 55.43), та заокруглює його до меншого числа і повертає значення.
console.log("9. Функція яка приймає дробове значення, заокруглює його до меншого числа та повертає значення.");

let a = Math.floor(9.99);
console.log(a);

// 10. Створіть функцію яка приймає дробове значення (наприклад 1.34 чи 55.43), та заокруглює його до більшого числа і повертає значення.
console.log("10.Функція яка приймає дробове значення, заокруглює його до більшого числа та повертає значення.");

let b = Math.ceil(9.1);
console.log(b);

// 11. Створіть функцію яка генерує рандомне число (випадкове) від 0 до 1000 і повертає його.
console.log("11.Функція яка генерує рандомне число від 0 до 1000 та повертає його.");

let c = Math.round(Math.random()*1000);
console.log(c);

// 12. Створіть функцію яка приймає 2 числа та виводить степіть перше число основне, друге сама степіть.
console.log("12.Функція яка приймає 2 числа та виводить степіть перше число основне, друге сама степіть.");

let d = Math.pow(2, 3);
console.log(d);


// 13. Створіть функцію яка приймає число, виводить з нього корінь, заокруглює його і повертає.
console.log("12.Функція яка приймає число, виводить з нього корінь, заокруглює його та повертає.");

let e = Math.round(Math.sqrt(3));
console.log(e);

// * Використовувати методи масивів

// 14. Дано масив [1, 5, true], додати в кінець масиву 'Hello'
console.log("14.Додати в кінець масиву 'Hello'");

let arr = [1, 5, true];
// arr[arr.length] = 'Hello';
arr.push('Hello');
console.log(arr);

// 15. Дано масив [1, 5, true], додати в початок масиву 'HelloArray'
console.log("15.Додати в початок масиву 'HelloArray'");

let arr1 = [1, 5, true];
arr1.unshift('HelloArray');
console.log(arr1);

// 16. Дано масив [1, 5, true], видалити останній елемент з масиву
console.log("16.Видалити останній елемент з масиву");

let arr2 = [1, 5, true];
arr2.pop();
console.log(arr2);

// 17. Дано масив [1, 5, true], видалити перший елемент з масиву
console.log("17.Видалити перший елемент з масиву");

let arr3 = [1, 5, true];
arr3.shift();
console.log(arr3);

// 18. Дано масив [5, true, 'hello', false, null, 5] вирізати *в новий масив* з 1 по 5 індекс
console.log("18.Вирізати *в новий масив* з 1 по 5 індекс");

let arr4 = [5, true, 'hello', false, null, 5];

let newArr4 = arr4.slice(1,6)
console.log(arr4);
console.log(newArr4);

// 19. Дано масив [5, true, 'hello', false, null, 5] вирізати з 1 по 5 індекс дані
console.log("19.Вирізати з 1 по 5 індекс дані");

let arr5 = [5, true, 'hello', false, null, 5];
console.log(arr5);
arr5.splice(1,5)       // з якого індексу починаемо відалення, скільки елементів
console.log(arr5);

// 20. Дано масив [5, true, 'hello', false, null, 5] вирізати з 1 по 5 індекс та вставити 10, 100, 111, 222
console.log("20.Вирізати з 1 по 5 індекс та вставити 10, 100, 111, 222");

let arr6 = [5, true, 'hello', false, null, 5];
console.log(arr6);
arr6.splice(1, 5, 10, 100, 111, 222)       // з якого індексу починаемо, скільки елементів (можливо 0), елементи які додаємо
console.log(arr6);

// 21. Створені масиви під час виконання цього завдання об'єднайте в рядок, а потім назад приведіть рядок в масив.
console.log("21.Maсив об'єднайте в рядок, а потім назад приведіть рядок в масив.");

let a3 = newArr4.join()
console.log(newArr4);
console.log(a3);

let a4 = a3.split()
console.log(a4);

