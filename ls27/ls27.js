// 1. Створіть функцію, яка виводить текст "Hello, World!" в консоль з затримкою у 3 секунди за допомогою setTimeout.
//   Опишіть в console.info, як функція виконується асинхронно.
function sayHelloSetTimeout() {
    setTimeout(() => {
    console.log('Hello, World!');
    }, 3000);

    console.info('Функція викликана, setTimeout встановлює затримку на 3 секунди для виведення Hello, World!. Після 3 секунд виводиться Hello, World!, але інші команди виконуються без зупинки, навіть поки цей таймер працює.');
};
  
sayHelloSetTimeout();

// 2. Створіть промисіфіковані функції, і функцію яка виконує кілька запитів до різних промисифікованих функцій за допомогою
//    - Promise.all
//    - Promise.allSettled
//    - Promice.race
//    - Promice.any
// Промисіфіковані функції

function task1() {
    return new Promise((resolve, reject) => {
        setTimeout(() => {
            resolve("Task 1 complete!");
        }, 2000);
    });
};
  
function task2() {
    return new Promise((resolve, reject) => {
        setTimeout(() => {
            reject("Task 2 failed!");
        }, 3000);
    });
};
  
function task3() {
    return new Promise((resolve, reject) => {
        setTimeout(() => {
        resolve("Task 3 complete!");
        }, 1000);
    });
};

// 1. Promise.all - Всі проміси повинні завершитися успішно. Якщо хоча б один проміс відхилений, буде згенеровано помилку.
console.log('Promise.all');

function executeAll() {
    Promise.all([task1(), task2(), task3()])
    .then((results) => {
        console.log("All tasks completed:", results);
    })
    .catch((error) => {
        console.error("One of the tasks failed:", error);
    });
};
  
// 2. Promise.allSettled - Чекає на завершення всіх промісів незалежно від того, чи були вони успішними або відхиленими.
//  Повертає масив об'єктів із результатами кожного промісу.
console.log('Promise.allSettled');

function executeAllSettled() {
    Promise.allSettled([task1(), task2(), task3()])
    .then((results) => {
        console.log("All tasks settled:", results);
    });
};
  
// 3. Promise.race - Чекає на перший проміс, який завершиться, незалежно від того, чи буде це успішне виконання або помилка.
console.log('Promise.race');

function executeRace() {
    Promise.race([task1(), task2(), task3()])
    .then((result) => {
        console.log("First task completed:", result);
    })
    .catch((error) => {
        console.error("First task failed:", error);
    });
};
  
// 4. Promise.any - Чекає на перший успішний проміс. Якщо всі проміси відхилені, повертається помилка.
console.log('Promise.any');

function executeAny() {
    Promise.any([task1(), task2(), task3()])
    .then((result) => {
        console.log("First successful task completed:", result);
    })
    .catch((error) => {
        console.error("No task succeeded:", error);
    });
}
  
executeAll();
executeAllSettled();
executeRace();
executeAny();
  

// 3. Використовуючи асинхронний код, напишіть програму, 
//    яка виконує певну асинхронну операцію (наприклад, затримка за допомогою setTimeout) декілька разів у циклі.
//    Покажіть, як код виконується асинхронно та управляється з використанням:
//    - async/await
//    - Promise

// async/await: більш сучасний та зручний спосіб обробки асинхронних операцій, що дозволяє писати код, схожий на синхронний, але асинхронний.
console.log('async/await');

function delay(ms) {
    return new Promise(resolve => setTimeout(resolve, ms));
};

async function runWithAsyncAwait() {
    console.info("Using async/await...");
    
    for (let i = 1; i <= 5; i++) {
      console.log(`Start task ${i}`);
      await delay(1000); 
      console.log(`End task ${i}`);
    }
  
    console.log("All tasks completed with async/await");
};
  
runWithAsyncAwait();
  
// Promise: старіший підхід для асинхронного виконання, де ланцюжок промісів керує послідовністю виконання.
console.log('Promise');

function delay(ms) {
    return new Promise(resolve => setTimeout(resolve, ms));
}

function runWithPromise() {
    console.info("Using Promise...");
    
    let task = Promise.resolve();
  
    for (let i = 1; i <= 5; i++) {
        task = task.then(() => {
            console.log(`Start task ${i}`);
            return delay(1000);
        }).then(() => {
            console.log(`End task ${i}`);
        });
    }
  
    task.then(() => {
        console.log("All tasks completed with Promise");
    });
}
  
runWithPromise();
  
// 4. Створіть анімацію об'єкта на веб-сторінці, використовуючи тільки CSS для анімації (наприклад, @keyframes).
//    Потім використайте JavaScript для асинхронного запуску анімації, наприклад, при кліку на кнопку.

document.getElementById('startButton').addEventListener('click', () => {
    const box = document.getElementById('animatedBox');
    box.classList.add('animate');
    box.addEventListener('animationend', () => {
      box.classList.remove('animate');
    });
});
  