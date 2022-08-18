// * react 
import {useRouter} from 'next/router'

// * services 
import { useGetPersonByIdQuery, useGetMoviesByIdQuery } from "services/KinoviewService"

// * swiper
import { SwiperSlide } from 'swiper/react';

// * styles 
import styles from './Name.module.scss'

//  * components 
import Info from './components/Info'
import Carousel from 'components/common/Carousel'
import SimilarMovieCard from 'components/common/SimilarMovieCard'

const Name = () => {
    const router = useRouter()
    const {data} = useGetPersonByIdQuery(router.query.id)
    const countFilms = Number(data?.movies?.length) - 1
    const query = data?.movies?.map(el => `search=${el.id}&field=id`).join('&')
    
    const {data: personMovies} = useGetMoviesByIdQuery({query, limit: countFilms + 1})

    const aboutPerson = {
        career: data?.profession,
        sex: data?.sex,
        growth: data?.growth,
        birthday: data?.birthday,
        death: data?.death,
        totalMovies: data?.movies.length,
        spouses: data?.spouses
    }

    return (
        <div className={styles.person}>
            <div className={styles.mainInfo}>
                <img src={data?.photo} alt="Image" />  
                <div className={styles.info}>
                    <h3 className={styles.name}>
                        {data?.name}
                    </h3>
                    <h5 className={styles.nameEng}>
                        {data?.enName}
                    </h5>
                    <>
                        <h4 className={styles.aboutPersonTitle}>
                            О Персоне
                        </h4>
                        <Info aboutPerson={aboutPerson}/>
                    </>
                </div>
            </div>
            <Carousel
                title='Фильмы'
                type='films'
                quantity={data?.movies.length}
            >
                 {
                        personMovies && personMovies.docs.map((movie, index) => (
                            <SwiperSlide key={index}>
                                <SimilarMovieCard movie={movie}/>
                            </SwiperSlide>
                        ))
                    }
            </Carousel>
        </div>
    )
}

export default Name