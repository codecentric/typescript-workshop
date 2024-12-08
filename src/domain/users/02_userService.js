import { loadAllUsers, loadUser } from "../../api/01_user.js";
import { getUserRank } from "./03_getUserRank.js";

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

    async loadAllUsers(filterWebsite) {
        this.users = await loadAllUsers(filterWebsite);

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
