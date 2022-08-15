// * redux
import { useTypedSelector } from 'store/store'

// * styles 
import styles from './Search.module.scss'

// * components 
import SearchForm from './SearchForm'
import SearchDropDown from './SearchDropdown'

const Search = () => {
    
    return (
        <div className={styles.search}>
            <SearchForm/>
            <SearchDropDown/>
        </div>
    )
}

export default Search