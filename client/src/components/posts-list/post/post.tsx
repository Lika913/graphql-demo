import './post.css';
import { useState } from 'react';
import { IPostProps } from '../../../interfaces/props/IPostProps';
import PublicationInfo from './publication-info/publication-info';
//дописать чтобы если это пост собственный, то подсвечивалось и при нажатии выпадала менюшка

const Post = (props: IPostProps): JSX.Element => {

    const [postClass, setPostClass] = useState<string>('post')
    const [visibilityCross, setVisibilityCross] = useState<'visible' | 'hidden'>('hidden')

    const onMouseEnterHandler = () => {
        setPostClass("post highlight")
        setVisibilityCross('visible')
        console.log("onMouseEnterHandler");
        
    }

    const onMouseLeaveHandler = () => {
        setPostClass("post")
        setVisibilityCross('hidden')
        
        console.log("onMouseLeaveHandler");
    }

    const removePost = (id: number) => {
        props.setPosts(oldPosts => oldPosts.filter(post => post.id != id))
    }

    return (
        <div className='post-area'>
            <div 
                className={postClass}
                onMouseEnter={onMouseEnterHandler} 
                onMouseLeave={onMouseLeaveHandler}
            >
                <div 
                    className='cross'
                    style={{visibility: visibilityCross}}
                    onClick={() => removePost(props.post.id)}
                >
                    <div className='right-slash'/>
                    <div className='left-slash'/>
                </div>
                {props.post.message}
            </div>
            <PublicationInfo 
                username={props.post.username} 
                date_publication={props.post.date_publication} 
            />
        </div>
        
    );
}

export default Post;