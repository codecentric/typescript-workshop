// export type UserRankType = "Newbie" | "Beginner" | "Advanced" | "Expert";
export enum UserRank {
    NEWBIE = "Newbie",
    BEGINNER = "Beginner",
    ADVANCED = "Advanced",
    EXPERT = "Expert",
}

export type User = {
    id: number;
    name: string;
    company: string;
    rank?: UserRank;
    phone?: string;
};

export type InternalUser = User & {
    type: "INTERNAL";
};

export type ExternalUser = User & {
    type: "EXTERNAL";
};

export interface UserService {
    users: User[];

    loadAllUsers(): Promise<User[]>;

    loadUser(id: number): Promise<User>;

    getUserRank(userId: number): Promise<string>;
}
