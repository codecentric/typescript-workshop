import { setUserType } from "./setUserType.ts";
import { User } from "../../types/user.ts";

const getTestUser = (partialUser: Partial<User> = {}): User => ({
    id: 1,
    name: "John Doe",
    company: "ACME",
    ...partialUser,
});

describe("setUserType", () => {
    it("should set user type to EXTERNAL if user has company", () => {
        const userWithType = setUserType(getTestUser());

        expect(userWithType.type).toBe("EXTERNAL");
    });

    it("should set user type to INTERNAL if user has no company", () => {
        const userWithType = setUserType(getTestUser({ company: undefined }));

        expect(userWithType.type).toBe("INTERNAL");
    });
});
