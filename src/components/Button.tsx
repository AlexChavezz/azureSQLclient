import styles from '../styles/mainStyles.module.css';

interface ButtonInterface {
    value: string,
    onClick: any,
    className: string
    image?: string
    imageAlt?: string
    imageClassName?: string
}

export const Button = ({ value, onClick, className, image, imageClassName, imageAlt }: ButtonInterface) => {
    return (
        <button
            className={className}
            onClick={onClick}
        >
            {
                value
            }
            {
                image &&
                <img
                    src={image}
                    alt="image"
                    className={imageClassName}
                />
            }
        </button>
    );
}
