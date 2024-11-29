import { getUserRank } from "./user.js";
import { loadAllUsers, loadUser } from "../api/user.ts";
import { User } from "../api/types.ts";

export class UserService {
    users: User[];

    constructor() {
        this.users = [];
    }

    async loadAllUsers(): Promise<User[]> {
        this.users = await loadAllUsers();

        return this.users;
    }

    async loadUser(id: number): Promise<User> {
        return loadUser(id);
    }

    async getUserRank(userId: number): Promise<string> {
        if (!this.users.find((user) => user.id === userId)) {
            const user = await this.loadUser(userId);

            this.users.push(user);
        }

        return getUserRank(userId);
    }
}
