// * react 
import React from 'react'
import {ISearchProps} from './types'

//  * icons 
import {AiOutlineClose} from 'react-icons/ai'

// * styles 
import styles from './Search.module.scss'

const SearchInput: React.FC<ISearchProps> = ({onFocus, onBlur, onChange, selectValue, clearSearchValue, value}) => {
    return (
        <label className={styles.searchInput}>
            <input
                onChange={onChange}
                onFocus={onFocus}
                onBlur={onBlur}
                type="search"
                value={value}
                placeholder={selectValue ? `Найти ${selectValue}` : 'Поиск'}
            />
            {
                value
                && (
                    <AiOutlineClose 
                        onClick={() => clearSearchValue()}
                        className={styles.iconClose}
                    />
                )
            }
        </label>
    )
}

export default SearchInput