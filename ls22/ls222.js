
// 4. Створіть HTML сторінку, яка записує дату останнього входу користувача у localStorage.
//    При повторному відвідуванні сторінки показуйте дату попереднього входу та оновлюйте її.
const visit = document.getElementById('visit');
const lastVisit = localStorage.getItem('lastVisit');

if (lastVisit) {
    const lastVisitDate = new Date(lastVisit);
    visit.innerText = `Ваш останній візит був: ${lastVisitDate.toLocaleString()}`;
} else {
    visit.innerText = 'Це ваш перший візит!';
};

const currentVisit = new Date().toISOString();
localStorage.setItem('lastVisit', currentVisit);

// 5. Створіть список завдань (to-do list масив з полями title, date, describe, isDone),
//    який зберігається в localStorage у форматі JSON.
//    Створіть фунції які зможуть: додавати, видаляти й відмічати завдання як виконані.
let tasks = JSON.parse(localStorage.getItem('tasks')) || [];

function save() { localStorage.setItem('tasks', JSON.stringify(tasks)); render(); }
function addTask() { 
    tasks.push({ title: title.value, date: date.value, describe: describe.value, isDone: false }); 
    save(); 
}
function toggleTask(i) { tasks[i].isDone = !tasks[i].isDone; save(); }
function deleteTask(i) { tasks.splice(i, 1); save(); }
function render() {
    taskList.innerHTML = tasks.map((t, i) => `<li ${t.isDone ? 'style="text-decoration: line-through;"' : ''}>
        ${t.title} - ${t.date} - ${t.describe} 
        <button onclick="toggleTask(${i})">Done</button>
        <button onclick="deleteTask(${i})">Delete</button></li>`).join('');
}
render();

// 6. Реалізуйте таймер сесії, який показує, скільки часу користувач провів на сторінці.
//    Час початку сесії зберігайте у sessionStorage, і при оновленні сторінки він має продовжувати відлік.