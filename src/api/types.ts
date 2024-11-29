export type User = {
    id: number;
    name: string;
    company: string;
};

export type Post = {
    id: number;
    title: string;
    body: string;
    userId: number;
};

export type PostUpdate = {
    postId: number;
    title: string | undefined;
    body: string | undefined;
    userId: number;
};
