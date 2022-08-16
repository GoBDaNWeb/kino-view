// * redux
import { useTypedSelector } from 'store/store'

// * services 
import { useGetAnimeQuery } from 'services/KinoviewService'

// * styles 
import styles from './Anime.module.scss'

// * components 
import MovieCard from 'components/common/MovieCard'
import Filters from 'components/common/Filters'

const Anime = () => {
    const {filters} = useTypedSelector(state => state.filter)
    const {isLoading, isFetching, data} = useGetAnimeQuery(filters)

    return (
        <div className={styles.anime}>
            <h3>
                Найди Аниме По Вкусу
            </h3>
            <Filters/>
            <div className={styles.animeList}>
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

export default Anime