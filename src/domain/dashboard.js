import {PostService} from './postService.js';
import {UserService} from './userService.js';

export const prepareDashboard = async () => {
    const userService = new UserService();
    const allUsers = await userService.loadAllUsers();

    const postService = new PostService();
    const allPosts = await postService.loadAllPosts();

    return {
        users: allUsers,
        posts: allPosts,
        comments: []
    }
}

export const updateSinglePost = async (postId) => {
    const postService = new PostService();
    const post = await postService.loadPost(postId);

    return [...postService.posts, post];
}