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