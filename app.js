async function main(){
    var userData = await fetchUsers();
    populateUsersTab(userData);

    window.addEventListener("click",async function onClick(e){        
        var ele = document.getElementById(e.target.id);
        if(ele.className === 'user_data'){
            populatePostsTab(e.target.id,e.target.outerText);
        }
    });
}

main();

async function fetchUsers(){
   var userData = await fetch('https://jsonplaceholder.typicode.com/users')
    .then((response) => response.json())
    .then((json) => json);
    return userData;
}

async function fetchPostsByUser(userId){
    
    var postsUsersData = await fetch(`https://jsonplaceholder.typicode.com/users/${userId}/posts`)
    .then((response) => response.json())
    .then((json) => json);
    return postsUsersData;
}
async function populatePostsTab(userId,userName){
    var postsData = await fetchPostsByUser(userId);
    var element = document.getElementById('POSTS');
    element.innerHTML= "";
    var newText = document.createElement('h2')
    newText.innerHTML = `<span class="span-teal">Showing Posts for : ${userName}</span>`;
    element.appendChild(newText);    
    newDiv = document.createElement("div");
    var htmlString = ``;
    postsData.map((x)=>{
        var newPost = `
            <div class="post">
                <p><span class="span-teal">Id</span>: ${x.id}</p>
                <p><span class="span-teal">Title</span>: ${x.title}</p>
                <p><span class="span-teal">Body</span>: ${x.body}</p>
            </div>
        `;
        htmlString = htmlString + newPost;
    })
    newDiv.innerHTML = htmlString;
    element.appendChild(newDiv)
}


function populateUsersTab(userData){
    var tbodyRef = document.getElementById('users_table_body');
    userData.map(x=>{
        newrow = document.createElement("tr");
        newrow.innerHTML = `<td id=${x.id} class="user_data">` + x.name + "</td>";
        tbodyRef.parentNode.insertBefore(newrow, tbodyRef.nextSibling);
        }
    )
}


