// Переписати колбек функцію з лекції.

// Backend
function clearHouse(isClean, callb) {
    console.log('House start');
    
    setTimeout(() => {
        const salary = 500;

        if (isClean){
            callb(null, salary)
        } else {
            callb('House is not cleared', 0)
        }
    }, 2000)
}

function shop(money, callb){
    console.log('Shop start');
    setTimeout(() => {
        const costOfJeans = 100;

        if(costOfJeans <= money) {
            const rest = money - costOfJeans;
            callb(null, rest)
        } else {
            callb('Need more money', money)
        }
    }, 1000)
}


function mac(money, callb){
    console.log('Mac start');
    setTimeout(() =>{
        const costOfBurger = 100;

        if(costOfBurger <= money) {
            const rest = money - costOfBurger;
            callb(null, rest)
        } else {
            callb('Need more money', money)
        }
    }, 1000)
}


// Frontend
clearHouse(true, (error, salary) => {
    if (!error){
        console.log('Hooray!', salary);  

        shop(salary, (errorShop, restOfShop) => {
            if (!errorShop) {
                console.log('I bought jeans!', restOfShop);

                mac(restOfShop, (errorMac, restOfMac) => {
                    if(!errorMac) {
                        console.log('Yammy Yammy', restOfMac); 
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
                    } else {
                        console.log(errorMac, restOfMac);    
                    }
                }) 
            } else {
                console.log(errorShop, restOfShop); 
            }
        }) 
    } else {
        console.log('(((((', error, salary);
    }
})
 

//// Написати таку ж колбек функцію за логікою: writeProgram => buyKeyboard => visitCinema 

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

// // Frontend
// writeProgram(true, (error, salary) => {
//     if (!error){
//         console.log("I'm cool! I wrote the program!!", salary);  

//         buyKeyboard(salary, (errorKeyboard, restOfKeyboard) => {
//             if (!errorKeyboard) {
//                 console.log("I bought Keyboard!", restOfKeyboard);

//                 visitCinema(restOfKeyboard, (errorCinema, restOfCinema) => {
//                     if(!errorCinema) {
//                         console.log("It's amazing movie!!!", restOfCinema);  
//                     } else {
//                         console.log(errorCinema, restOfCinema);    
//                     }
//                 }) 
//             } else {
//                 console.log(errorKeyboard, restOfKeyboard); 
//             }
//         }) 
//     } else {
//         console.log('(((((', error, salary);
//     }
// })