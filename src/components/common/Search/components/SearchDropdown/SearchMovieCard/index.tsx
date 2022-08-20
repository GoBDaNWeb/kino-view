// * react/next
import React from 'react';
import Link from 'next/link';
import Image from 'next/image';
import { IMovieCardProps } from 'components/common/Search/types';

// * helpers
import cropText from 'helpers/cropText';
import converMovieName from 'helpers/convertMovieNames';
import ratingColorHandler from 'helpers/ratingColorHandler';

// * styles
import styles from './SearchMovieCard.module.scss';

const SearchMovieCard: React.FC<IMovieCardProps> = ({ movie }) => {
    return (
        <Link href={`/movie/${movie.id}`}>
            <div className={styles.card}>
                <div className={styles.imgWrapper}>
                    <Image
                        src={movie.poster.url}
                        alt="movie poster"
                        className={styles.image}
                        layout="fill"
                        unoptimized
                    />
                    <div
                        className={`${styles.rating} ${ratingColorHandler(
                            movie.rating.kp,
                        )}`}
                    >
                        {movie.rating.kp}
                    </div>
                </div>
                <div className={styles.content}>
                    <>
                        <h3>{movie.name}</h3>
                        <h5>{converMovieName(movie.type)}</h5>
                    </>
                    <p className={styles.description}>
                        {cropText(movie.description)}
                    </p>
                </div>
            </div>
        </Link>
    );
};

export default SearchMovieCard;
