// 1. Опирайтесь на код лекцій про колбеки.

// Backend
function writeProgram(isWrite, callb) {
    console.log("I do my work");
    
    setTimeout(() => {
        const mySalary = 10000;

        if (isWrite){
            callb(null, mySalary)
        } else {
            callb("The program has not been written", 0)
        }
    }, 3000)
}

function buyKeyboard(money, callb){
    console.log("I'm buying keyboard");
    setTimeout(() => {
        const costOfKeyboard = 1000;

        if(costOfKeyboard <= money) {
            const rest = money - costOfKeyboard;
            callb(null, rest)
        } else {
            callb("Need more money", money)
        }
    }, 2000)
}


function visitCinema(money, callb){
    console.log("I'm watching movie");
    setTimeout(() => {
        const costOfTiket = 300;

        if(costOfTiket <= money) {
            const rest = money - costOfTiket;
            callb(null, rest)
        } else {
            callb("Need more money", money)
        }
    }, 1000)
}

// Frontend
writeProgram(true, (error, salary) => {
    if (!error){
        console.log("I'm cool! I wrote the program!!", salary);  

        buyKeyboard(salary, (errorKeyboard, restOfKeyboard) => {
            if (!errorKeyboard) {
                console.log("I bought Keyboard!", restOfKeyboard);

                visitCinema(restOfKeyboard, (errorCinema, restOfCinema) => {
                    if(!errorCinema) {
                        console.log("It's amazing movie!!!", restOfCinema);  
                    } else {
                        console.log(errorCinema, restOfCinema);    
                    }
                }) 
            } else {
                console.log(errorKeyboard, restOfKeyboard); 
            }
        }) 
    } else {
        console.log('(((((', error, salary);
    }
})
// 2. Промисифікуйте функції.

// Backend
function writeProgram(isWrite) {
    console.log("I do my work");
    
    return new Promise((resolve, reject) => {
        setTimeout(() => {
            const mySalary = 10000;

            isWrite ? resolve(mySalary) : reject("The program has not been written");
        }, 3000);
    });
}

function buyKeyboard(money) {
    console.log("I'm buying keyboard");

    return new Promise((resolve, reject) => {
        setTimeout(() => {
            const costOfKeyboard = 1000;

            costOfKeyboard <= money ? resolve(money - costOfKeyboard) : reject("Need more money");
        }, 2000);
    });
}

function visitCinema(money) {
    console.log("I'm watching movie");

    return new Promise((resolve, reject) => {
        setTimeout(() => {
            const costOfTiket = 300;

            costOfTiket <= money ? resolve(money - costOfTiket) : reject("Need more money");
        }, 1000);
    });
}

// Frontend
writeProgram(true)
    .then(salary => {
        console.log("I'm cool! I wrote the program!!", salary);
        return buyKeyboard(salary);
    })
    .then(restAfterKeyboard => {
        console.log("I bought Keyboard!", restAfterKeyboard);
        return visitCinema(restAfterKeyboard);
    })
    .then(restAfterCinema => {
        console.log("It's amazing movie!!!", restAfterCinema);
    })
    .catch(error => {
        console.log("Error:", error);
    });

// 3. Викликайте ланцюжок виклку асинхронних функцій через Promise.

// Backend
function writeProgram(isWrite) {
    console.log("I do my work");
    return new Promise((resolve, reject) => {
        setTimeout(() => {
            const mySalary = 10000;
            isWrite ? resolve(mySalary) : reject("The program has not been written");
        }, 3000);
    });
}

function buyKeyboard(money) {
    console.log("I'm buying keyboard");
    return new Promise((resolve, reject) => {
        setTimeout(() => {
            const costOfKeyboard = 1000;
            costOfKeyboard <= money ? resolve(money - costOfKeyboard) : reject("Need more money for keyboard");
        }, 2000);
    });
}

function visitCinema(money) {
    console.log("I'm watching movie");
    return new Promise((resolve, reject) => {
        setTimeout(() => {
            const costOfTiket = 300;
            costOfTiket <= money ? resolve(money - costOfTiket) : reject("Need more money for cinema");
        }, 1000);
    });
}

// Frontend (вызов через цепочку .then)
writeProgram(true)
    .then(salary => {
        console.log("I'm cool! I wrote the program!!", salary);
        return buyKeyboard(salary);
    })
    .then(restAfterKeyboard => {
        console.log("I bought Keyboard!", restAfterKeyboard);
        return visitCinema(restAfterKeyboard);
    })
    .then(restAfterCinema => {
        console.log("It's amazing movie!!!", restAfterCinema);
    })
    .catch(error => {
        console.log("Error:", error);
    });


// 4. Викликайте ланцюжок виклку асинхронних функцій через async/await.
async function main() {
    try {
        const salary = await writeProgram(true);
        console.log("I'm cool! I wrote the program!!", salary);

        const restAfterKeyboard = await buyKeyboard(salary);
        console.log("I bought Keyboard!", restAfterKeyboard);

        const restAfterCinema = await visitCinema(restAfterKeyboard);
        console.log("It's amazing movie!!!", restAfterCinema);
    } catch (error) {
        console.log("Error:", error);
    }
}

main();

// 5. Покажіть приклади використання Promise.all, Promise.allSetlled, Promise.race.