import { User } from "../../types/user.ts";
import { Post } from "../../types/post.ts";

export interface DashboardData {
    users: User[];
    posts: Post[];
    comments: [];
}
