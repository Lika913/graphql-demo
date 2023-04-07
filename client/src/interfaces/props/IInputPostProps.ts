import { IPost } from "../IPost";

export interface IInputPostProps {
    username: string,
    posts: IPost[], 
    set_posts: React.Dispatch<React.SetStateAction<IPost[]>>
}