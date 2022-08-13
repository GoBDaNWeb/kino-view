// * icons 
import {BiSearchAlt} from 'react-icons/bi'
import {AiOutlineClose} from 'react-icons/ai'

// * styles 
import styles from './Search.module.scss'

const Search = () => {
    return (
        <label className={styles.search}>
            <BiSearchAlt className={styles.iconSearch}/>
            <input type="text" placeholder='Найти кино'/>
            <AiOutlineClose className={styles.iconClose}/>
        </label>
    )
}

export default Search