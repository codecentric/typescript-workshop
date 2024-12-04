import { loadAllUsers, loadUser } from "../../api/user.ts";
import { User } from "../../api/types.ts";
import { UserService } from "../types.ts";
import { getUserRank } from "./getUserRank.ts";

export const getUserService = (): UserService => ({
    users: [],

    async loadAllUsers(): Promise<User[]> {
        this.users = await loadAllUsers();

        return this.users;
    },

    async loadUser(id: number): Promise<User> {
        return loadUser(id);
    },

    async getUserRank(userId: number): Promise<string> {
        if (!this.users.find((user) => user.id === userId)) {
            const user = await this.loadUser(userId);

            this.users.push(user);
        }

        return getUserRank(userId);
    },
});
