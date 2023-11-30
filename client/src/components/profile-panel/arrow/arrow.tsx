import { useState } from 'react';
import { IArrowProps } from '../../../interfaces/props/IArrowProps';
import './arrow.css';

const Arrow = (props: IArrowProps): JSX.Element => {

    const toggleArrowClass: Record<string, string> = {
        "right-arrow": "left-arrow",
        "left-arrow": "right-arrow"
    };

    const [arrowClass, setArrowClass] = useState<string>('right-arrow');

    const onClick: React.MouseEventHandler = event => {
        setArrowClass((oldClass) => toggleArrowClass[oldClass])

        if (props.click) {
            props.click(event)
        }
    }

    return (
        <div 
                className="arrow-area"
                onClick={onClick}
            >
                <div className={arrowClass} />
        </div>
    );
}

export default Arrow;