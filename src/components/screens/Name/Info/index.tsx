// * react 
import Link from 'next/link'

// * helpers 
import {convertNumbers} from 'helpers/convertNumbers'

// * styles
import styles from './Info.module.scss'

const Info = ({aboutPerson}: {aboutPerson: any}) => {
    return (
        <ul className={styles.info}>
            <li>
                <span className={styles.title}>
                    Карьера 
                </span>
                <span className={`${styles.value} ${styles.array}`}>
                    {
                        aboutPerson.career
                        ? (
                            <>
                                {
                                    aboutPerson.career.map((carrer: any, index: number) => (
                                        <div key={index}>
                                            {carrer.value}
                                        </div>
                                    ))
                                }
                            </>
                        ) : ('-')
                    }
                </span>
            </li>
            <li>
                <span className={styles.title}>
                    Пол   
                </span>
                
                <span className={`${styles.value} ${styles.array}`}>
                    {
                        aboutPerson.sex
                        ? aboutPerson.sex
                        : '-'
                    }
                </span>
            </li>
            <li>
                <span className={styles.title}>
                    Рост  
                </span>
                <span className={styles.value}>
                    {
                        aboutPerson.growth
                        ? aboutPerson.growth
                        : '-'
                    }
                </span>
            </li>
            <li>
                <span className={styles.title}>
                    Дата Рождения
                </span>
                <span className={styles.value}>
                    {
                        aboutPerson.birthday
                        ? aboutPerson.birthday
                        : '-'
                    }
                </span>
            </li>
            <li>
                <span className={styles.title}>
                    Дата Смерти 
                </span>
                <span className={styles.value}>
                    {
                        aboutPerson.death
                        ? aboutPerson.death
                        : '-'
                    }
                </span>
            </li>
            <li>
                <span className={styles.title}>
                    Всего фильмов
                </span>
                <span className={styles.value}>
                    {
                        aboutPerson.totalMovies
                        ? aboutPerson.totalMovies
                        : '-'
                    }
                </span>
            </li>
            <li>
                <span className={styles.title}>
                    {
                        aboutPerson.sex === 'Мужской'
                        ? 'Супруга'
                        : 'Супруг'
                    }
                </span>
                <span className={styles.value}>
                    {
                        aboutPerson.spouses
                        ? (
                            <>
                                {
                                    aboutPerson.spouses.map((spous: any) => (
                                        <Link href={`/name/${spous.id}`} key={spous.id}>
                                            {spous.name}
                                        </Link>
                                    ))
                                }
                            </>
                        )
                        : '-'
                    }
                </span>
            </li>
        </ul>
    )
}

export default Info