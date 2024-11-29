import { UserService } from "./userService.js";
import { getUserRank } from "./getUserRank.js";

export class AdvancedUserService extends UserService {
    constructor() {
        super();
    }

    async loadAllUsers() {
        this.users = await super.loadAllUsers();

        this.users = this.users.map((user) => {
            user.type = !!user.company ? "EXTERNAL" : "INTERNAL";
        });

        return this.users;
    }

    async getUserRank(userId) {
        if (!this.users.includes(userId)) {
            const user = await super.loadUser(userId);

            if (!user) {
                throw new Error(`User with ID ${userId} does not exist`);
            }
            this.users.push(user);
        }

        return getUserRank(userId);
    }

    async updateUserRanks() {
        this.users = this.users.map((user) => {
            // TODO: User Rank ermitteln (getUserRankForInternal oder getUserRankForExternal)
        });
    }

    getUserRankForInternal(user) {
        // Irgendwas ermitteln für internen User
    }

    getUserRankForExternal(user) {
        // Irgendwas ermitteln für externen User
    }
}
