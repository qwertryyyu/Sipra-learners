// Define a variable to store the list of blog posts
let posts = [
    {
        title: "My First Blog Post",
        content: "Lorem ipsum dolor sit amet, consectetur adipiscing elit. Sed sit amet erat vel sapien lacinia pretium eget ut arcu. Aliquam erat volutpat. Phasellus ut erat quis ex pharetra ultrices. Nunc faucibus sapien id risus iaculis, ut suscipit elit imperdiet. Integer a ipsum convallis, bibendum orci quis, porttitor libero. Nullam vitae lorem ut purus bibendum venenatis ut eu nisi."
    },
    {
        title: "My Second Blog Post",
        content: "Lorem ipsum dolor sit amet, consectetur adipiscing elit. Sed sit amet erat vel sapien lacinia pretium eget ut arcu. Aliquam erat volutpat. Phasellus ut erat quis ex pharetra ultrices. Nunc faucibus sapien id risus iaculis, ut suscipit elit imperdiet. Integer a ipsum convallis, bibendum orci quis, porttitor libero. Nullam vitae lorem ut purus bibendum venenatis ut eu nisi."
    },
    {
        title: "My Third Blog Post",
        content: "Lorem ipsum dolor sit amet, consectetur adipiscing elit. Sed sit amet erat vel sapien lacinia pretium eget ut arcu. Aliquam erat volutpat. Phasellus ut erat quis ex pharetra ultrices. Nunc faucibus sapien id risus iaculis, ut suscipit elit imperdiet. Integer a ipsum convallis, bibendum orci quis, porttitor libero. Nullam vitae lorem ut purus bibendum venenatis ut eu nisi."
    }
];

// Define a function to display the list of blog posts
function displayPosts() {
    let postList = document.querySelector("#post-list");
    postList.innerHTML = "";
    for (let i = 0; i < posts.length; i++) {
        let post = `
            <div class="post">
                <h2>${posts[i].title}</h2>
                <p>${posts[i].content}</p>
            </div>
        `;
        postList.innerHTML += post;
    }
}

// Call the displayPosts() function when the page is loaded
window.addEventListener("load", function() {
    displayPosts();
});

// Define a function to add a new blog post
function addPost() {
    let titleInput = document.querySelector("#title");
    let contentInput = document.querySelector("#content");
    let newPost = {
        title: titleInput.value,
        content: contentInput.value
    };
    posts.push(newPost);
    displayPosts();
    titleInput.value = "";
    contentInput.value = "";
}

// Add an event listener to the "Add Post" button
let addButton = document.querySelector("#add-button");
addButton.addEventListener("click", function() {
    addPost();
});
