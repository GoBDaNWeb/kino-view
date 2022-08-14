// * react/next
import Link from 'next/link'

// * icons 
import {GiFilmSpool} from 'react-icons/gi'

// * styles 
import styles from './Footer.module.scss'

const Footer = () => {
    return (
        <div className={styles.footer}>
            <Link href='/'>
                <div className={styles.logo}>
                    <GiFilmSpool/>
                    Kino<span>View</span>
                </div>
            </Link>
            <span>
                @kinoview2022
            </span>
        </div>
    )
}

export default Footer