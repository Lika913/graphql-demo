import './header.css';
import Inscription from './inscription/inscription';
import Logotype from './logotype/logotype';
import Ribbon from './ribbon/ribbon';

const Header = (): JSX.Element => {
    return (
        <div className='header-area'>
            <Logotype />
            <Inscription />
            <Ribbon />
        </div>
    );
}

export default Header;