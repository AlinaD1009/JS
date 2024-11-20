// Recursion

const array = [1, null, true, 11, 0];

for (let a = 0; a < array.length-1; a++) {
    console.log(array[a]);

}

function recursionArray(arr, i = 0){
    if (arr.length > i){
        console.log(arr[i]);
        recursionArray(arr, ++i)
        
    }
}

recursionArray(array)
recursionArray([1, 2, 3, 4, 5, 6])

function recursionArray(arr, i = 0){
    if (arr.length > i) return;

    console.log(arr[i]);
    recursionArray(arr, i++)
    
}

// Closures

function stepper(){
    var num = 0;

    function dec(){
        num++;
    }

    function inc(){
        num--;
    }

    function getNum(){
        return num;
    }

    return{
        dec: dec,
        inc: inc,
        getNum: getNum
    }
}

let objStepper = stepper();

console.log(objStepper);

objStepper.dec();

console.log(objStepper.getNum());


// Callback

function clearHouse(isClean, callb){
    if(isClean){
        callb(200);
    } else {
        console.log('Should clear before get money!!!')
    }
}

function shop(money, callb){
    const priceOfJeans = 40;

    if (money >= priceOfJeans){
        const rest = money - priceOfJeans;
        callb(rest);
    } else {
        callb('Not enough money')
    }
}

function mac(money, callb){
    const priceOfBurger = 100;

    if (money >= priceOfBurger) {
        const rest = money - priceOfBurger;
        callb(rest)
    } else {
        callb('Not enough money')
    }
}

clearHouse(true, (response) => {
    if (typeof response === 'number'){
        console.log('Hooray! I got money!');

        shop(response, (restJeans) => {
            if (typeof restJeans === 'number'){
                console.log('Hooray! I bought jeans! I have rest: ', restJeans)

                mac(restJeans, (restBurger) =>{
                    if (typeof restBurger === 'number'){
                        console.log('Yummy, yummy!!! I have: ', restBurger);   
                    } else {
                        console.log('I will hangry all day!');
                        
                    }
                })
            } else {
                console.log('Salary is too low');  
            }
        }) 
    } else{
        console.log('Bad luck');
    }
})