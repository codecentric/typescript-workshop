import { getAllPosts, getPost, getPostsOfUser } from "../../api/01_post.js";
import { createNewPost, updateExistingPost } from "./postRepository.js";

class Post {
    constructor(postData) {
        this.id = postData.id;
        this.title = postData.title;
        this.body = postData.body;
        this.userId = postData.userId;
    }
}

export class PostService {
    constructor() {
        this.posts = [];
    }

    async loadAllPosts() {
        this.posts = await getAllPosts();

        return this.posts;
    }

    async loadPost(id) {
        return getPost(id);
    }

    async createPost(post) {
        return createNewPost(post);
    }

    async getPostsOfUser(userId) {
        return getPostsOfUser(userId);
    }

    async updatePost(postId, title, body, userId) {
        if (!title && !body) {
            // Nothing to update
            return;
        }

        return updateExistingPost({ id: postId, title, body }, userId);
    }
}
