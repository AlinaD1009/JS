// 1. Зробити сторінку із довільним контентом і переходами на 3 сторінки:
//    users
//    posts
//    comments

// 2. На сторінці users вивести в html список юзерів через fetch та XMLHttpRequest. 
//    Стилізувати відповідним чином. 
//    https://jsonplaceholder.typicode.com/users

const usersDOM = document.getElementById('users');

// fetch
// fetch('https://jsonplaceholder.typicode.com/users').then(response => {
//     console.log(response);
//     return response.json();
// }).then(users => {
//     console.log(users);

//     users.forEach((user, i) => {
//         const newUserDiv = document.createElement('div');
//         newUserDiv.classList.add('userStyle');

//         newUserDiv.innerHTML = `${user.id}. ${user.name} - ${user.email}`;
//         usersDOM.appendChild(newUserDiv);
//     });  
// });

// XMLHttpRequest

const getUser = new XMLHttpRequest();
getUser.open('GET', 'https://jsonplaceholder.typicode.com/users');
getUser.send();

getUser.onload = ({target: {response}}) => {
    const users = JSON.parse(response);
    console.log(users);   

    users.forEach(user => {
        const newUserDiv = document.createElement('div');
        newUserDiv.classList.add('userStyle');

        newUserDiv.innerHTML = `${user.id}. ${user.name} - ${user.email}`;
        usersDOM.appendChild(newUserDiv);
    }); 
};