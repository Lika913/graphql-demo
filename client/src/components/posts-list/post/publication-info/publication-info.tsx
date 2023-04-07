import { formatDate } from '../../../../helpers/conversion-functions';
import { IPublicationInfoProps } from '../../../../interfaces/props/IPublicationInfoProps';
import Avatar from '../../../avatar/avatar';
import './publication-info.css';

const PublicationInfo = (props: IPublicationInfoProps): JSX.Element => {
    return (
        <div className='publication-info'>
            <Avatar 
                side_size='20px'
                border_size='2px'
            />
            {`${props.username}, ${formatDate(props.date_publication)}`}            
        </div>
    );
}

export default PublicationInfo;