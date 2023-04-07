import './post.css';
import { IPostProps } from '../../../interfaces/props/IPostProps';
import PublicationInfo from './publication-info/publication-info';
//дописать чтобы если это пост собственный, то подсвечивалось и при нажатии выпадала менюшка

const Post = (props: IPostProps): JSX.Element => {

    const onMouseOver: React.MouseEventHandler = event => {

        const target = event.target as HTMLDivElement;  
        if (!target.classList.contains("post")) return; // проверяем что это нужный элемент,
                                                        // а не вложенный        
        target.classList.add("highlight");

        const delete_flag = target.querySelector(".delete-flag") as HTMLDivElement;
        delete_flag.style.visibility = "visible";
    }

    const onMouseOut: React.MouseEventHandler = event => {

        const target = event.target as HTMLDivElement;    
        if (!target.classList.contains("post")) return;
        
        if (event.relatedTarget) { //проверяем, что курсор перешёл не за область окна
            const relatedTarget = event.relatedTarget as HTMLDivElement; 
            if (relatedTarget.classList.contains("delete-flag")) return; // если мы перешли 
        }                                  // на элемент внутри target, то ничего не делать
        
        target.classList.remove("highlight");

        const delete_flag = target.querySelector(".delete-flag") as HTMLDivElement;
        delete_flag.style.visibility = "hidden";
    }

    return (
        <div className='post-area'>
            <div 
                className='post' 
                onMouseOver={onMouseOver} 
                onMouseOut={onMouseOut}
            >
                <div className='delete-flag'></div>
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