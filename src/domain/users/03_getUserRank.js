import { getPostsOfUser } from "../../api/01_post.js";

export const getUserRank = async (userId) => {
    const postAmount = (await getPostsOfUser(userId)).length;

    if (postAmount === 0) {
        return "Newbie";
    } else if (postAmount < 5) {
        return "Beginner";
    } else {
        return "Advanced";
    }
};
