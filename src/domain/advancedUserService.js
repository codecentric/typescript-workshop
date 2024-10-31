import {getUserRank} from './user.js';
import {loadAllUsers, loadUser} from '../api/user.js';

export class AdvancedUserService {
    constructor() {
        this.users = [];
    }

    async loadAllUsers() {
        this.users = await loadAllUsers();

        this.users = this.users.map(user => {
            user.type = !!user.company ? 'EXTERNAL' : 'INTERNAL';
        });

        return this.users;
    }

    async loadUser(id) {
        return loadUser(id);
    }

    async getUserRank(userId) {
        if (!this.users.includes(userId)) {
            const user = await this.loadUser(userId);

            if (!user) {
                throw new Error(`User with ID ${userId} does not exist`);
            }
            this.users.push(user);
        }

        return getUserRank(userId);
    }

    async updateUserRanks() {
        this.users = this.users.map(user => {
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