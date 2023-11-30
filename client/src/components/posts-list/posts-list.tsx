import './posts-list.css';
import Post from "./post/post";
import { IPostListProps } from '../../interfaces/props/IPostListProps';

const PostList = (props: IPostListProps): JSX.Element => {
    return (
        <div className='posts-list'>
            {props.posts.map(post => 
                <Post 
                    key={post.id}
                    post={post} 
                    setPosts={props.setPosts}
                />
            )}
        </div>
    );
}

export default PostList;