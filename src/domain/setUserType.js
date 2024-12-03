export const setUserType = (user) => {
    user.type = !!user.company ? "EXTERNAL" : "INTERNAL";
    return user;
};
