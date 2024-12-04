import { UserRank } from "../domain/types.ts";

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
