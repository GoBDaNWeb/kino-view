// * redux
import { useTypedSelector } from 'store/store';
import { useDispatch } from 'react-redux';
import { loadMoreFilms } from 'store/slices/loadMoreSlice';

// * services
import { useGetNewFilmsQuery } from 'services/KinoviewService';

// * styles

// * components
import MovieCard from 'components/common/MovieCard';
import Button from 'components/ui/Button';
import styles from './NewFilms.module.scss';

const NewFilms = () => {
    const dispatch = useDispatch();

    const { filmsLimit } = useTypedSelector((state) => state.load);
    const { isLoading, isFetching, data } = useGetNewFilmsQuery(filmsLimit);

    return (
        <div className={styles.films}>
            <h4>Новинки Кино</h4>
            <div className={styles.filmsList}>
                {isLoading ? (
                    <div>Loading...</div>
                ) : (
                    data?.docs?.map((movie) => (
                        <MovieCard key={movie.id} movie={movie} />
                    ))
                )}
            </div>
            <div className={styles.btns}>
                <Button fn={() => dispatch(loadMoreFilms())}>
                    {isFetching ? 'Загрузка...' : 'Показать еще'}
                </Button>
            </div>
        </div>
    );
};

export default NewFilms;
