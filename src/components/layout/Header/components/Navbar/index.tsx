// * react/next
import Link from 'next/link';
import { useRouter } from 'next/router';

// * styles
import styles from './Navbar.module.scss';

const Navbar = () => {
    const { pathname } = useRouter();

    return (
        <>
            <ul className={styles.navbar}>
                <Link href="/films">
                    <li
                        className={
                            pathname === '/films' ? `${styles.active}` : ''
                        }
                    >
                        Фильмы
                    </li>
                </Link>
                <Link href="/serials">
                    <li
                        className={
                            pathname === '/serials' ? `${styles.active}` : ''
                        }
                    >
                        Сериалы
                    </li>
                </Link>
                <Link href="/cartoons">
                    <li
                        className={
                            pathname === '/cartoons' ? `${styles.active}` : ''
                        }
                    >
                        Мультфильмы
                    </li>
                </Link>
                <Link href="/anime">
                    <li
                        className={
                            pathname === '/anime' ? `${styles.active}` : ''
                        }
                    >
                        Аниме
                    </li>
                </Link>
            </ul>
        </>
    );
};

export default Navbar;
