
// Повторіть 14 та 15 домашні завдання (ті які стосуються функціонального програмування), та використовуйте 
// Rest/Spread оператори. Деструктиризацію

// 1 (spread оператор, деструктиризація)
function clearHouse(isClean, callb) {
    if (isClean) {
        callb(...[200]);                                      
    } else {
        console.log("Should clear before get money!!!");
    }
}

function shop(money, callb) {
    const priceOfJeans = 40;

    if (money >= priceOfJeans) {
        const rest = money - priceOfJeans;
        callb(...[rest]);                                     
    } else {
        callb(...["Not enough money"]);
    }
}

function mac(money, callb) {
    const priceOfBurger = 100;

    if (money >= priceOfBurger) {
        const rest = money - priceOfBurger;
        callb(...[rest]);
    } else {
        callb(...["Not enough money"]); 
    }
}


clearHouse(true, (...response) => {
    const [salary] = response; 
    if (typeof salary === "number") {
        console.log("Hooray! I got money!");

        shop(...[salary], (...restJeans) => {
            const [restAfterJeans] = restJeans;
            if (typeof restAfterJeans === "number") {
                console.log("Hooray! I bought jeans! I have rest: ", restAfterJeans);

                mac(...[restAfterJeans], (...restBurger) => {
                    const [restAfterBurger] = restBurger; 
                    if (typeof restAfterBurger === "number") {
                        console.log("Yummy, yummy!!! I have: ", restAfterBurger);
                    } else {
                        console.log("I will hangry all day!");
                    }
                });
            } else {
                console.log("Salary is too low");
            }
        });
    } else {
        console.log("Bad luck");
    }
});

console.log(2);

// 2 (Rest оператор, деструктиризація)

function writeProgram(isWrite, callb) {
    console.log("I do my work");
    const mySalary = 10000;

    if (isWrite) {
        callb(null, mySalary); 
    } else {
        callb("The program has not been written");
    }  
}

function buyKeyboard(money, callb) {
    console.log("I'm buying keyboard");
    const costOfKeyboard = 1000;

    if (costOfKeyboard <= money) {
        const rest = money - costOfKeyboard;
        callb(null, rest); 
    } else {
        callb("Need more money", money);
    }
}

function visitCinema(money, callb) {
    console.log("I'm watching movie");
    const costOfTicket = 300;

    if (costOfTicket <= money) {
        const rest = money - costOfTicket;
        callb(null, rest); 
    } else {
        callb("Need more money", money);
    }  
}

writeProgram(true, (error, salary) => {
    if (!error) {
        console.log("I'm cool! I wrote the program!!", salary);

        buyKeyboard(salary, (errorKeyboard, ...restOfKeyboard) => {  
            if (!errorKeyboard) {
                const [rest] = restOfKeyboard;  
                console.log("I bought Keyboard!", rest);

                visitCinema(rest, (errorCinema, ...restOfCinema) => { 
                    if (!errorCinema) {
                        const [finalRest] = restOfCinema; 
                        console.log("It's amazing movie!!!", finalRest);
                    } else {
                        console.log(errorCinema, restOfCinema);
                    }
                });
            } else {
                console.log(errorKeyboard, restOfKeyboard);
            }
        });
    } else {
        console.log("(((((", error, salary);
    }
});

// Приведіть 10 самостійних прикладів з копіюванням масивів/обєктів (5 масивів (2 багаторівневе), 5 об'єктів (2 багаторівневе))
console.log(1); 
const arr = [1, 3, 5, true, null, false];
const copArr = [...arr];
console.log(copArr); 

console.log(2); 
const arr2 = [2, true, undefined, null, 123, 456, false];
const copArr2 = arr2.slice();
console.log(copArr2);  

console.log(3); 
const copArr3 = [...arr, ...arr2];
console.log(copArr3);  

console.log(4);
const arr4 = [ 1, [4, 6], 2, 8,[true]];
const copArr4 = [...arr4];
console.log(copArr4);  

console.log(5);
const arr5 = [false,[1, 3], null, [1,[true, [23]]]];
const copArr5 = arr5.slice();
console.log(copArr5);  

console.log(6); 
const obj = {name: "Aline", age: 26, city: "Wroclaw"};
const copObj = {...obj};
console.log(copObj);

console.log(7); 
const obj2 = {brand: "Citroën", color: "black", model: "c1"};
const copObj2 = Object.assign(obj2);
console.log(copObj2);

console.log(8); 
let copObj3 = {...obj, ...obj2}
console.log(copObj3);  

console.log(9); 
const obj4 = {name: "Aline", details: {age: 26, city: "Wroclaw"}};
const copObj4 = {...obj4};
console.log(copObj4);
  
console.log(10);  
const obj5 = {brand: "Citroën", details: {color: "black", model: "c1"}};
const copObj5 = Object.assign({}, obj5);
console.log(copObj5);