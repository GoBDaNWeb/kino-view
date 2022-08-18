// * react/next 
import Link from 'next/link'

// * redux 
import { useTypedSelector } from 'store/store'

// * icons 
import {GiFilmSpool} from 'react-icons/gi'

// * styles 
import styles from './Header.module.scss'

// * components 
import Navbar from './components/Navbar'
import MobileMenu from './components/MobileMenu'
import Burger from 'components/ui/Burger'

const Header = () => {
    return (
        <div className={styles.header}>
            <div className={styles.headerContet}>
                <Link href='/'>
                    <div className={styles.logo}>
                        <GiFilmSpool/>
                        Kino<span>View</span>
                    </div>
                </Link>
                <Navbar/>
                <Burger/>
            </div>
            <MobileMenu/>
        </div>
    )
}

export default Header