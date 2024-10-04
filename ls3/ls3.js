// Приведення / конвертація типів

let A = 'Hello'
A = Boolean(A)
console.log(A, typeof A)

let B = 123
B = String(B)
console.log(B, typeof B)

let C = '123'
C = Number(C)
console.log(C, typeof C)

let D = null
D = Boolean(D)
console.log(D, typeof D)

let E = undefined
E = Boolean(E)
console.log(E, typeof E)



const con1 = confirm('Confirm?')

if  (con1){              
    console.log('You confirmed popup');
} else {
    console.log('Confirm Error');
}

// Ternary operator
con1 ? console.log('You confirmed popup') : console.log('Confirm Error');



// If Else opetator
const age = prompt('How old are you?');

if  (age > 1, age < 12) {              
    console.log('You are child');
} else if(age > 12, age < 18) {
    console.log('You are teenager');
} else if(age > 18, age < 60) {
    console.log('You are adult person');
} else{
    console.log('You are so old');
}



// Switch operator
const name = prompt('Who are you?');

switch(name){
    case 'Admin': console.log('Im have full access');
    break;
    case 'Student': console.log('Im student');
    break;
    case 'Teacher': console.log('Im teacher');
    break;
    case 'Young': console.log('Im young and ready to party');
    break;
    default: console.log('You entered own name');

}



// <, >, >=, <=, ==, ===, !=, !==, ||, &&

let A1 = true;
name = 'Alina';
age = 26;

// if (age > 18, age < 30 && name != 'Alisa' && A1 === true){
//     console.log('Its correct!')
// }

// if (age >= 18, age <= 30 && name !== 'Alisa' && A1 == true){
//     console.log('Its okay!')
// }

if (age >= 26 || name !== 'Alina'){
    console.log('Its awesome!')
}
