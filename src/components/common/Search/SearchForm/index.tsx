// * react/next 
import React, {useEffect, useState} from 'react'
import { useForm } from 'react-hook-form';

// * redux 
import { useDispatch } from 'react-redux'
import { setSearchValue, setSearchType } from 'store/slices/searchMovieSlice'

// * selectors 
import { useGetMoviesBySearchQuery } from 'services/KinoviewService';

// * hooks 
import {useDebounce} from 'hooks/useDebounce'

// * icons 
import {AiOutlineClose} from 'react-icons/ai'

// * styles 
import styles from './SearchForm.module.scss'


const SearchForm = () => {
    const { register, setValue, watch} = useForm({
        mode: 'onChange'
    });
    const WatchSelect = watch('Select', 'Что угодно')
    const WatchSearch = watch('Search')
    const dispatch = useDispatch()

    const debounced = useDebounce(WatchSearch)

    const searhType = () => {
        switch(WatchSelect) {
            case 'Что Угодно':
                return '1-4'
            case 'Фильмы':
                return '1'
            case 'Сериалы':
                return '2'
            case 'Мультфильмы':
                return '3'
            case 'Аниме':
                return '4'
            default:
                return '1-4'
        }
    }

    useEffect(() => {
        dispatch(setSearchValue(WatchSearch))
    }, [debounced])

    useEffect(() => {
        dispatch(setSearchType(searhType()))
    }, [WatchSelect])

    return (
        <form className={styles.searchForm}>
            <select className={styles.select} {...register("Select")}>
                <option 
                    className={styles.optionItem} 
                    value="Что Угодно"
                >
                    Что Угодно
                </option>
                <option 
                    className={styles.optionItem} 
                    value="Фильмы"
                >
                    Фильмы
                </option>
                <option 
                    className={styles.optionItem} 
                    value="Сериалы"
                >
                    Сериалы
                </option>
                <option 
                    className={styles.optionItem} 
                    value="Мультфильмы"
                >
                    Мультфильмы
                </option>
                <option 
                    className={styles.optionItem} 
                    value="Аниме"
                >
                    Аниме
                </option>
            </select>
            <label className={styles.searchInput}>
                <input 
                    type="search"
                    placeholder={`Найти ${WatchSelect}`}
                    {...register("Search", {})}
                />
                {
                    WatchSearch
                    && (
                        <AiOutlineClose 
                            onClick={() => setValue('Search', '')}
                            className={styles.iconClose}
                        />
                    )
                }
            </label>
        </form>
    )
}

export default SearchForm