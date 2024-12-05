import {
    createPost,
    getAllPosts,
    getPost,
    updatePost,
} from "../../api/post.ts";
import { Post, PostFormData } from "../../types/post.ts";

export const createNewPost = async (
    postFormData: PostFormData,
): Promise<Post> => {
    const allExistingPosts = await getAllPosts();

    const titleAlreadyExists = !!allExistingPosts.find(
        (existingPost) => existingPost.title === postFormData.title,
    );

    if (titleAlreadyExists) {
        throw new Error("Title already exists");
    }

    return createPost(postFormData);
};

export interface UpdatePost {
    id: number;
    userId: number;
    title: string | null;
    body: string | null;
}

export const updateExistingPost = async (
    postFormData: UpdatePost,
): Promise<Post> => {
    const postId = postFormData.id;
    const existingPost = await getPost(postId);

    if (!existingPost) {
        throw new Error(`Post with ID ${postId} does not exist`);
    }

    const title = postFormData.title ?? existingPost.title;
    const body = postFormData.body ?? existingPost.body;

    return updatePost(postId, postFormData.userId, title, body);
};
