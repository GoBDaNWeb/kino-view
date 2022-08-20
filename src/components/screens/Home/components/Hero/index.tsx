// * react
import React from 'react';

// * styles
import Search from 'components/common/Search';
import styles from './Hero.module.scss';

// * components

const Hero = () => {
    return (
        <div className={styles.hero}>
            <div className={styles.backdrop} />
            <video preload="auto" autoPlay muted loop className="video">
                <source type="video/mp4" src="video-hero.mp4" />
            </video>
            <div className={styles.content}>
                <h1>Вселенная кино безгранична</h1>
                <h4>Найди Кино или Сериал для просмотра</h4>
                <Search />
            </div>
        </div>
    );
};

export default Hero;
