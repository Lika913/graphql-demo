import { IPanelProps } from '../../../interfaces/props/IPanelProps';
import './panel.css';
import ProfileInfo from '../profile-info/profile-info';
import ProfileNote from '../profile-note/profile-note';
import InputPost from '../input-post/input-post';

const Panel = (props: IPanelProps): JSX.Element => {
    
    return (
        <div className='panel'>
            <ProfileInfo 
                username={props.username}
            />
            <ProfileNote
                label="дата рождения: 23.01.1993"
                src_img="images\cake-slice.png"
            />
            <ProfileNote
                label="страна: Россия"
                src_img="images\placeholder.png"
            />
            <ProfileNote
                label="редактировать профиль"
                src_img="images\settings.png"
            />
            <InputPost
                username={props.username}
                posts={props.posts}
                set_posts={props.set_posts}
            />
        </div>
    );
}

export default Panel;