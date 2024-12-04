import { ExternalUser, InternalUser, User } from "../../types/user.ts";

export const setUserType = (user: User): InternalUser | ExternalUser => {
    if (user.company) {
        return {
            ...user,
            type: "EXTERNAL",
        };
    } else {
        return {
            ...user,
            type: "INTERNAL",
        };
    }
};
