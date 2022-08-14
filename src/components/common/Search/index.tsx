// * icons 
import {BiSearchAlt} from 'react-icons/bi'
import {AiOutlineClose} from 'react-icons/ai'

// * styles 
import styles from './Search.module.scss'
import { Transform } from 'stream'

const Search = () => {
    return (
        <div className={styles.search}>
            <label className={styles.searchInput}>
                <input type="text" placeholder='Найти кино'/>
                <AiOutlineClose className={styles.iconClose}/>
            </label>
            <button  className={styles.btn}>
                Найти
                <BiSearchAlt className={styles.iconSearch}/>
            </button>
        </div>
    )
}

export default Search