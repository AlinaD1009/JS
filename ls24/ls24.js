// 1. Створити 2 кубіка, при кліку на перший: другий повинен змінювати свій колір на рандомний.
const kub1 = document.getElementById('kub1');
const kub2 = document.getElementById('kub2');

// kub1.onclick = () => {
//     const r = Math.floor(Math.random()*256);
//     const g = Math.floor(Math.random()*256);
//     const b = Math.floor(Math.random()*256);
//     kub2.style.backgroundColor = `rgb(${r},${g},${b})`;  
// };

kub1.addEventListener('click', () => {
    const r = Math.floor(Math.random()*256);
    const g = Math.floor(Math.random()*256);
    const b = Math.floor(Math.random()*256);
    kub2.style.backgroundColor = `rgb(${r},${g},${b})`; 
});

// 2. Створити текстовий блок, при спробі його скопіювати покажіть користувачу вікно "Текст неможливо скопіювати!!".
const lor = document.getElementById('lorem');

lor.addEventListener('copy', (event) => {
    event.preventDefault();
    alert('This text cannot be copied!');
});

// 3. Створити кубік 100х100 який міняє свій колір в залежності від того на яких координатах ви знаходитесь 
// (r - X координата, g - Y координата, b - середнє арифметичне X+Y/2).
const kubik = document.getElementById('kubik');

kubik.addEventListener('mousemove', (event) => {
    const rect = kubik.getBoundingClientRect();
    const x = event.clientX - rect.left;               
    const y = event.clientY - rect.top;                 
    const r = Math.round((x / rect.width) * 255);
    const g = Math.round((y / rect.height) * 255);
    const b = Math.round((r + g) / 2);

    kubik.style.backgroundColor = `rgb(${r}, ${g}, ${b})`;
});

// 4. Створіть 3 кубіка один в одному які будуть при кліку виводити щось про себе в консоль.
const k = document.getElementById('k');
const k1 = document.getElementById('k1');
const k2 = document.getElementById('k2');

k.onclick = (event) => {
    event.stopPropagation()
    console.log('Its red kub');
};

k1.onclick = (event) => {
    event.stopPropagation()
    console.log('Its orange kub');
};

k2.onclick = (event) => {
    event.stopPropagation()
    console.log('Its yellow kub');
};

// 5. Створіть ще 3 кубіка які є один в одному, змініть напрямок виконання івенту, 
// зупиніть виконання івентів на другому івенті (Див. лекцію).
const c = document.getElementById('c')
const c1 = document.getElementById('c1')
const c2 = document.getElementById('c2')

c.addEventListener('click', () => {
    console.log('Its blue kub');
}, true);

c1.addEventListener('click', (event) => {
    event.stopPropagation()
    console.log('Its lightblue kub');
}, true);

c2.addEventListener ('click', () => {
    console.log('Its white kub');
}, true);

// 6. Використайте будь яку форму з домашної про форми (в модулі HTML\CSS), та отримайте дані з неї у вигляді об'єкту,
//    виведіть об'єкт форми в консоль. Відмініть поведінку за замовчуванням для кнопки submit у формі (Див. лекцію). 
document.getElementById('myFirstform').addEventListener('submit', function(event) {
    event.preventDefault();

    const formData = new FormData(this); 
    const formObject = Object.fromEntries(formData.entries()); 

    console.log(formObject);
});


