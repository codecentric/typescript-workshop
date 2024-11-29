import { getPostsOfUser } from "../api/post.js";

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

export const formatPhoneNumber = (user) => {
    user.phone = "**********";
    return user;
};

const mapUserData = (users, mapFunction) => {
    return users.map(mapFunction);
};

export const getUserNames = (users) => {
    return mapUserData(users, (user) => user.name);
};
