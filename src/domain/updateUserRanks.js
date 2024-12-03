export const updateUserRanks = (users) => {
    return users.map((user) => {
        switch (user.type) {
            case "INTERNAL":
                user.rank = getUserRankForInternal(user);
                break;
            case "EXTERNAL":
                user.rank = getUserRankForExternal(user);
                break;
            default:
                throw new Error(`Unknown user type: ${user.type}`);
        }
    });
};

const getUserRankForInternal = (user) => {
    // Irgendwas ermitteln für internen User
};

const getUserRankForExternal = (user) => {
    // Irgendwas ermitteln für externen User
};
