import { User } from "../../types.ts";

const mapUserData = <T>(users: User[], mapFunction: (user: User) => T): T[] => {
    return users.map(mapFunction);
};

export const getUserNames = (users: User[]): string[] => {
    return mapUserData(users, (user) => user.name);
};

export const getUserIds = (users: User[]): number[] => {
    return mapUserData(users, (user) => user.id);
};
