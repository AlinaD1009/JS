// 1. Зміна стилю елементу: Створіть HTML-сторінку з декількома елементами, такими як кнопки або тексти.
//    Використовуючи JavaScript, змініть стиль одного або декількох елементів 
//    (наприклад, колір фону або розмір шрифту).
const btn = document.querySelector('.btn');
btn.addEventListener('click', function(){
    btn.style.backgroundColor = 'green';
})

const btn2 = document.querySelector('.btn2');
btn2.addEventListener('click', function(){
    btn2.style.backgroundColor = 'red';
})

const btn3 = document.querySelector('.btn3');
btn3.addEventListener('click', function(){
    btn3.style.backgroundColor = 'yellow';
});

// 2. Зміна текстового вмісту: Створіть елементи, які містять текст. 
//    За допомогою JavaScript, змініть текстовий вміст одного або декількох елементів.
const bck = document.querySelector('.click2');
bck.addEventListener('click', function(){
    bck.innerText = 'dont press';
    bck.disabled = true;
});

// 3. Додавання нового елементу: За допомогою JavaScript,
//    додайте 3 нові елемент до DOM-структури.

const newElement = document.createElement('button');
newElement.textContent = 'Rat';

const newElement2 = document.createElement('button');
newElement2.textContent = 'Cat';

const newElement3 = document.createElement('button');
newElement3.textContent = 'Dog';

let dv1 = document.querySelector('div');


dv1.appendChild(newElement)

setTimeout(() => {
    dv1.appendChild(newElement2)
}, 1000);

setTimeout(() => {
    dv1.appendChild(newElement3)
}, 2000);

// 4. Видалення елементу: За допомогою JavaScript, видаліть декілька елементів з DOM.
const newDelElement = document.createElement('button');
newDelElement.textContent = 'click for delete1';
newDelElement.classList = "childDel";

const newDelElement2 = document.createElement('button');
newDelElement2.textContent = 'click for delete2';
newDelElement2.classList = "childDel";

const newDelElement3 = document.createElement('button');
newDelElement3.textContent = 'click for delete3';
newDelElement3.classList = "childDel";

let deleteElements = document.querySelector('.del');
let childDel = document.getElementsByClassName('childDel');

deleteElements.append(newDelElement);
deleteElements.append(newDelElement2);
deleteElements.append(newDelElement3);

const childDelButtons = document.querySelectorAll('.childDel');

childDelButtons.forEach(button => {
    button.addEventListener('click', function() {
        this.remove();
    });
});

// 5. Зміна атрибутів: Створіть елементи, які мають атрибути 
//    (наприклад, "src" для зображення або "href" для посилання).
//    За допомогою JavaScript, змініть атрибути цих елементів.
const firstImage = document.getElementById('img1');
const changeCity = document.querySelector('.change')

changeCity.addEventListener('click', function(){
    firstImage.setAttribute('src', 'https://www.cia-france.com/media/121/presentation-paris_1920x1080.jpg')
    firstImage.setAttribute('alt', 'Paris')
    changeCity.innerText = 'return'
    changeCity.addEventListener('click', function(){
        firstImage.setAttribute('src', 'https://www.studying-in-uk.org/wp-content/uploads/2019/05/study-in-london.jpg')
        firstImage.setAttribute('alt', 'London')
        changeCity.onclick = location.reload()
    })
});

// 6. Сортування списку: Створіть список (наприклад, список <ul>) з декількома пунктами. 
//    Використовуючи JavaScript, відсортуйте цей список в алфавітному порядку.
document.getElementById('sortButton').addEventListener('click', function() {
    const list = document.getElementById('countries');

    const items = Array.from(list.getElementsByTagName('li'));

    items.sort((a, b) => a.textContent.localeCompare(b.textContent));

    items.forEach(item => list.appendChild(item));
});

// 7. Зміна порядку елементів: Створіть декілька елементів. За допомогою JavaScript,
//    змініть порядок цих елементів в DOM.
const mix = document.querySelector('#mix');
const container = document.getElementById('container');
const element1 = document.getElementById('element1');
const element3 = document.getElementById('element3');

mix.addEventListener('click', function(){
    container.insertBefore(element3, element1);
})

// 8. Видалення дочірніх елементів: Створіть батьківський елемент, який містить декілька дочірніх елементів.
//    Використовуючи JavaScript, видаліть всі дочірні елементи цього батьківського елемента.
const delAll = document.getElementById('deleteAll')
const parentDiv = document.querySelector('#parentsElement');
const childElement = document.createElement('button');
childElement.textContent = 'One';

const childElement2 = document.createElement('button');
childElement2.textContent = 'Two';

const childElement3 = document.createElement('button');
childElement3.textContent = 'Three';

parentDiv.appendChild(childElement)
parentDiv.appendChild(childElement2)
parentDiv.appendChild(childElement3)

delAll.addEventListener('click', function(){
    parentDiv.removeChild(childElement)
    parentDiv.removeChild(childElement2)
    parentDiv.removeChild(childElement3)
})

// 9. Зміна класів: Створіть сторінку з елементами, які мають CSS-класи. За допомогою JavaScript, 
// змініть класи цих елементів без використання подій.
const a = document.getElementById('a');
const b = document.getElementById('b');
const c = document.getElementById('c');

a.classList.remove('letters');
b.classList.remove('letters');
b.classList.add('anotherClass');
a.classList.toggle('letters'); // добавит класс если его нету, и удаляет если есть

// 10. Зміна HTML-структури: Створіть сторінку з деревом DOM-структури. 
//     Використовуючи JavaScript, змініть HTML-структуру шляхом додавання нових елементів,
//     переміщення або видалення існуючих елементів.