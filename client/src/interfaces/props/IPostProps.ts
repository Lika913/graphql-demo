import { IPost } from "../IPost";

export interface IPostProps {
    post: IPost
    setPosts: React.Dispatch<React.SetStateAction<IPost[]>>
}