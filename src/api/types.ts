export type User = {
    id: number;
    name: string;
    company: string;
    phone?: string;
};

export type Post = {
    id: number;
    title: string;
    body: string;
    userId: number;
};
