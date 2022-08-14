// * react/next 
import Link from 'next/link'

// * icons 
import {GiFilmSpool} from 'react-icons/gi'

// * styles 
import styles from './Header.module.scss'

// * components 
import Navbar from './Navbar'
import Auth from './Auth'

const Header = () => {
    return (
        <div className={styles.header}>
            <Link href='/'>
                <div className={styles.logo}>
                    <GiFilmSpool/>
                    Kino<span>View</span>
                </div>
            </Link>
            <Navbar/>
            {/* <Auth/> */}
        </div>
    )
}

export default Header