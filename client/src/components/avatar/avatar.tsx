import { IAvatarProps } from '../../interfaces/props/IAvatarProps';
import './avatar.css';

const Avatar = (props: IAvatarProps): JSX.Element => {
    return (
        <img
            className="avatar"
            src="images/avatar.jpg"
            alt=""
            title='Ваш профиль'
            style={
                {
                    width: props.side_size || "60px",
                    height: props.side_size || "60px",
                    border: (props.border_size || "5px") + " var(--accent-color) solid"
                }
            }
        />
    );
}

export default Avatar;