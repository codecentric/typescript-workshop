import { getUserRank } from "./getUserRank.ts";
import { getPostsOfUser } from "../../api/post.ts";
import { ExternalUser, InternalUser, UserRank } from "../../types.ts";

export const updateUserRanks = (
    users: (InternalUser | ExternalUser)[],
): Promise<InternalUser | ExternalUser>[] => {
    return users.map(async (user) => {
        switch (user.type) {
            case "INTERNAL":
                user.rank = await getUserRankForInternal(user);
                break;
            case "EXTERNAL":
                user.rank = await getUserRankForExternal(user);
                break;
        }
        return user;
    });
};

const getUserRankForInternal = async (
    user: InternalUser,
): Promise<UserRank> => {
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

const getUserRankForExternal = async (
    user: ExternalUser,
): Promise<UserRank> => {
    return await getUserRank(user.id);
};
