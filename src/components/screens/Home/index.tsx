// * react
import React from 'react';

// * styles
import styles from './Home.module.scss';

// * components
import Hero from './components/Hero';
import NewFilms from './components/NewFilms';
import NewSerials from './components/NewSerials';
import NewCartoons from './components/NewCartoons';
import NewAnime from './components/NewAnime';

const Home = () => {
    return (
        <>
            <Hero />
            <div className={styles.home}>
                <NewFilms />
                <NewSerials />
                <NewCartoons />
                <NewAnime />
            </div>
        </>
    );
};

export default Home;
