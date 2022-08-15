// * react/next


// * redux 
import { useTypedSelector } from 'store/store' 

// * services
import { useGetMoviesBySearchQuery } from 'services/KinoviewService'


// * styles 
import styles from './SearchDropdown.module.scss'

// * components 
import SearchMovieCard from './SearchMovieCard'

const SearchDropDown = () => {
    const {searchValue, searchType} = useTypedSelector(state => state.search)
    const {isFetching, data} = useGetMoviesBySearchQuery({query: searchValue, type: searchType})
    const classcondition = searchValue?.length > 0 ? `${styles.visible} ${styles.dropdown}` : `${styles.hidden} ${styles.dropdown}`
    return (
        <div className={classcondition}>
            {
                isFetching
                ? (
                    <div>
                        Loading...
                    </div>
                ) : (
                    <>
                        {
                            data?.docs.map(movie => (
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