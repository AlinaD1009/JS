// 4. На сторінці comments вивести в html список коментарів через fetch та XMLHttpRequest. 
//    Стилізувати відповідним чином. 
//    https://jsonplaceholder.typicode.com/comments

const commentsDOM = document.getElementById('comments');

// fetch
// fetch('https://jsonplaceholder.typicode.com/comments').then(response => {
//     console.log(response);
//     return response.json();
// }).then(comments => {
//     console.log(comments);

//     comments.forEach((comment, i) => {
//         const newCommentDiv = document.createElement('div');
//         newCommentDiv.classList.add('userStyle');

//         newCommentDiv.innerHTML = `${comment.id}. ${comment.body} - ${comment.email}`;
//         commentsDOM.appendChild(newCommentDiv);
//     });  
// });

// XMLHttpRequest

const getComment = new XMLHttpRequest();
getComment.open('GET', 'https://jsonplaceholder.typicode.com/comments');
getComment.send();

getComment.onload = ({target: {response}}) => {
    const comments = JSON.parse(response);
    console.log(comments);   

    comments.forEach(comment => {
        const newCommentsDiv = document.createElement('div');
        newCommentsDiv.classList.add('userStyle');

        newCommentsDiv.innerHTML = `${comment.id}. ${comment.body} - ${comment.email}`;
        commentsDOM.appendChild(newCommentsDiv);
    }); 
};