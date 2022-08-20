// * react/next
import { useRouter } from 'next/router';

// * services
import { useGetMovieByIdQuery } from 'services/KinoviewService';

// * swiper
import { SwiperSlide } from 'swiper/react';

// * components
import Carousel from 'components/common/Carousel';
import PersonItem from 'components/common/PersonItem';
import SimilarMovieCard from 'components/common/SimilarMovieCard';
import Facts from './components/Facts';
import Info from './components/Info';
import styles from './Movie.module.scss';
import Reviews from './components/Reviews';

const Movie = () => {
    const router = useRouter();
    const { data: movieData } = useGetMovieByIdQuery(router.query.id);

    const aboutMovie = {
        countries: movieData?.countries,
        genres: movieData?.genres,
        slogan: movieData?.slogan,
        ageRating: movieData?.ageRating,
        movieLength: movieData?.movieLength,
        fees: movieData?.fees?.world?.value,
        premiere: movieData?.premiere?.world,
    };

    return (
        <div className={styles.movie}>
            <div className={styles.mainInfo}>
                <img src={movieData?.poster.url} alt="poster " />
                <div className={styles.info}>
                    <h3>
                        {movieData?.name} ({movieData?.year})
                    </h3>
                    <>
                        <h5>О фильме</h5>
                        <Info aboutMovie={aboutMovie} />
                        <div className={styles.description}>
                            <h5>Описание</h5>
                            {movieData?.description}
                        </div>
                    </>
                </div>
            </div>
            <Carousel
                title="Актерский Состав"
                type="personal"
                quantity={movieData?.persons.length}
            >
                {movieData?.persons.map((person) => (
                    <SwiperSlide key={person.id}>
                        <PersonItem person={person} />
                    </SwiperSlide>
                ))}
            </Carousel>
            <Facts facts={movieData?.facts} />
            <Carousel
                title="Похожее"
                type="similar"
                quantity={movieData?.similarMovies.length}
            >
                {movieData?.similarMovies.map((movie) => (
                    <SwiperSlide key={movie.id}>
                        <SimilarMovieCard movie={movie} />
                    </SwiperSlide>
                ))}
            </Carousel>
            <Reviews />
        </div>
    );
};

export default Movie;
