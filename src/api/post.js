export const getAllPosts = async () => {
    const posts = await fetch("https://jsonplaceholder.typicode.com/posts")

    return posts.json()
}

export const getPost = async (id) => {
    const post = await fetch(`https://jsonplaceholder.typicode.com/posts/${id}`)

    return post.json()
}

export const createPost = async (post) => {
    const response = await fetch("https://jsonplaceholder.typicode.com/posts", {
        method: "POST",
        body: JSON.stringify(post),
        headers: {
            "Content-type": "application/json; charset=UTF-8"
        }
    })

    return response.json()
}

export const getPostsOfUser = async (userId) => {
    const posts = await fetch(`https://jsonplaceholder.typicode.com/posts?userId=${userId}`)

    return posts.json()
}