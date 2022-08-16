// * redux 
import { useTypedSelector } from 'store/store'

// * services 
import { useGetSerialsQuery } from 'services/KinoviewService'

// * styles 
import styles from './Serials.module.scss'

// * components 
import MovieCard from 'components/common/MovieCard'
import Filters from 'components/common/Filters'

const Serials = () => {
    const {filters} = useTypedSelector(state => state.filter)
    const {isLoading, isFetching, data} = useGetSerialsQuery(filters)

    return (
        <div className={styles.serials}>
            <h3>
                Найди Сериалы По Вкусу
            </h3>
            <Filters/>
            <div className={styles.serialsList}>
                {
                    isLoading || isFetching
                    ? (<div>Loading...</div>)
                    : data?.docs?.map(movie => (
                        <MovieCard key={movie.id} movie={movie}/>
                    ))
                }
            </div>
        </div>
    )
}

export default Serials