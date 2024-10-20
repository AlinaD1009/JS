// * Розділяйте кожний пункт домашнього в коді коментарями.
// * Кожне завдання повинно бути виконане на 5 циклах: for, for of, for in, while, do while
// 1. Напишіть цикл, який виводить всі парні числа від 20 до 32.

// for

console.log('1.for')
for (let i = 20; i <= 32; i = i + 2){
    console.log(i)
};

let numbers = [20, 21, 22, 23, 24, 25, 26, 27, 28, 29, 30, 31, 32];

// for of

console.log('1.for of')
for (let i of numbers){
    if (i % 2 === 0){
        console.log(i)
    }
};

// for in

console.log('1.for in')
for ( let i in numbers){
    if (i % 2 === 0){
        console.log(numbers[i])
    }
};

// while

let i = 20;
console.log('1.while')
while(i <= 32){
    console.log(i);
    i += 2;
};

// do while

i = 20;
console.log('1.do while')
do {
    console.log(i);
    i += 2;
    
} while(i <= 32);
  
// 2. Створіть масив зі списком:вашого улюбленого фрукту, вашого улюбленого кольору, ім'я, рандомного числа, вашого віку.
// Виведіть цей проітерований масив на консоль і визначте його тип даних.
let list1 = [
    {fruit: 'mango'},
    {color: 'pink'},
    {name: 'Alina'},
    {number: 123},
    {age: 26},
];

// for

console.log('2.for')
for(let item = 0; item < list1.length; item++){
    console.log(list1[item], typeof list1[item])
};

// for of

console.log('2.for of')
for (let item1 of list1){
    console.log((item1), typeof item1) 
};

// for in

console.log('2.for in')
for (let item3 in list1){   
    console.log(list1[item3], typeof list1[item3])
};

// while

console.log('2.while')
i = 0;
while(i < list1.length){
    console.log(list1[i], typeof list1[i]);
    i++;
};

// do while

console.log('2.do while')
let i1 = 0;
do {
    console.log(list1[i1], typeof list1[i1]);
    i1++;
    
} while(i1 < list1.length);

// 3. Напишіть цикл який виводить всі непарні числа від 17 до 39.

// for

console.log('3.for')
for (let i = 17; i <= 39; i = i + 2){
    console.log(i)
};

let numbers3 = [17, 18, 19, 20, 21, 22, 23, 24, 25, 26, 27, 28, 29, 30, 31, 32, 33, 34, 35, 36, 37, 38, 39];

// for of

console.log('3.for of')
for (let i of numbers3){
    if (i % 2 === 1)
    console.log(i) 
};

// for in

console.log('3.for in')
for ( let i in numbers3){
    if (i % 2 === 0){
        console.log(numbers3[i])
    }
};

// while

console.log('3.while')
i = 17;
while(i <= 39){
    console.log(i);
    i += 2;
};

// do while

console.log('3.do while')
i = 17;
do {
    console.log(i);
    i += 2;
    
} while(i <= 39);

// 4. Даний масив, виведіть парні елементи

let A = [1, 5, true, 'hello', false, null, 'iiii', 54, null];

// for

console.log('4.for')
for (let i = 0; i < A.length; i++){
    if (i % 2 === 0) {
        console.log(A[i])
    }
};

// for of

console.log('4.for of *ERROR*')
// for (let i of A){
//     if (i % 2 === 0){
//         console.log(i)
//     }
// };

// for in

console.log('4.for in')
for (let i in A){
    if ([i] % 2 === 0){
        console.log(A[i])
    }
};

// while

console.log('4.while')
i = 0
while(i < A.length){
    console.log(A[i]);
    i += 2;
};

// do while

console.log('4.do while')
i = 0;
do {
    console.log(A[i]);
    i += 2;
} while(i < A.length)

// // // 5. Даний масив, виведіть не парні елементи
let B = [1, 5, true, 'hello', false, null, 'iiii', 54, null];

// for

console.log('5.for')
for (i = 0; i < B.length; i++){
    if (i % 2 === 1) {
        console.log(B[i])
    }
};

// for of

console.log('5.for of *ERROR*')
// for (let i of B){
//     if (i % 2 === 0) {
//         console.log(i)
//     }  
// }

// for in

console.log('5.for in')
for (let i in B){
    if ([i] % 2 === 0){
        console.log(B[i])
    }
};

// while

console.log('5. while')
i = 0;
while(i < B.length){
    console.log(B[i]);
    i += 2;
};

// while

console.log('5.do while')
i = 0;
do {
    console.log(B[i]);
    i += 2;
} while(i < B.length)

// // 6. Даний масив. Виведіть суму всіх  елементів масиву.

let C = [1, 2, 4, 2, 3, 55, 66, 777, 12];

// for

console.log('6.for')
let C1 = 0;
for (i = 0; i < C.length; i++){
    C1 += C[i]
};
console.log(C1);

// for of

console.log('6.for of')
C1 = 0;
for (let i of C) {
    C1 += i;
};
console.log(C1);

// for in

console.log('6.for in')
C1 = 0;
for (let i in C){
    C1 += C[i]
};
console.log(C1);

// while

console.log('6.while')
C1 = 0;
i = 0;
while (i < C.length){
    C1 += C[i];
    i ++;
};
console.log(C1);

// do while

console.log('6.do while')
C1 = 0;
i = 0;
do {
    C1 += C[i];
    i ++;
} while (i < C.length);
console.log(C1);

// // // 7. Даний масив. Перемножити та вивести всі елементи масиву.

let D = [1, 2, 4, 2, 3, 5, 6, 7, 1];

// for 

console.log('7.for')
let D1 = 1;
for (i = 0; i < D.length; i++){
    D1 *= D [i];
};
console.log(D1);

// for of

console.log('7.for of')
D1 = 1;
for (let i of D){
    D1 *= i;
};
console.log(D1);

// for in
console.log('7.for in')
D1 = 1;
for (let i in D){
    D1 *= D[i];
};
console.log(D1);

// while

console.log('7.while')
D1 = 1;
i = 0;
while (i < D.length){
    D1 *= D[i];
    i ++;
};
console.log(D1);

// do while

console.log('7.do while')
D1 = 1;
i = 0;
do{
    D1 *= D[i];
    i ++;
} while (i < D.length);
console.log(D1);

// 8. Створіть prompt в якому потрібно проітерувати число з 0. 
//    Якщо це числа 5, 6, 7, 8, 9, 10 то пропустити ітерацію.
//    Якщо це числа 100 і більше, завершити ітерацію.
