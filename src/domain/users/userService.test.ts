import { getUserService } from "./userService.ts";
import { loadAllUsers } from "../../api/user.ts";
import { Mock } from "vitest";

vi.mock(import("../../api/user.ts"));

describe("userService", () => {
    const loadAllUsersMock = loadAllUsers as Mock;

    it("should initialize with empty user list", () => {
        // TODO: implement test
    });

    it("should load all users", () => {
        loadAllUsersMock.mockResolvedValue([{ name: "Alice", email: "" }]); // ERROR: "email" is not in the User type

        const allUsers = getUserService().loadAllUsers();

        expect(allUsers).toEqual([]);
    });

    it("should load single user", () => {
        // TODO: implement test
    });

    describe("getUserRank", () => {
        it("should return user rank", () => {
            // TODO: implement test
        });

        it("should load user if not in list", () => {
            // TODO: implement test
        });

        it("should not load user if in list", () => {
            // TODO: implement test
        });
    });
});
