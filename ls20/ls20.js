// 1. Через клас створити об'єкт People який всі дані отримує ззовні з полями:
//    name, f_name, old, isMarried, hasPossition, children
//    Вивести об'єкт в консоль.
console.log(1);
class People{
    constructor(name, f_name, old, isMarried, hasPossition, children) {
        this.name = name;
        this.f_name = f_name;
        this.old = old;
        this.isMarried = isMarried;
        this.hasPossition = hasPossition;
        this.children = children;
    }
};

let person = new People('Johnny', 'Depp', 61, false, 'actor', 2);
console.log(person);

// 2. Через клас shortWork створити власні методи масивів всередині класу: filter, find, includes, join, slice


// 3. Через клас створити об'єкт Car який всі дані отримує ззовні  з полями:
//    name, model, year, isNew, cost, wheels
//    Вивести об'єкт в консоль.
console.log(3);
class Car {
    constructor(name, model, year, isNew, cost, wheels){
        this.name = name;
        this.model = model;
        this.year = year;
        this.isNew = isNew;
        this.cost = cost;
        this.wheels = wheels;
    }
};

let auto = new Car('Lightning McQueen', 'Dodge Viper', 2006, true, 1000, 4);
console.log(auto);


// 4. Через клас створити об'єкт Animal який отримує дані ззвоні, створити мінімум 3 поля,
//    та додати через прототайп поведінку для об'єкту (мінімум 2 методи).
console.log(4);
class Animal{
    constructor(name, age, color){
        this.name = name;
        this.age = age;
        this.color = color;
    }
};

Animal.prototype.move = function () {
    console.log('I walk on my paws');
};

Animal.prototype.eat = function () {
    console.log('I eat');
};

let bear = new Animal('Teddy', 3, 'brown')
console.log(bear);
bear.move();
bear.eat();

// 5. Створити клас Dog, через прототип унаслідувати поведінку від класу Animal
//    та додати власну поведінку (мінімум 2 методи).
class Dog extends Animal{
    constructor(name, age, color){
        super(name, age, color);
    }
    
    followСommands(){
        console.log('I know the command to sit!');
    }

    respondName(){
        console.log('I respond to the name!')
    }
};

let animal1 = new Dog('Baron', 5, 'white');
console.log(animal1);
animal1.move();
animal1.eat();
animal1.followСommands();
animal1.respondName();

// 6. Створити клас Poli Який в консоль буде виводити короткий опис того що таке поліморфізм.
console.log(6);
class Poli {
    constructor() {
        this.answer = 'Поліморфізм є ще однією ключовою концепцією ООП, він вказує на здатність обєктів використовувати однаковий інтерфейс для виконання різних дій.';
    }

    Answer() {
        console.log(this.answer);
    }
};

const pol1 = new Poli();
pol1.Answer();

// 7. Привести приклад поліморфізму.
console.log(7);
class Humans {
    greetings(){
        console.log('Hello, I am human!');
    }
};

class Women extends Humans {
    greetings(){
        console.log('Hello, I am woman!');
    }
};

class Men extends Humans {
    greetings(){
        console.log('Hello, I am man!');  
    }
};

function identification(humans) {
    humans.greetings();
};

let female = new Women;
let male = new Men;

identification(female);
identification(male);

// 8. Створити клас Inc Який в консоль буде виводити короткий опис того що таке інкапсуляція.
console.log(8);
class Inc {
    constructor() {
        this.answer = 'Інкапсуляція - це приховування внутрішнього стану та надання можливості працювати зі станом тільки через методи.';
    }

    Answer1() {
        console.log(this.answer);
    }
};

const incaps = new Inc();
incaps.Answer1();

// 9. Створити клас калькурятор на геттерах і сеттерах з діями *, /, +, -, вираховувати степінь, факторіал, корінь
//    Клас повинен містити поле date яке буде обновляти конкретну дату і час використання калькулятора.

