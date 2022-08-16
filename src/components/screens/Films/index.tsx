// * redux 
import {useTypedSelector} from 'store/store';

// * services 
import {useGetFilmsQuery} from 'services/KinoviewService'

// * styles 
import styles from './Films.module.scss'

// * components 
import MovieCard from 'components/common/MovieCard'
import Filters from 'components/common/Filters'

const Films = () => {
    const {filters} = useTypedSelector(state => state.filter)
    const {isLoading, isFetching, data} = useGetFilmsQuery(filters)

    return (
        <div className={styles.films}>
            <h3>
                Найди Фильмы По Вкусу
            </h3>
            <Filters/>
            <div className={styles.filmsList}>
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

export default Films