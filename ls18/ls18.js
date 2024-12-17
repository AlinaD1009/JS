// 1. Через функцію конструктор створити об'єкт People з полями:
//    name, f_name, old, isMarried, hasPossition, children
//    Вивести об'єкт в консоль.
console.log(1);

function People(name, f_name, old, isMarried, hasPossition, children) {
    this.name = name;
    this.f_name = f_name;
    this.isMarried = isMarried;
    this.hasPossition = hasPossition;
    this.children = children;
}

let person = new People('Alina', 'Dirkach', 26, false, 'Magazynier', 0);

console.log(person);
// 2. Через прототайп створити власні методи масивів: filter, find, includes, join, slice
console.log(2);

let arr = [1, 14, 22, true, 'job', 123, 140, 150];
console.log(arr);

// filter
console.log('2.1 filter (arr > 100)');
Array.prototype.myFilter = function() {
    const newArr = [];
    for (let i = 0; i < this.length; i++){
        if(this[i] > 100) { 
            newArr.push(this[i])
        }
    }
    return newArr;
}
console.log(arr.myFilter());

// find
console.log('2.2 find');
Array.prototype.myFind = function() {
    for (let i = 0; i < this.length; i++) {
        if (this[i] === 123) {
            return this[i]; 
        }
    }
};
console.log(arr.myFind()); 

// includes
console.log('2.3 includes ("job")');
Array.prototype.myIncludes = function() {
    const result = 'job';
    for (let i = 0; i < this.length; i++) {
        if (this[i] === result) {
            return true;
        }
    }
}
console.log(arr.myIncludes());

// join
console.log('2.4 join');
Array.prototype.myJoin = function(sep = '; ') {
    let result = '';
    for (let i = 0; i < this.length; i++){
        result += this[i];
        if (i < this.length){
            result += sep;
        }
    }
    return result;
}
console.log(arr.myJoin());  

//slice
console.log('2.5 slice');
Array.prototype.mySlice = function(start = 0, end = this.length){
    let result = [];
    for (i = start; i < end && i < this.length; i++) {
        result.push(this[i]);
    }
    return result;
}

console.log(arr.mySlice(3,5));






// 3. Через функцію конструктор створити об'єкт Car з полями:
//    name, model, year, isNew, cost, wheels
//    Вивести об'єкт в консоль.
console.log(3);
    
function Car(name, model, year, isNew, cost, wheels){
    this.name = name;
    this.model = model;
    this.year = year;
    this.isNew = isNew;
    this.cost = cost;
    this.wheels = wheels;
}

let auto = new Car('Citroën', 'C1', 2009, false, 10000, 4)

auto.cost = 9500;

console.log(auto);

// 4. Через функцію конструктор створити об'єкт Animal, створити мінімум 3 поля,
//    та додати через прототайп поведінку для об'єкту (мінімум 2 методи).
console.log(4);

function Animal(name, paws, tail){
    this.name = name;
    this.paws = paws;
    this.tail = tail;
}

let cat = new Animal('Teya', 4, 'fluffy');

Animal.prototype.makeSound = function(){
    console.log('Make sounds');   
}

Animal.prototype.move = function(){
    console.log('Walk on paws'); 
}

console.log(cat);
cat.makeSound();
cat.move();

// 5. Створити об'єкт Dog, через прототип унаслідувати поведінку від об'єкту Animal
//    та додати власну поведінку (мінімум 2 методи).
console.log(5);

function Dog(name){
    this.name = name;
    this.paws = 4;
    this.tail = true;
}

// Dog.prototype = {...Animal.prototype}

// Dog.prototype.bringSomething = function(){
//     console.log('Bring slippers');
// }

// Dog.prototype.guardHouse = function(){
//     console.log('Guard the house');
// }

Dog.prototype = {
    ...Animal.prototype,

    bringSomething() {
        console.log('Bring slippers');
    },
    guardHouse(){
        console.log('Guard the house');
    }
}

let dog = new Dog('Ralph');

console.log(dog);
dog.makeSound();
dog.move();
dog.bringSomething();
dog.guardHouse();

