import { getUserRank } from "./user.js";
import { loadAllUsers, loadUser } from "../api/user.js";

class User {
    constructor(id, name, company) {
        this.id = id;
        this.name = name;
        this.company = company;
    }
}

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
