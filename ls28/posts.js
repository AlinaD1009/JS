// 3. На сторінці posts вивести в html список постів через fetch та XMLHttpRequest. 
//    Стилізувати відповідним чином. 
//    https://jsonplaceholder.typicode.com/posts

const postDOM = document.getElementById('posts')
// fetch

fetch('https://jsonplaceholder.typicode.com/posts').then(response => {
    console.log(response);
    return response.json();
}).then(posts => {
    console.log(posts);

    posts.forEach((post, i) => {
        const newPostDiv = document.createElement('div');
        newPostDiv.classList.add('userStyle');

        newPostDiv.innerHTML = `<h4>${post.id}. ${post.title}</h4> <p> ${post.body}</p>`;
        postDOM.appendChild(newPostDiv);
    });  
});

// XMLHttpRequest

// const getPost = new XMLHttpRequest();
// getPost.open('GET', 'https://jsonplaceholder.typicode.com/posts');
// getPost.send();
// getPost.onload = ({target: {response}}) => {
//     const posts = JSON.parse(response);
//     console.log(posts);   
//     posts.forEach(post => {
//         const newPostDiv = document.createElement('div');
//         newPostDiv.classList.add('userStyle');

//         newPostDiv.innerHTML = `<h4>${post.id}. ${post.title}</h4> <p> ${post.body}</p>`;
//         postDOM.appendChild(newPostDiv);
    
//     });
// };
