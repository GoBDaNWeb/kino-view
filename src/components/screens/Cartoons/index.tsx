// * redux
import { useTypedSelector } from 'store/store'

// * services 
import { useGetCartoonsQuery } from 'services/KinoviewService'

// * styles 
import styles from './Cartoons.module.scss'

// * components 
import MovieCard from 'components/common/MovieCard'
import Filters from 'components/common/Filters'

const Cartoons = () => {
    const {filters} = useTypedSelector(state => state.filter)
    const {isLoading, isFetching, data} = useGetCartoonsQuery(filters)

    return (
        <div className={styles.cartoons}>
            <h3>
                Найди Мультфильмы По Вкусу
            </h3>
            <Filters/>
            <div className={styles.cartoonsList}>
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

export default Cartoons