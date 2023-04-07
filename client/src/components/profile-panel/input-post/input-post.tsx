import { useRef } from 'react';
import { IInputPostProps } from '../../../interfaces/props/IInputPostProps';
import Button from '../../button/button';
import './input-post.css';

const InputPost = (props: IInputPostProps): JSX.Element => {

    const textareaRef = useRef<HTMLTextAreaElement>(null)

    const addPost: React.MouseEventHandler = () => {

        if (textareaRef.current && textareaRef.current.value) {
            props.set_posts([{
                date_publication: new Date(),
                likes_count: 0,
                username: props.username,
                message: textareaRef.current.value,
            }, ...props.posts])

            textareaRef.current.value = "";
        }        
    }

    return (
        <div className='input-post'>
            <textarea
                ref={textareaRef}
                placeholder="У вас произошло что-то новое?"
            />
            <Button 
                label="Поделиться" 
                click={addPost}
            />
        </div>
    );
}

export default InputPost;