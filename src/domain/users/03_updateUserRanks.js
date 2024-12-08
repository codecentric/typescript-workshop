import { getPostsOfUser } from "../../api/01_post.js";
import { getUserRank } from "./03_getUserRank.js";

export const updateUserRanks = (users) => {
    return users.map((user) => {
        switch (user.type) {
            case "INTERNAL":
                user.rank = getUserRankForInternal(user);
                break;
            case "EXTERNAL":
                user.rank = getUserRankForExternal(user);
                break;
        }
    });
};

const getUserRankForInternal = async (user) => {
    const postAmount = (await getPostsOfUser(user.id)).length;

    if (postAmount === 0) {
        return "Newbie";
    } else if (postAmount < 5) {
        return "Beginner";
    } else if (postAmount < 10) {
        return "Advanced";
    } else {
        return "Expert";
    }
};

const getUserRankForExternal = (user) => {
    return getUserRank(user.id);
};
