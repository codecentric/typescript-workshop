import { prepareDashboard } from "./dashboard.js";
import { UserService } from "../users/02_userService.js";
import { PostService } from "../posts/02_postService.js";

vi.mock("../users/userService");
vi.mock("../posts/postService");

describe("dashboard", () => {
    describe("prepareDashboard", () => {
        it("should return dashboard data", async () => {
            const mockUsers = [
                { id: 1, name: "John Doe", company: "Company A" },
            ];
            const mockPosts = [
                { id: 1, title: "Post Title", body: "Post Body", userId: 1 },
            ];

            UserService.prototype.loadAllUsers = vi
                .fn()
                .mockResolvedValue(mockUsers);
            PostService.prototype.loadAllPosts = vi
                .fn()
                .mockResolvedValue(mockPosts);

            const result = await prepareDashboard();

            expect(result).toEqual({
                users: mockUsers,
                posts: mockPosts,
                comments: [],
            });
        });
    });

    describe("updateSinglePost", () => {
        it("should update single post", () => {
            // TODO: implement test
        });
    });
});
