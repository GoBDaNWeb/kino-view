// * services 
import { useGetCartoonsQuery } from 'services/KinoviewService'

// * styles 
import styles from './Cartoons.module.scss'

// * components 
import MovieCard from 'components/common/MovieCard'

const Cartoons = () => {
    const {isLoading, data} = useGetCartoonsQuery()

    return (
        <div className={styles.cartoons}>
            <h3>
                Мультфильмы
            </h3>
            <div className={styles.cartoonsList}>
                {
                    isLoading
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