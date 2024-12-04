import { getPostsOfUser } from "../../api/post.ts";
import { Mock } from "vitest";
import { getUserRank } from "./getUserRank.ts";
import { UserRank } from "../../types/user.ts";
import { Post } from "../../types/post.ts";

vi.mock(import("../../api/post.ts"));

describe("getUserRank", () => {
    const getPostsOfUserMock = getPostsOfUser as Mock<typeof getPostsOfUser>;

    it("should return Newbie for user with 0 posts", async () => {
        getPostsOfUserMock.mockResolvedValue([]);

        const rank = await getUserRank(1);

        expect(rank).toBe(UserRank.NEWBIE);
    });

    it("should return Beginner for user with 4 posts", async () => {
        getPostsOfUserMock.mockResolvedValue([
            {} as Post,
            {} as Post,
            {} as Post,
            {} as Post,
        ]);

        const rank = await getUserRank(1);

        expect(rank).toBe(UserRank.BEGINNER);
    });

    it("should return Advanced for user with 10 posts", async () => {
        getPostsOfUserMock.mockResolvedValue(
            new Array<Post>(10).fill({} as Post),
        );

        const rank = await getUserRank(1);

        expect(rank).toBe(UserRank.ADVANCED);
    });
});
