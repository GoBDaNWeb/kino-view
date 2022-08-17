// * react/next 
import { useEffect } from 'react'

// * redux 
import { useTypedSelector } from 'store/store'

// * services 
import { useGetSerialsQuery } from 'services/KinoviewService'

// * styles 
import styles from './Serials.module.scss'

// * components 
import MovieCard from 'components/common/MovieCard'
import Filters from 'components/common/Filters'
import Pagination from 'components/common/Pagination';
import Loader from 'components/ui/Loader'

const Serials = () => {
    const {filters} = useTypedSelector(state => state.filter)
    const {page} = useTypedSelector(state => state.paginate)

    const {isLoading, refetch, isFetching, data} = useGetSerialsQuery({filters, page})

    useEffect(() => {
        refetch()
    }, [page])

    return (
        <div className={styles.serials}>
            <h3>
                Найди Сериалы По Вкусу
            </h3>
            <Filters/>
            {
                isLoading || isFetching
                ? (<Loader/>)
                : (
                    <div className={styles.serialsList}>
                        {
                            data?.docs?.map(movie => (
                                <MovieCard key={movie.id} movie={movie}/>
                            ))
                        }
                    </div>
                )
            }
            <Pagination totalPages={data?.pages}/>
        </div>
    )
}

export default Serials