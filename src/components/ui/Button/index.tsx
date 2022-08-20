// * react/next
import React, { PropsWithChildren } from 'react';
import { IButtonProps } from './types';

// * styles
import styles from './Button.module.scss';

const Button: React.FC<PropsWithChildren<IButtonProps>> = ({
    children,
    fn,
}) => {
    return (
        <button onClick={() => fn()} className={styles.btn}>
            {children}
        </button>
    );
};

export default Button;
