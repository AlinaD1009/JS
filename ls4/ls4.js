// 1. Перевести тип і в консоль вивести результат через typeof:
let A = 'Hello';
A = Boolean(A);
console.log(A, typeof A);

let B = 123;
B = Boolean(B);
console.log(B, typeof B);

let C = '123';
C = Number(C);
console.log(C, typeof C);

let D = null;
D = Boolean(D);
console.log(D, typeof D);

let E = undefined;
E = Boolean(E);
console.log(E, typeof E);

// 2. Створити об'єкт* user із 3 рівнями вкладеностей (на кожному рівні не менше 3 поля)
let user = {
    fname: 'George',
    lname: 'Doe',
    age: 23,
    userCar: {
        name: 'Toyota',
        color: 'Black',
        year: 2016,
    },
    userPet: { 
        animal: 'dog',
        name: 'Ralf',
        breed: 'Сorgi'
    }
};

//2.1  Вивести на 2 рівні 1 поле, та на 3 рівні 2 поля в консоль
console.log(user.userCar.name);
console.log(user.userPet.animal, user.userPet.name);

// 3. Створити масив* list із 3 рівнями вкладеності (на кожному рівні не менше 3 елементів)
let list = [
    ['Jone', 30,'racer'],            //0
    // 0      1      2
    ['Jane', 21, 'ballerina'],       //1
    ['Michael', 35, 'businessman']   //2
];

// 3.1 Вивести на 2 рівні 1 елемент, та на 3 рівні 2 елемента в консоль
console.log(list[1][0]);
console.log(list[2][1], list[2][2]);

// 4. Напишіть цикл for, який виводить всі парні числа від 2 до 20.

for (let a = 2; a <= 20; a = a + 2){
    console.log(a)
}

// 5. Створіть масив зі списком вашого улюбленого фрукту, вашого улюбленого кольору, і вашого віку.
//    Виведіть цей масив на консоль і визначте його тип даних.
let list2 = [['pear'], ['orange'], [26]];

console.log(list2, typeof list2);
console.log(list2[0][0], typeof[0]);
console.log(list2[1][0], typeof[1]);
console.log(list2[2][0], typeof[2]);

// 6. Напишіть 2 prompt які приймають два числа. виведіть більше з них. Використайте конструкцію if-else.
let num1 = prompt('Введите двузначное число');
let num2 = prompt('Введите еще одно двузначное число');

if  (num1 > num2){              
    console.log(num1);
} else {
    console.log(num2);
};

// 7. Напишіть цикл for який виводить всі непарні числа від 1 до 15.
for (let b = 1; b <= 15; b = b + 2){
    console.log(b)
};

// 8. Даний масив, виведіть парні елементи.
let A1 = [1, 5, true, 'hello', false, null, 'iiii', 54, null];
for (i = 0; i < A1.length; i++){
    if (i % 2) {
        console.log(A1[i])
    }
};

// 9. Даний масив, виведіть не парні елементи.
let A2 =[1, 5, true, 'hello', false, null, 'iiii', 54, null];
for (i = 0; i < A2.length; i++){
    if (i % 2 == 0) {
        console.log(A2[i])
    }
};

// 10. Виведіть суму всіх  елементів масиву.
let A3 =[1, 2, 4, 2, 3, 55, 66, 777, 12];
let A31 = 0;
for (i = 0; i < A3.length; i++){
    A31 += A3[i];
};
console.log(A31);

// 11. Перемножити та вивести всі елементи масиву.
let A4 =[1, 2, 4, 2, 3, 5, 6, 7, 1];
let A41 = 1;
for (i = 0; i < A4.length; i++){
    A41 *= A4[i];
};
console.log(A41);