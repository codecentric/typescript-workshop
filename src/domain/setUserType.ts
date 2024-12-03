import { ExternalUser, InternalUser } from "./types.ts";
import { User } from "../api/types.ts";

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
