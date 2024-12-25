// 1. Через функцію конструктор створити об'єкт Car з полями:
//    name, model, old, price, wheels
//    Вивести об'єкт в консоль.
console.log(1);
function Car(name, model, old, price, wheels){
    this.name = name;
    this.model = model;
    this.old = old;
    this.price = price;
    this.wheels = wheels;
};

let car1 = new Car('Mini', 'Couper', 10, 15000, 4)
console.log(car1);

// 2. Через прототайп створити власні методи масивів: some, every, splice
console.log(2);

// 3. Через функцію конструктор створити об'єкт dog з полями:
//    name, model, year, cost
//    Вивести об'єкт в консоль.
console.log(3);
function Dog(name) {
    this.name = name;
    this.model = 'Labrador';
    this.year = 1;
    this.cost = 50;
};

let pet = new Dog('Oliver');
console.log(pet);

// 4. Через функцію конструктор створити об'єкт Parent, створити мінімум 3 поля,
//    та додати через прототайп поведінку для об'єкту (мінімум 2 методи).
console.log(4);
function Parent(name, age, job) {
    this.name = name;           
    this.age = age;            
    this.job = job; 
};

Parent.prototype.greetings = function () {
    console.log('My name is', this.name, 'and I am', this.age, 'years old.');
};

Parent.prototype.workStatus = function () {
    if (this.job) {
        console.log('I have a job!');
    } else {
        console.log('I dont work!');
    }
};

const parent1 = new Parent('Alice', 35, false);
const parent2 = new Parent('Brayan', 38, true);

parent1.greetings();     
parent1.workStatus();  

parent2.greetings();     
parent2.workStatus(); 

// 5. Створити об'єкт Son, через прототип унаслідувати поведінку від об'єкту Parent
//    та додати власну поведінку (мінімум 2 методи).
console.log(5);
function Son(name, age, job) {
    this.name = name;           
    this.age = age;            
    this.job = job; 
};

Son.prototype = {
    ...Parent.prototype,

    study() {
        console.log('I go to school.');
    },
    play(){
        console.log('In my free time I play Minecraft!');
    }
};

const child = new Son('Boby', 7, false);

child.greetings();
child.workStatus();
child.study();
child.play();

// 6. Створити КЛАС People із полями: name, age, isMarried, isChilds, job
//    створити 3 інстанси класу People і вивести їхні поля в консоль.
console.log(6);
class People {
    constructor(name, age, isMarried, isChilds, job) {
        this.name = name;          
        this.age = age;             
        this.isMarried = isMarried; 
        this.isChilds = isChilds;   
        this.job = job;             
    }
};

const person1 = new People('Mark', 30, true, true, 'Programmer');
const person2 = new People('Helena', 25, false, false, 'UGC creator');
const person3 = new People('Jone', 40, true, true, 'Teacher');

console.log(person1);
console.log(person2);
console.log(person3);

// 7. Створити КЛАС Tiger із полями: name, kind, age, speed, wight, height
//    Додатково створити методи: changeName, addAge, changeSpeed, run
//    Вивести поля класу в консоль та використати методи.
console.log(7);

class Tiger {
    constructor(name, kind, age, speed, weight, height) {
        this.name = name;       
        this.kind = kind;       
        this.age = age;         
        this.speed = speed;     
        this.weight = weight;   
        this.height = height;   
    }

    changeName(newName) {
        this.name = newName;
        console.log('Name changed to', this.name);
    }
    addAge(years) {
        this.age += years;
        console.log('Age', this.name, 'changed to', this.age);
    }
    changeSpeed(newSpeed) {
        this.speed = newSpeed;
        console.log('Speed', this.name, 'changed to', this.speed);
    }
    run() {
        console.log(this.name, 'run at a speed of', this.speed, 'km per hour');
    }
};

const tiger1 = new Tiger('Rajah', 'Indian', 5, 60, 220, 1.1);

console.log('Name', tiger1.name);
console.log('Kind', tiger1.kind);
console.log('Age', tiger1.age);
console.log('Speed', tiger1.speed, 'kph');
console.log('Weight', tiger1.weight, 'kg');
console.log('Height', tiger1.height);

tiger1.changeName('Shere Khan');
tiger1.addAge(3);
tiger1.changeSpeed(65);
tiger1.run();

// 8. Перевірити всі створені об'єкти на те чи вони походять від кожного класу (чи ф-ції конструктора),
//    вивести результат в консоль.
console.log(8);

console.log(car1 instanceof Car);

console.log(pet instanceof Car);
console.log(pet instanceof Dog);
console.log(parent1 instanceof Parent);
console.log(parent2 instanceof Son);
console.log(child instanceof Son);
console.log(person1 instanceof People);
console.log(person2 instanceof People);
console.log(person3 instanceof People);
console.log(tiger1 instanceof Tiger);
console.log(tiger1 instanceof People);









