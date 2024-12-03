import {
    createPost,
    getAllPosts,
    getPost,
    getPostsOfUser,
    updatePost,
} from "../api/post.js";

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
        return createPost(post);
    }

    async getPostsOfUser(userId) {
        return getPostsOfUser(userId);
    }

    async updatePost(postId, title, body, userId) {
        if (!title && !body) {
            // Nothing to update
            return;
        }

        return updatePost(postId, title, body, userId);
    }
}
