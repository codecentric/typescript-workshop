import {
    createPost,
    getAllPosts,
    getPost,
    getPostsOfUser,
    updatePost,
} from "../api/post.js";
import { Post } from "../api/types.ts";
import { PostService } from "./types.ts";

export const getPostService = (): PostService => ({
    posts: [],

    async loadAllPosts(): Promise<Post[]> {
        this.posts = await getAllPosts();
        return this.posts;
    },

    async loadPost(id: number): Promise<Post> {
        return getPost(id);
    },

    async createPost(post: Post): Promise<Post> {
        return createPost(post);
    },

    async updatePost(
        postId: number,
        userId: number,
        title?: string,
        body?: string,
    ): Promise<Post> {
        if (!title && !body) {
            // Nothing to update
            return Promise.reject(new Error("Nothing to update"));
        }
        return updatePost({ postId, userId, title, body });
    },

    async getPostsOfUser(userId: number): Promise<Post[]> {
        return getPostsOfUser(userId);
    },
});
