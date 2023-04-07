import './posts-list.css';
import Post from "./post/post";
import { IPostListProps } from '../../interfaces/props/IPostListProps';

const PostList = (props: IPostListProps): JSX.Element => {
    return (
        <div className='posts-list'>
            {props.posts.map(post => 
                <Post post={post} />
            )}
        </div>
    );
}

export default PostList;