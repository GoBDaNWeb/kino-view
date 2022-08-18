// * react/next 
import {useRouter} from 'next/router'
import Link from 'next/link'

// * redux 
import { useTypedSelector } from 'store/store'

// * styles 
import styles from './MobileMenu.module.scss'

const MobileMenu = () => {
    const {pathname} = useRouter()
    const {burgerIsActive} = useTypedSelector(state => state.burger)
    return (
        <div className={burgerIsActive ? styles.menuActive : styles.menuDefault}>
            <ul className={styles.nav}>
                <Link href='/films'>
                    <li className={pathname === '/films' ? `${styles.active}` : ''}>
                        Фильмы
                    </li>
                </Link>
                <Link href='/serials'>
                    <li className={pathname === '/serials' ? `${styles.active}` : ''}>
                        Сериалы
                    </li>
                </Link>
                <Link href='/cartoons'>
                    <li className={pathname === '/cartoons' ? `${styles.active}` : ''}>
                        Мультфильмы
                    </li>
                </Link>
                <Link href='/anime'>
                    <li className={pathname === '/anime' ? `${styles.active}` : ''}>
                        Аниме
                    </li>
                </Link>
            </ul>
        </div>
    )
}

export default MobileMenu