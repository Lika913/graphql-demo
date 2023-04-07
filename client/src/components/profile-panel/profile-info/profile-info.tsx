import { IProfileInfoProps } from '../../../interfaces/props/IProfileInfoProps';
import Avatar from '../../avatar/avatar';
import './profile-info.css';

const ProfileInfo = (props: IProfileInfoProps): JSX.Element => {

    return (
        <div className="profile-info" >
            <Avatar />
            <label>{props.username}</label>
        </div>
    );
}

export default ProfileInfo;