// * react/next
import React from 'react'
import Image from 'next/image'
import Link from 'next/link'
import { IMovieCardProps } from './types'

// * styles
import styles from './MovieCard.module.scss'

const MovieCard: React.FC<IMovieCardProps> = ({movie}) => {
    return (
        <Link href={`/movie/${movie.id}`}>
            <div className={styles.card}>
                <div className={movie.rating.kp > 6 ? `${styles.ratingGood}` : `${styles.ratingNormal}`}>
                    {movie.rating.kp}
                </div>
                <div className={styles.imgWrapper}>
                    <Image
                        unoptimized
                        className={styles.image}
                        layout="fill"
                        src={movie.poster.previewUrl}
                    />
                </div>
                <div className={styles.content}>
                    <h5>
                        {movie.name}
                    </h5>
                    <span>
                        {movie.type}, {movie.year}
                    </span>
                </div>
            </div>
        </Link>
    )
}

export default MovieCard