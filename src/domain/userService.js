import { getUserRank } from "./user.js";
import { loadAllUsers, loadUser } from "../api/user.js";

export class UserService {
    constructor() {
        this.users = [];
    }

    async loadAllUsers() {
        this.users = await loadAllUsers();

        return this.users;
    }

    async loadUser(id) {
        return loadUser(id);
    }

    async getUserRank(userId) {
        if (!this.users.includes(userId)) {
            const user = await this.loadUser(userId);

            this.users.push(user);
        }

        return getUserRank(userId);
    }
}
