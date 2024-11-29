import { getPostService } from "./postService.js";
import { getUserService } from "./userService.js";
import { Post } from "../api/types.ts";
import { DashboardData } from "./types.ts";

export const prepareDashboard = async (): Promise<DashboardData> => {
    const userService = getUserService();
    const allUsers = await userService.loadAllUsers();

    const postService = getPostService();
    const allPosts = await postService.loadAllPosts();

    return {
        users: allUsers,
        posts: allPosts,
        comments: [],
    };
};

export const updateSinglePost = async (postId: number): Promise<Post[]> => {
    const postService = getPostService();
    const post = await postService.loadPost(postId);

    return [...postService.posts, post];
};
