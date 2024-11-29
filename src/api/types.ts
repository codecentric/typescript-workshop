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
