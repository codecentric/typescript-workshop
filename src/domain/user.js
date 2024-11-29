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
