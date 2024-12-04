import { getPostService } from "../posts/postService.ts";
import { getUserService } from "../users/userService.ts";
import { DashboardData } from "./types.ts";
import { Post } from "../../types/post.ts";

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
