import './profile-panel.css';
import { IProfilePanelProps } from '../../interfaces/props/IProfilePanelProps';
import { useState } from 'react';
import Arrow from './arrow/arrow';
import Panel from './panel/panel';

const ProfilePanel = (props: IProfilePanelProps): JSX.Element => {

    const togglePanelLeft: Record<string, string> = {
        "390px": "0px",
        "0px": "390px"
    };

    const [panelLeft, setPanelLeft] = useState<string>('0px');

    const onClick: React.MouseEventHandler = event => {
        setPanelLeft((oldPanelLeft) =>  togglePanelLeft[oldPanelLeft])
    }

    return (
        <div
            className="profile-panel"
            style={{ left: panelLeft }}
        >
            <Arrow 
                click={onClick}
            />
            <Panel 
                username={props.username}
                posts={props.posts}
                set_posts={props.set_posts}
            />
        </div>
    );
}

export default ProfilePanel;