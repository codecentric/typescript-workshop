import { User } from "../types/user.ts";

export const loadAllUsers = async (filterWebsite?: string): Promise<User[]> => {
    if (filterWebsite) {
        const users = await fetch(
            `https://jsonplaceholder.typicode.com/users?website=${filterWebsite}`,
        );

        return users.json();
    }
    const users = await fetch("https://jsonplaceholder.typicode.com/users");

    return users.json();
};

export const loadUser = async (id: number): Promise<User> => {
    const user = await fetch(
        `https://jsonplaceholder.typicode.com/users/${id}`,
    );

    return user.json();
};
