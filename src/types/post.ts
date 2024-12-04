export type Post = {
    id: number;
    title: string;
    body: string;
    userId: number;
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

export type PostFormData = Omit<Post, "id">;
