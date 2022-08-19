// * react/next
import React from 'react'
import { IInfoProps } from '../../types'
import moment from 'moment'

// * helpers 
import {convertNumbers} from 'helpers/convertNumbers'

// * styles
import styles from './Info.module.scss'

const Info: React.FC<IInfoProps> = ({aboutMovie}) => {
    return (
        <ul className={styles.info}>
            <li>
                <span className={styles.title}>
                    Страны 
                </span>
                <span className={`${styles.value} ${styles.array}`}>
                    {
                        aboutMovie.countries?.map((country: any, index: number) => (
                            <div key={index}>
                                {country.name}
                            </div>
                        ))
                    }
                </span>
            </li>
            <li>
                <span className={styles.title}>
                    Жанры   
                </span>
                
                <span className={`${styles.value} ${styles.array}`}>
                    {
                        aboutMovie.genres?.map((genre: any, index: number) => (
                            <div key={index}>
                                {index ? ', ' : ''}{genre.name}
                            </div>
                        ))
                    }
                </span>
            </li>
            <li>
                <span className={styles.title}>
                    Слоган  
                </span>
                <span className={styles.value}>
                    {
                        aboutMovie.slogan
                        ? aboutMovie.slogan
                        : '-'
                    }
                </span>
            </li>
            <li>
                <span className={styles.title}>
                    Возраст
                </span>
                <span className={styles.value}>
                    {aboutMovie.ageRating}+
                </span>
            </li>
            <li>
                <span className={styles.title}>
                    Время 
                </span>
                <span className={styles.value}>
                    {aboutMovie.movieLength}мин
                </span>
            </li>
            <li>
                <span className={styles.title}>
                    Сборы в мире
                </span>
                <span className={styles.value}>
                    {
                        aboutMovie.fees
                        ? <span>$ {convertNumbers(aboutMovie.fees)}</span> 
                        : '-'
                    }
                </span>
            </li>
            <li>
                <span className={styles.title}>
                    Премьера в мире
                </span>
                <span className={styles.value}>
                    {
                        aboutMovie.premiere
                        ? moment(aboutMovie.premiere).format('ll')
                        : '-'
                    }
                </span>
            </li>
        </ul>
    )
}

export default Info