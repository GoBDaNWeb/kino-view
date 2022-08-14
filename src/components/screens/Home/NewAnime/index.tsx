// * redux
import {useTypedSelector} from 'store/store'
import { useDispatch } from 'react-redux'
import { loadMoreAnime } from 'store/slices/loadMoreSlice'

// * services 
import {useGetNewAnimeQuery} from 'services/KinoviewService'

// * styles 
import styles from './NewAnime.module.scss'

// * components 
import MovieCard from 'components/common/MovieCard'
import Button from 'components/ui/Button'

const NewAnime = () => {
    const dispatch = useDispatch()

    const {animeLimit} = useTypedSelector(state => state.load)
    const {isLoading, isFetching, data} = useGetNewAnimeQuery(animeLimit)

    return (
        <div className={styles.anime}>
            <h4>
                Новинки Аниме
            </h4>
            <div className={styles.animeList}>
                {
                    isLoading
                    ? (<div>Loading...</div>)
                    : data?.docs?.map(movie => (
                        <MovieCard key={movie.id} movie={movie}/>
                    ))
                }
            </div>
            <div className={styles.btns}>
                <Button
                    fn={() => dispatch(loadMoreAnime())}
                >
                    {
                        isFetching
                        ? 'Загрузка...'
                        : 'Показать еще'
                    }
                </Button>
            </div>
        </div>
    )
}

export default NewAnime