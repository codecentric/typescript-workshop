import {getPostsOfUser} from '../api/post.js';
import {loadAllUsers, loadUser} from '../api/user.js';

export const getUserRank = async (userId) => {
    const postAmount = (await getPostsOfUser(userId)).length

    if (postAmount === 0) {
        return "Newbie"
    } else if (postAmount < 5) {
        return "Beginner"
    } else {
        return "Advanced"
    }
}

export class UserService {
    constructor() {
        this.users = []
    }

    async loadAllUsers() {
        this.users = await loadAllUsers();
        return this.users
    }

    async loadUser(id) {
        return loadUser(id)
    }

    async getUserRank(userId) {
        if (!this.users.includes(userId)) {
            const user = await this.loadUser(userId)

            if (!user) {
                throw new Error(`User with ID ${userId} does not exist`)
            }
            this.users.push(user)
        }

        return getUserRank(userId)
    }

    async updateUserRanks() {
        this.users = this.users.map(user => {
            // TODO: User Rank ermitteln (getUserRankForInternal oder getUserRankForExternal)
        })
    }

    getUserRankForInternal(user) {
        // Irgendwas ermitteln für internen User
    }

    getUserRankForExternal(user) {
        // Irgendwas ermitteln für externen User
    }
}