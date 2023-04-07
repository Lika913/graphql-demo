import { IButtonProps } from '../../interfaces/props/IButtonProps';
import './button.css';

const Button = (props: IButtonProps): JSX.Element => {

    return (
        <button 
            className='button'
            onClick={props.click} 
        >{props.label}</button>      
    );
}

export default Button;