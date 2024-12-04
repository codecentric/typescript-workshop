import {
    createPost,
    getAllPosts,
    getPost,
    updatePost,
} from "../../api/post.ts";
import { Post, PostFormData } from "../../types.ts";

export const createNewPost = async (
    postFormData: PostFormData,
    userId: number,
): Promise<Post> => {
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

export const updateExistingPost = async (
    postFormData: Post,
    userId: number,
): Promise<Post> => {
    const postId = postFormData.id;
    const existingPost = await getPost(postId);

    if (!existingPost) {
        throw new Error(`Post with ID ${postId} does not exist`);
    }

    const title = postFormData.title ?? existingPost.title;
    const body = postFormData.body ?? existingPost.body;

    return updatePost(postId, userId, title, body);
};
