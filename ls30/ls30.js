// - Перепишіть код по колбекам (лекція де було clearHouse) використовуючи функції генератори

function* clearHouse(isClean) {
    if (isClean) {
        yield 200;
    } else {
        console.log('Should clear before get money!!!');
        return;
    }
}

function* shop(money) {
    const priceOfJeans = 40;
    if (money >= priceOfJeans) {
        yield money - priceOfJeans;
    } else {
        yield 'Not enough money';
    }
}

function* mac(money) {
    const priceOfBurger = 100;
    if (money >= priceOfBurger) {
        yield money - priceOfBurger;
    } else {
        yield 'Not enough money';
    }
}

function go() {
    const houseGen = clearHouse(true);
    const money = houseGen.next().value;
    
    if (typeof money === 'number') {
        console.log('Hooray! I got money!');
        
        const shopGen = shop(money);
        const restJeans = shopGen.next().value;
        
        if (typeof restJeans === 'number') {
            console.log('Hooray! I bought jeans! I have rest: ', restJeans);
            
            const macGen = mac(restJeans);
            const restBurger = macGen.next().value;
            
            if (typeof restBurger === 'number') {
                console.log('Yummy, yummy!!! I have: ', restBurger);
            } else {
                console.log('I will be hungry all day!');
            }
        } else {
            console.log('Salary is too low');
        }
    } else {
        console.log('Bad luck');
    }
}

go();


// - Напишіть регулярний вираз (Цифри від 1 до 5, літери від A до F великі і малі і довжина рядка не більше 9 символів)
//   та через input валідуйте його (результат виводьте на екран)

// /^[1-5A-Fa-f]{1,9}$/ Принимает цифры 1-5, буквы A-F (верхний и нижний регистр).Максимальная длина строки 9 символов.

const textInput = document.getElementById('textInput');
const result = document.getElementById('result');
const regex = /^[1-5A-Fa-f]{1,9}$/; 

textInput.addEventListener('input', () => {
    if (regex.test(textInput.value)) {
        result.textContent = 'Введений код коректний';
        result.className = 'valid';
    } else {
        result.textContent = 'Неправильний формат';
        result.className = 'invalid';
    }
});