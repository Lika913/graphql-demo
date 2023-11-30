import { IPost } from "../IPost";

export interface IPanelProps {
    username: string,
    posts: IPost[], 
    set_posts: React.Dispatch<React.SetStateAction<IPost[]>>
}