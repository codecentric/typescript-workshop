import { Post, User } from "../api/types.ts";

export interface UserService {
    users: User[];

    loadAllUsers(): Promise<User[]>;

    loadUser(id: number): Promise<User>;

    getUserRank(userId: number): Promise<string>;
}

export interface PostService {
    posts: Post[];

    loadAllPosts(): Promise<Post[]>;

    loadPost(id: number): Promise<Post>;

    createPost(post: Post): Promise<Post>;

    updatePost(
        postId: number,
        userId: number,
        title: string | null,
        body: string | null,
    ): Promise<Post>;

    getPostsOfUser(userId: number): Promise<Post[]>;
}

export type DashboardData = {
    users: User[];
    posts: Post[];
    comments: [];
};
