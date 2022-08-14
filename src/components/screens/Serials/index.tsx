// * services 
import { useGetSerialsQuery } from 'services/KinoviewService'

// * styles 
import styles from './Serials.module.scss'

// * components 
import MovieCard from 'components/common/MovieCard'

const Serials = () => {
    const {isLoading, data} = useGetSerialsQuery()

    return (
        <div className={styles.serials}>
            <h3>
                Сериалы
            </h3>
            <div className={styles.serialsList}>
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

export default Serials