import './profile-panel.css';
import ProfileInfo from './profile-info/profile-info';
import InputPost from "./input-post/input-post"
import ProfileNote from './profile-note/profile-note';
import { IProfilePanelProps } from '../../interfaces/props/IProfilePanelProps';

const ProfilePanel = (props: IProfilePanelProps): JSX.Element => {

    const toggleLeft: Record<string, string> = {
        "390px": "0px",
        "0px": "390px"
    };

    const onClick: React.MouseEventHandler = event => {
        const arrow = event.currentTarget.querySelector(".arrow") as HTMLElement;
        arrow.classList.toggle("arrow-hidden");

        const panel = event.currentTarget.closest(".profile-panel") as HTMLElement;
        panel.style.left = toggleLeft[panel.style.left];
    }

    return (
        <div
            style={{ left: "0px" }}
            className="profile-panel"
        >
            <div 
                className="arrow-area"
                onClick={onClick}
            >
                <div className="arrow" />
            </div>
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
        </div>
    );
}

export default ProfilePanel;