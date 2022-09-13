import { PostInterface, UserInterface } from "../../api";

export interface ContentState {
    users: UserInterface[];
    posts: PostInterface[];
    selectedPost: PostInterface | null;
    selectedUser: UserInterface | null;
    loading: boolean;
    selectedIdSection: string;
}