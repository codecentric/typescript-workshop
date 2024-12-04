import { InternalUser, User } from "../../types/user.ts";

export const formatPhoneNumber = <T extends User>(user: T): T => {
    user.phone = "**********";
    return user;
};

const testUser: InternalUser = {
    id: 1,
    type: "INTERNAL",
    name: "John Doe",
    company: "",
};

const formattedUser = formatPhoneNumber(testUser);

console.log("formattedUser", formattedUser);
