import { getPostsOfUser } from "../../api/post.ts";

import { UserRank } from "../../types.ts";

export const getUserRank = async (userId: number): Promise<UserRank> => {
    const postAmount = (await getPostsOfUser(userId)).length;

    if (postAmount === 0) {
        return "Newbie";
    } else if (postAmount < 5) {
        return "Beginner";
    } else {
        return "Advanced";
    }
};
