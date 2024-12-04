import { getPostsOfUser } from "../../api/post.ts";

import { UserRank } from "../../types/user.ts";

export const getUserRank = async (userId: number): Promise<UserRank> => {
    const postAmount = (await getPostsOfUser(userId)).length;

    if (postAmount === 0) {
        return UserRank.NEWBIE;
    } else if (postAmount < 5) {
        return UserRank.BEGINNER;
    } else {
        return UserRank.ADVANCED;
    }
};
