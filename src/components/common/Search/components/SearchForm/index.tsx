// * react/next 
import React, {useEffect} from 'react'
import { Controller, useForm } from 'react-hook-form';

// * redux 
import { useDispatch } from 'react-redux'
import { setSearchValue, setSearchType, handleHiddenSearchedMovies} from 'store/slices/searchMovieSlice'

// * hooks 
import {useDebounce} from 'hooks/useDebounce'

// * styles 
import styles from './SearchForm.module.scss'

// * components 
import Select from 'components/ui/Select';
import SearchInput from 'components/ui/SearchInput';

const options = [
    {label: 'Что Угодно', value: 'Что Угодно'},
    {label: 'Фильмы', value: 'Фильмы'},
    {label: 'Сериалы', value: 'Сериалы'},
    {label: 'Мультфильмы', value: 'Мультфильмы'},
    {label: 'Аниме', value: 'Аниме'},
]


const SearchForm = () => {
    const handleVisibleSearchList = (boolean: boolean) => {
        dispatch(handleHiddenSearchedMovies(boolean))
    }

    const { setValue, watch, control} = useForm({
        mode: 'all'
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

    const clearSearchValue = (): void => {
        setValue('Search', '')
    }

    return (
        <form className={styles.searchForm}>
            <Controller
                control={control}
                name='Select'
                render={({field: {onChange, value}}) => 
                    <Select
                        options={options}
                        onChange={onChange}
                        onBlur={() => handleVisibleSearchList(false)}
                        onFocus={() => handleVisibleSearchList(true)}
                    />
                }
            />
            <Controller
                control={control}
                name='Search'
                render={({field: {onChange, value}}) => 
                    <SearchInput
                        onChange={onChange}
                        value={value}
                        onBlur={() => handleVisibleSearchList(false)}
                        onFocus={() => handleVisibleSearchList(true)}
                        selectValue={WatchSelect}
                        clearSearchValue={clearSearchValue}
                    />
                }
            />
        </form>
    )
}

export default SearchForm