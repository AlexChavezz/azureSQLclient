import styles from '../styles/mainStyles.module.css';

interface ButtonInterface {
    value: string, 
    onClick: () => void,
    className: string
}

export const Button = ({ value, onClick, className }:ButtonInterface) => {
    return (
        <button 
            className={ className }
            onClick={ onClick }
        >
            {
                value
            }
        </button>
    );
}
