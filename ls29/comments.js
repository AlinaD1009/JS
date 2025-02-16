// 4. На сторінці comments вивести список коментарів через input[type=number] отримувати id коментаря 
//    та по кліку на кнопку Send вивести пост в HTML через fetch та XMLHttpRequest. 
//    Стилізувати відповідним чином. 
//    https://jsonplaceholder.typicode.com/comments

const getCommentBtn = document.getElementById('getCommentBtn');
const commentIdInput = document.getElementById('commentId');
const commentDetails = document.getElementById('commentDetails');

// fetch
getCommentBtn.addEventListener('click', () => {
    const commentId = commentIdInput.value;
    if (commentId) {
        fetch(`https://jsonplaceholder.typicode.com/comments/${commentId}`)
            .then(response => response.json())
            .then(comment => {
                console.log(comment);
                commentDetails.innerHTML = '';
                const commentDiv = document.createElement('div');
                commentDiv.classList.add('userStyle');
                commentDiv.innerHTML = `
                    <p><strong>ID:</strong> ${comment.id}</p>
                    <p><strong>Name:</strong> ${comment.name}</p>
                    <p><strong>Email:</strong> ${comment.email}</p>
                    <p>${comment.body}</p>
                `;
                commentDetails.appendChild(commentDiv);
            })
            .catch(error => {
                commentDetails.innerHTML = '<p>Коментаря не існує.</p>';
            });
    } else {
        commentDetails.innerHTML = '<p>Введіть ID коментаря.</p>';
    }
});

// XMLHttpRequest
getCommentBtn.addEventListener('click', () => {
    const commentId = commentIdInput.value;
    if (commentId) {
        const xhr = new XMLHttpRequest();
        xhr.open('GET', `https://jsonplaceholder.typicode.com/comments/${commentId}`);
        xhr.send();
        xhr.onload = function () {
            if (xhr.status >= 200 && xhr.status < 300) {
                const comment = JSON.parse(xhr.responseText);
                console.log(comment);
                commentDetails.innerHTML = '';
                const commentDiv = document.createElement('div');
                commentDiv.classList.add('userStyle');
                commentDiv.innerHTML = `
                    <p><strong>ID:</strong> ${comment.id}</p>
                    <p><strong>Name:</strong> ${comment.name}</p>
                    <p><strong>Email:</strong> ${comment.email}</p>
                    <p>${comment.body}</p>
                `;
                commentDetails.appendChild(commentDiv);
            } else {
                commentDetails.innerHTML = '<p>Коментаря не існує.</p>';
            }
        };
    } else {
        commentDetails.innerHTML = '<p>Введіть ID коментаря.</p>';
    }
});
