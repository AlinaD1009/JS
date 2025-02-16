// 1. Зробити сторінку із довільним контентом і переходами на 3 сторінки:
//    users
//    posts
//    comments

// 2. На сторінці users вивести в html список юзерів через fetch та XMLHttpRequest. 
//    Стилізувати відповідним чином. 
//    https://jsonplaceholder.typicode.com/users

const getUserBtn = document.getElementById('getUserBtn'); 
const userIdInput = document.getElementById('userId');
const userDetails = document.getElementById('userDetails'); 

// fetch
getUserBtn.addEventListener('click', () => {
    const userId = userIdInput.value; 
    if (userId) {
        fetch(`https://jsonplaceholder.typicode.com/users/${userId}`)
            .then(response => response.json())
            .then(user => {
                console.log(user); 
                userDetails.innerHTML = '';
                const userDiv = document.createElement('div');
                userDiv.classList.add('userStyle');
                userDiv.innerHTML = `
                    <h3>${user.name}</h3>
                    <p><strong>ID:</strong> ${user.id}</p>
                    <p><strong>Email:</strong> ${user.email}</p>
                    <p><strong>Phone:</strong> ${user.phone}</p>
                    <p><strong>Website:</strong> ${user.website}</p>
                `;
                userDetails.appendChild(userDiv);
            })
            .catch(error => {
                userDetails.innerHTML = '<p>Користувача не існує.</p>';
            });
    } else {
        userDetails.innerHTML = '<p>Введіть ID користувача.</p>';
    };
});

// // XMLHttpRequest
// getUserBtn.addEventListener('click', () => {
//     const userId = userIdInput.value;
//     if (userId) {
//         const xhr = new XMLHttpRequest();
//         xhr.open('GET', `https://jsonplaceholder.typicode.com/users/${userId}`);
//         xhr.send();
//         xhr.onload = function () {
//             if (xhr.status >= 200 && xhr.status < 300) {
//                 const user = JSON.parse(xhr.responseText); 
//                 console.log(user); 
//                 userDetails.innerHTML = '';
//                 const userDiv = document.createElement('div');
//                 userDiv.classList.add('userStyle');
//                 userDiv.innerHTML = `
//                     <h3>${user.name}</h3>
//                     <p><strong>ID:</strong> ${user.id}</p>
//                     <p><strong>Email:</strong> ${user.email}</p>
//                     <p><strong>Phone:</strong> ${user.phone}</p>
//                     <p><strong>Website:</strong> ${user.website}</p>
//                 `;
//                 userDetails.appendChild(userDiv);
//             } else {
//                 userDetails.innerHTML = '<p>Користувача не існує.</p>';
//             };
//         };
//     } else {
//         userDetails.innerHTML = '<p>Введіть ID користувача.</p>';
//     };
// });

