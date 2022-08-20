// * redux
import { useTypedSelector } from 'store/store';
import { useDispatch } from 'react-redux';
import { loadMoreSerials } from 'store/slices/loadMoreSlice';

// * services
import { useGetNewSerialsQuery } from 'services/KinoviewService';

// * styles

// * components
import MovieCard from 'components/common/MovieCard';
import Button from 'components/ui/Button';
import styles from './NewSerials.module.scss';

const NewSerials = () => {
    const dispatch = useDispatch();

    const { serialsLimit } = useTypedSelector((state) => state.load);
    const { isLoading, isFetching, data } = useGetNewSerialsQuery(serialsLimit);

    return (
        <div className={styles.serials}>
            <h4>Новинки Сериалов</h4>
            <div className={styles.serialsList}>
                {isLoading ? (
                    <div>Loading...</div>
                ) : (
                    data?.docs?.map((movie) => (
                        <MovieCard key={movie.id} movie={movie} />
                    ))
                )}
            </div>
            <div className={styles.btns}>
                <Button fn={() => dispatch(loadMoreSerials())}>
                    {isFetching ? 'Загрузка...' : 'Показать еще'}
                </Button>
            </div>
        </div>
    );
};

export default NewSerials;
