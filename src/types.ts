export type UserRank = "Newbie" | "Beginner" | "Advanced" | "Expert";

export type User = {
    id: number;
    name: string;
    company: string;
    rank?: UserRank;
    phone?: string;
};

export type Post = {
    id: number;
    title: string;
    body: string;
    userId: number;
};

export interface UserService {
    users: User[];

    loadAllUsers(): Promise<User[]>;

    loadUser(id: number): Promise<User>;

    getUserRank(userId: number): Promise<string>;
}

export type InternalUser = User & {
    type: "INTERNAL";
};

export type ExternalUser = User & {
    type: "EXTERNAL";
};

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

export type PostFormData = Omit<Post, "id">;
