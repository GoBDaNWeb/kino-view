// * react 
import React from 'react'
import {ISimilarMovieCardProps} from './types'
import Link from 'next/link'
import Image from 'next/image'

// * styles 
import styles from './SimilarMovieCard.module.scss'

const SimilarMovieCard: React.FC<ISimilarMovieCardProps> = ({movie}) => {
    return (
        <div>
            <Link href={`/movie/${movie.id}`}>
                <div className={styles.card}>
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
                    </div>
                </div>
            </Link>
        </div>
    )
}

export default SimilarMovieCard