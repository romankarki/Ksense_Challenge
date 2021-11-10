console.log("Connected");

function fetchUsers(){
    fetch('https://jsonplaceholder.typicode.com/users')
    .then((response) => response.json())
    .then((json) => console.log(json));
}

function fetchPostsByUser(userId){
    
    fetch(`https://jsonplaceholder.typicode.com/users/${userId}/posts`)
    .then((response) => response.json())
    .then((json) => console.log(json));
}

fetchUsers();
fetchPostsByUser(1);
