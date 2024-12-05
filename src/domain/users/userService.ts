import { loadAllUsers, loadUser } from "../../api/user.ts";
import { getUserRank } from "./getUserRank.ts";
import { User, UserService } from "../../types/user.ts";

export const getUserService = (): UserService => ({
    users: [],

    async loadAllUsers(filterWebsite?: string): Promise<User[]> {
        this.users = await loadAllUsers(filterWebsite);

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
