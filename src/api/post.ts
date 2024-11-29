import { Post, PostUpdate } from "./types.ts";

export const getAllPosts = async (): Promise<Post[]> => {
    const response = await fetch("https://jsonplaceholder.typicode.com/posts");

    return response.json();
};

export const getPost = async (id: number): Promise<Post> => {
    const response = await fetch(
        `https://jsonplaceholder.typicode.com/posts/${id}`,
    );

    return response.json();
};

export const createPost = async (post: Post): Promise<Post> => {
    const response = await fetch("https://jsonplaceholder.typicode.com/posts", {
        method: "POST",
        body: JSON.stringify(post),
        headers: {
            "Content-type": "application/json; charset=UTF-8",
        },
    });

    return response.json();
};

export const updatePost = async (postUpdate: PostUpdate): Promise<Post> => {
    const response = await fetch(
        `https://jsonplaceholder.typicode.com/posts/${postUpdate.postId}`,
        {
            method: "PUT",
            body: JSON.stringify({
                id: postUpdate.postId,
                title: postUpdate.title,
                body: postUpdate.body,
                userId: postUpdate.userId,
            }),
            headers: {
                "Content-type": "application/json; charset=UTF-8",
            },
        },
    );

    return response.json();
};

export const getPostsOfUser = async (userId: number): Promise<Post[]> => {
    const response = await fetch(
        `https://jsonplaceholder.typicode.com/posts?userId=${userId}`,
    );

    return response.json();
};
