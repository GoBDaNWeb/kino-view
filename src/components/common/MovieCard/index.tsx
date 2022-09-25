// * react/next
import React from 'react';
import Image from 'next/image';
import Link from 'next/link';
import { IMovieCardProps } from './types';

// * helpers
import converMovieName from 'helpers/convertMovieNames';
import ratingColorHandler from 'helpers/ratingColorHandler';
import convertRating from 'helpers/converRating';

// * styles
import styles from './MovieCard.module.scss';

const MovieCard: React.FC<IMovieCardProps> = ({ movie }) => {
    return (
        <Link href={`/movie/${movie.id}`}>
            <div className={styles.card}>
                {/* prettier-ignore */}
                <div className={`${styles.rating} ${ratingColorHandler(movie.rating.kp)}`}>
                    {convertRating(movie.rating.kp)}
                </div>
                <div className={styles.imgWrapper}>
                    {movie.poster ? (
                        <Image
                            unoptimized
                            className={styles.image}
                            layout="fill"
                            src={movie.poster.previewUrl}
                        />
                    ) : (
                        <div className={styles.skeleton} />
                    )}
                </div>
                <div className={styles.content}>
                    <h5>{movie.name}</h5>
                    <span>
                        {converMovieName(movie.type)}, {movie.year}
                    </span>
                </div>
            </div>
        </Link>
    );
};

export default MovieCard;
