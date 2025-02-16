// 3. На сторінці posts вивести в html список постів через fetch та XMLHttpRequest. 
//    Стилізувати відповідним чином. 
//    https://jsonplaceholder.typicode.com/posts

const getPostBtn = document.getElementById('getPostBtn'); 
const postIdInput = document.getElementById('postId');
const postDetails = document.getElementById('postDetails'); 

// // fetch
// getPostBtn.addEventListener('click', () => {
//     const postId = postIdInput.value; 
//     if (postId) {
//         fetch(`https://jsonplaceholder.typicode.com/posts/${postId}`)
//             .then(response => response.json())
//             .then(post => {
//                 console.log(post); 
//                 postDetails.innerHTML = '';

//                 const postDiv = document.createElement('div');
//                 postDiv.classList.add('userStyle');
//                 postDiv.innerHTML = `
                    // <h3>${post.title}</h3> 
                    // <p><strong>ID:</strong> ${post.id}</p>
                    // <p>${post.body}</p>
//                 `;

//                 postDetails.appendChild(postDiv);
//             })
//             .catch(error => {
//                 console.error(error);
//                 postDetails.innerHTML = '<p>Поста не існує.</p>';
//             });
//     } else {
//         postDetails.innerHTML = '<p>Введіть ID поста.</p>';
//     }
// });


// XMLHttpRequest
getPostBtn.addEventListener('click', () => {
    const postId = postIdInput.value;
    if (postId) {
        const xhr = new XMLHttpRequest();
        xhr.open('GET', `https://jsonplaceholder.typicode.com/posts/${postId}`);
        xhr.send();
        xhr.onload = function () {
            if (xhr.status >= 200 && xhr.status < 300) {
                const post = JSON.parse(xhr.responseText); 
                console.log(post); 
                postDetails.innerHTML = '';
                const postDiv = document.createElement('div');
                postDiv.classList.add('userStyle');
                postDiv.innerHTML = `
                    <h3>${post.title}</h3> 
                    <p><strong>ID:</strong> ${post.id}</p>
                    <p>${post.body}</p>
                `;
                postDetails.appendChild(postDiv);
            } else {
                postDetails.innerHTML = '<p>Пост не існує.</p>';
            };
        };
    } else {
        postDetails.innerHTML = '<p>Введіть ID поста.</p>';
    };
});
