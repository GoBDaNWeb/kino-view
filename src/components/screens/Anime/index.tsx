// * services 
import { useGetAnimeQuery } from 'services/KinoviewService'

// * styles 
import styles from './Anime.module.scss'

// * components 
import MovieCard from 'components/common/MovieCard'

const Anime = () => {
    const {isLoading, data} = useGetAnimeQuery()

    return (
        <div className={styles.anime}>
            <h3>
                Аниме
            </h3>
            <div className={styles.animeList}>
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

export default Anime