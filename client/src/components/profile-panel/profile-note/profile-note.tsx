import { IProfileNoteProps } from '../../../interfaces/props/IProfileNoteProps';
import './profile-note.css';

const ProfileNote = (props: IProfileNoteProps): JSX.Element => {

    return (
        <div className="profile-note">
            <img 
                alt="" 
                src={props.src_img}
                onClick={props.click}
            />
            {props.label}
        </div>
    );
}

export default ProfileNote;