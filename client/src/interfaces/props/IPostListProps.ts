import { IPost } from "../IPost";

export interface IPostListProps {
    posts: IPost[]
    setPosts: React.Dispatch<React.SetStateAction<IPost[]>>
}