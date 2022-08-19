// * redux 
import { useTypedSelector } from 'store/store' 

// * services
import { useGetMoviesBySearchQuery } from 'services/KinoviewService'


// * styles 
import styles from './SearchDropdown.module.scss'

// * components 
import SearchMovieCard from './SearchMovieCard'
import Loader from 'components/ui/Loader'

const SearchDropDown = () => {
    const {searchValue, searchType, hiddenSearchedMovies} = useTypedSelector(state => state.search)
    //@ts-ignore
    const {isFetching, data} = useGetMoviesBySearchQuery({query: searchValue, type: searchType})
    const classcondition = searchValue?.length > 0 
        && hiddenSearchedMovies 
        ? `${styles.visible} ${styles.dropdown}` 
        : `${styles.hidden} ${styles.dropdown}`

    return (
        <div className={classcondition}>
            {
                isFetching
                ? (
                    <div className={styles.loading}>
                        <Loader/>
                    </div>  
                ) 
                : (
                    <>
                        {
                            data?.docs?.map(movie => (
                                <SearchMovieCard key={movie.id} movie={movie}/>
                            ))
                        }
                    </>
                )
            }
        </div>
    )
}

export default SearchDropDown