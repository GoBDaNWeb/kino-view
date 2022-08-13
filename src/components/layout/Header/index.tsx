// * styles 
import styles from './Header.module.scss'

// * components 
import Search from './Search'

const Header = () => {
    return (
        <div className={styles.header}>
            <div className={styles.logo}>
                Kino<span>View</span>
            </div>
            <Search/>
        </div>
    )
}

export default Header