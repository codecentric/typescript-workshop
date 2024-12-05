// export type UserRankType = "Newbie" | "Beginner" | "Advanced" | "Expert";
export enum UserRank {
    NEWBIE = "Newbie",
    BEGINNER = "Beginner",
    ADVANCED = "Advanced",
    EXPERT = "Expert",
}

export interface User {
    id: number;
    name: string;
    company?: string;
    rank?: UserRank;
    phone?: string;
}

export interface InternalUser extends User {
    type: "INTERNAL";
}

export interface ExternalUser extends User {
    type: "EXTERNAL";
}

export interface UserService {
    users: User[];

    loadAllUsers(): Promise<User[]>;

    loadUser(id: number): Promise<User>;

    getUserRank(userId: number): Promise<string>;
}
