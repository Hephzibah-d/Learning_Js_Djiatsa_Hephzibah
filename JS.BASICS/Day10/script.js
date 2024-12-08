async function fetchBlogPosts() {
    try {
        const response = await fetch("https://notpadd.vercel.app/api/posts");
        if (!response.ok) throw new Error("Failed to fetch posts");
        const posts = await response.json();
        displayPosts(posts);
    } catch (error) {
        console.error(error.message);
    }
}

function displayPosts(posts) {
    const container = document.getElementById("blog-container");
    posts.forEach((post) => {
        const div = document.createElement("div");
        div.innerHTML = `<h3>${post.title}</h3><p>${post.body}</p>`;
        container.appendChild(div);
    });
}

fetchBlogPosts();