// * redux
import { useTypedSelector } from 'store/store';
import { useDispatch } from 'react-redux';
import { loadMoreCartoons } from 'store/slices/loadMoreSlice';

// * services
import { useGetNewCartoonsQuery } from 'services/KinoviewService';

// * styles

// * components
import MovieCard from 'components/common/MovieCard';
import Button from 'components/ui/Button';
import styles from './NewCartoons.module.scss';

const NewCartoons = () => {
    const dispatch = useDispatch();

    const { cartoonsLimit } = useTypedSelector((state) => state.load);
    const { isLoading, isFetching, data } =
        useGetNewCartoonsQuery(cartoonsLimit);

    return (
        <div className={styles.cartoons}>
            <h4>Новинки Мультфильмов</h4>
            <div className={styles.cartoonsList}>
                {isLoading ? (
                    <div>Loading...</div>
                ) : (
                    data?.docs?.map((movie) => (
                        <MovieCard key={movie.id} movie={movie} />
                    ))
                )}
            </div>
            <div className={styles.btns}>
                <Button fn={() => dispatch(loadMoreCartoons())}>
                    {isFetching ? 'Загрузка...' : 'Показать еще'}
                </Button>
            </div>
        </div>
    );
};

export default NewCartoons;
