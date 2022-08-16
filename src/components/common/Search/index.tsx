// * styles 
import styles from './Search.module.scss'

// * components 
import SearchForm from './components/SearchForm'
import SearchDropDown from './components/SearchDropdown'

const Search = () => {
    return (
        <div className={styles.search}>
            <SearchForm/>
            <SearchDropDown/>
        </div>
    )
}

export default Search