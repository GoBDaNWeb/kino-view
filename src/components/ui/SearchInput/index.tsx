// * react
import React from 'react';
import { AiOutlineClose } from 'react-icons/ai';
import { ISearchProps } from './types';

// * styles
import styles from './Search.module.scss';

const SearchInput: React.FC<ISearchProps> = ({
    onFocus,
    onBlur,
    onChange,
    selectValue,
    clearSearchValue,
    value,
}) => {
    return (
        <label htmlFor="search-input" className={styles.searchInput}>
            <input
                onChange={onChange}
                onFocus={onFocus}
                onBlur={onBlur}
                type="search"
                value={value}
                id="search-input"
                placeholder={selectValue ? `Найти ${selectValue}` : 'Поиск'}
            />
            {value && (
                <AiOutlineClose
                    onClick={() => clearSearchValue()}
                    className={styles.iconClose}
                />
            )}
        </label>
    );
};

export default SearchInput;
