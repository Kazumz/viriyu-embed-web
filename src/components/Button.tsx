import classNames from 'classnames';
import React from 'react';
import styles from '../styles/Button.module.scss';

interface IButtonProps {
    className?: string;
    onClick: () => void;
    text: string;
}

const Button: React.FC<IButtonProps> = ({ onClick, text, className }) => {
    const rootClassName = classNames(className, styles.button);
    return (
        <button className={rootClassName} onClick={onClick}>
            {text}
        </button>
    );
};

export default Button;
