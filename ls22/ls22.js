// 1. Створіть HTML сторінку, яка відображає, скільки разів користувач її відвідував.
//    Використовуйте localStorage для збереження кількості відвідувань.
//    Результат:
//    На сторінці повинно з’являтися щось на кшталт: "Ви відвідали цю сторінку 5 разів."
const visit = document.getElementById('visit');
let visitStorege = localStorage.getItem('visitCount');

if (visitStorege === null) {
    visitStorege = 0;
} else {
    visitStorege = Number(visitStorege);
};
visitStorege += 1;

visit.innerText = `Ви відвідали цю сторінку ${visitStorege} раз.`;
localStorage.setItem('visitCount', visitStorege);
 
// 2. Реалізуйте просту форму входу (2 prompt), де користувач вводить ім'я та пароль.
//    Після входу ім'я користувача зберігається у sessionStorage.
//    На іншій вкладці перевіряйте, чи користувач увійшов (при завантаженні сторінки),
//    і виводьте повідомлення: "Привіт, [Ім'я користувача]".
const username = prompt('Введіть ваше ім`я:');
const password = prompt('Введіть ваш пароль:');
const greetings = document.getElementById('greetings');

if (username && password) {
    sessionStorage.setItem('username', username);
    greetings.innerText = `Привіт, ${username}!`;
} else {
    const usernameStorege = sessionStorage.getItem('username');
    if (usernameStorege) {
        greetings.innerText = `Привіт, ${usernameStorege}!`;
    } else {
        greetings.innerText = 'Ви не увійшли в систему.';
    };
};

// 3. Реалізуйте таймер сесії, який показує, скільки часу користувач провів на сторінці.
//    Час початку сесії зберігайте у cookie при оновленні сторінки він має продовжувати відлік.
// Функція для встановлення cookie



