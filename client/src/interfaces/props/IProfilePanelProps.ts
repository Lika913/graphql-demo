import { IPost } from "../IPost";

export interface IProfilePanelProps {
    username: string,
    posts: IPost[], 
    set_posts: React.Dispatch<React.SetStateAction<IPost[]>>
}