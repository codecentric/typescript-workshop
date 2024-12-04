import {
    createPost,
    getAllPosts,
    getPost,
    updatePost,
} from "../../api/post.js";

export const createNewPost = async (postFormData, userId) => {
    const allExistingPosts = await getAllPosts();

    const titleAlreadyExists = !!allExistingPosts.find(
        (existingPost) => existingPost.title === postFormData.title,
    );

    if (titleAlreadyExists) {
        throw new Error("Title already exists");
    }

    const post = {
        title: postFormData.title,
        body: postFormData.body,
        userId: userId,
    };

    return createPost(post);
};

export const updateExistingPost = async (postFormData, userId) => {
    const postId = postFormData.id;
    const existingPost = await getPost(postId);

    if (!existingPost) {
        throw new Error(`Post with ID ${postId} does not exist`);
    }

    const title = postFormData.title ?? existingPost.title;
    const body = postFormData.body ?? existingPost.body;

    return updatePost(postId, title, body, userId);
};
