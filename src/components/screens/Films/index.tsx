// * react/next 
import {useEffect} from 'react'

// * redux 
import {useTypedSelector} from 'store/store';

// * services 
import {useGetFilmsQuery} from 'services/KinoviewService'

// * styles 
import styles from './Films.module.scss'

// * components 
import MovieCard from 'components/common/MovieCard'
import Filters from 'components/common/Filters'
import Pagination from 'components/common/Pagination';
import Loader from 'components/ui/Loader';

const Films = () => {
    const {filters} = useTypedSelector(state => state.filter)
    const {page} = useTypedSelector(state => state.paginate)
    const {isLoading, refetch, isFetching, data} = useGetFilmsQuery({filters, page})   

    useEffect(() => {
        refetch()
    }, [page])

    return (
        <div className={styles.films}>
            <h3>
                Найди Фильмы По Вкусу
            </h3>
            <Filters/>
            {
                isLoading || isFetching
                ? (<Loader/>)
                : (
                    <div className={styles.filmsList}>
                        {
                            data?.docs?.map(movie => (
                                <MovieCard key={movie.id} movie={movie}/>
                            ))
                        }
                    </div>
                )
            }
            <Pagination 
                totalPages={data?.pages}
            />
        </div>
    )
}

export default Films