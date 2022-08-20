// * react
import React from 'react';
import { ISelectProps } from './types';

// * styles
import styles from './Select.module.scss';

const Select: React.FC<ISelectProps> = ({
    onChange,
    onBlur,
    onFocus,
    options,
}) => {
    return (
        <select
            onBlur={onBlur}
            onFocus={onFocus}
            onChange={onChange}
            className={styles.select}
        >
            {options.map((option) => (
                <option
                    key={option.label}
                    className={styles.optionItem}
                    value={option.value}
                >
                    {option.label}
                </option>
            ))}
        </select>
    );
};

export default Select;
