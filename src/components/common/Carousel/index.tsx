// * react/next
import React, {PropsWithChildren, useRef} from "react";
import {ICarouselProps} from './types'

// * swiper
import { Swiper, SwiperSlide } from 'swiper/react';
import "swiper/css";
import "swiper/css/navigation";
import styles from './Carousel.module.scss'
import SwiperClass, { Navigation } from "swiper";

// * components 
import SliderButton from 'components/ui/SliderButton'

const breakpoints = {
    577: {
        slidesPerGroup: 3,
        slidesPerView: 3,
        spaceBetween: 15
    },
    769: {
        slidesPerGroup: 3,
        slidesPerView: 3,
        spaceBetween: 30
    },
    1025: {
        slidesPerGroup: 4,
        slidesPerView: 4,
        spaceBetween: 30
    },
    1200: {
        slidesPerGroup: 5,
        slidesPerView: 5,
        spaceBetween: 30
    },
}

const Carousel: React.FC<PropsWithChildren<ICarouselProps>> = ({children, quantity, title, type}) => {
    const navigationPrevRef = useRef<HTMLButtonElement>(null)
    const navigationNextRef = useRef<HTMLButtonElement>(null)

    const navigation = {
        prevEl: navigationPrevRef.current,
        nextEl: navigationNextRef.current,
    }

    const onSwiper = (swiper: SwiperClass) => {
        setTimeout(() => {
            // @ts-ignore
            swiper.params.navigation.prevEl = navigationPrevRef.current;
            // @ts-ignore
            swiper.params.navigation.nextEl = navigationNextRef.current;

            // Re-init navigation
            swiper.navigation.destroy()
            swiper.navigation.init()
            swiper.navigation.update()
        })
    }

    return (
        <>
            <div className={styles.top}>
                <h4 className={styles.personTitle}>
                    {title} <span>({quantity})</span>
                </h4>
                <div className={styles.btns}>
                    <SliderButton dir='prev' ref={navigationPrevRef}/>
                    <SliderButton dir='next' ref={navigationNextRef}/>
                </div>
            </div>
            <Swiper
                slidesPerView={5}
                spaceBetween={30}
                navigation={navigation}
                modules={[Navigation]}
                onSwiper={onSwiper}
                breakpoints={breakpoints}
                className={styles.swiper}
            >
                {
                    quantity && quantity > 0
                    ? (
                        <>
                            {children}
                        </>
                    ) : (
                        <>
                            {
                                type === 'personal'
                                ? (
                                    <div className={styles.empty}>
                                        Актеров Нет
                                    </div>
                                ) : (
                                    <div className={styles.empty}>
                                        Похожего Нет
                                    </div>
                                )
                            }
                        </>
                    ) 
                }  
            </Swiper>
        </>
    )
}

export default Carousel