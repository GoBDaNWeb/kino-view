// * react
import { Controller, useForm } from 'react-hook-form';

// * redux 
import { useDispatch } from 'react-redux';
import { setSort, setGenres, setRating, setYear, setSearch} from 'store/slices/filterSlice';

// * styles
import styles from './Filter.module.scss'

// * components 
import Rating from './components/Rating'
import Year from './components/Year';
import Genres from './components/Genres'
import SearchInput from 'components/ui/SearchInput';
import Button from 'components/ui/Button';

const Filters = () => {
    const dispatch = useDispatch()

    const {handleSubmit, setValue, control} = useForm({
        mode: 'all',
        defaultValues: {
            sort: '-1',
            genres: 'Все жанры',
            rating: [1, 10],
            year: [1960, 2022],
            search: ''
        }
    });

    const onSubmit = (data: any ) => {
        if (data) {
            const {sort, rating, year, genres, search} = data
            const ratingString = `${rating[0]}-${rating[1]}`;
            const yearString = `${year[0]}-${year[1]}`;
            console.log(genres)
            const genre = genres === 'Все жанры' ? null : genres
            console.log(genre);
            
            const genreFilter = genre !== null && genre !== '' ? `search[]=${genres}&field[]=genres.name&` : ''
            const ratingFilter = rating[0] !== rating[1] ? ratingString : rating[0]
            const yearsFilter = year[0] !== year[1] ? yearString : year[0];
            dispatch(setGenres(genreFilter))
            dispatch(setRating(ratingFilter))
            dispatch(setYear(yearsFilter))
            dispatch(setSearch(search))
        }
    }

    return (
        <form 
            className={styles.filters}
            onSubmit={handleSubmit(onSubmit)}
        >
            <div className={styles.ranges}>
                <Controller
                    control={control}
                    name='rating'
                    render={({field: {onChange, value}}) => 
                        <Rating 
                            value={value} 
                            onChange={onChange}
                        />
                    }
                />
                <Controller
                    control={control}
                    name='year'
                    render={({field: {onChange, value}}) => 
                        <Year 
                            value={value} 
                            onChange={onChange}
                        />
                    }
                />
                <Controller
                    control={control}
                    name='genres'
                    render={({field: {onChange}}) => 
                        <Genres 
                            onChange={onChange}
                        />
                    }
                />
            </div>
            <Controller
                control={control}
                name='search'
                render={({field: {onChange, value}}) => 
                    <SearchInput 
                        clearSearchValue={() => setValue('search', '')}
                        value={value}
                        onChange={onChange}
                    />
                }
            />
            <Button
                fn={onSubmit}
            >
                Найти
            </Button>
        </form>
    );
}

export default Filters