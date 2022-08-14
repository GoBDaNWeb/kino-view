// * services 
import {useGetFilmsQuery} from 'services/KinoviewService'

// * styles 
import styles from './Films.module.scss'

// * components 
import MovieCard from 'components/common/MovieCard'

const Films = () => {
    const {isLoading, data} = useGetFilmsQuery()
    
    return (
        <div className={styles.films}>
            <h3>
                Фильмы
            </h3>
            <div className={styles.filmsList}>
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

export default Films