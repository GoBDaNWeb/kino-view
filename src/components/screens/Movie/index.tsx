// * react/next 
import {Fragment} from 'react'
import {useRouter} from 'next/router'
import Image from 'next/image'

// * services
import {useGetMovieByIdQuery, useGetReviewsQuery} from 'services/KinoviewService'

// * styles 
import styles from './Movie.module.scss'

// * swiper
import { SwiperSlide } from 'swiper/react';

// * components 
import Info from './components/Info'
import Carousel from 'components/common/Carousel'
import PersonItem from 'components/common/PersonItem'
import Facts from './components/Facts'
import SimilarMovieCard from 'components/common/SimilarMovieCard'
import Reviews from './components/Reviews'

const Movie = () => {
    const router = useRouter()
    const {data: movieData} = useGetMovieByIdQuery(router.query.id)
    
    const aboutMovie = {
        countries: movieData?.countries,
        genres: movieData?.genres,
        slogan: movieData?.slogan,
        ageRating: movieData?.ageRating,
        movieLength: movieData?.movieLength,
        fees: movieData?.fees?.world?.value,
        premiere: movieData?.premiere?.world
    }

    return (
        <div className={styles.movie}>
            <div className={styles.mainInfo}>
                <img src={movieData?.poster.url} alt="Image" />  
                <div className={styles.info}>
                    <h3>
                        {movieData?.name} ({movieData?.year})
                    </h3>
                    <>
                        <h5>
                            О фильме
                        </h5>
                        <Info aboutMovie={aboutMovie}/>
                        <div className={styles.description}>
                            <h5>Описание</h5>
                            {movieData?.description}
                        </div>
                    </>
                </div>
            </div>
            <Carousel
                title='Актерский Состав'
                type='personal'
                quantity={movieData?.persons.length}
            >
                {
                    movieData?.persons.map((person, index) => (
                        <SwiperSlide key={index}>
                            <PersonItem person={person}/>
                        </SwiperSlide>
                    ))
                }
            </Carousel>
            <Facts facts={movieData?.facts}/>
                <Carousel
                    title='Похожее'
                    type='similar'
                    quantity={movieData?.similarMovies.length}
                >
                    {
                        movieData?.similarMovies.map((movie, index) => (
                            <SwiperSlide key={index}>
                                <SimilarMovieCard movie={movie}/>
                            </SwiperSlide>
                        ))
                    }
                </Carousel>
            <Reviews/>
        </div>
    )
}

export default Movie