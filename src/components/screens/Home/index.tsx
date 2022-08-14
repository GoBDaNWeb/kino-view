// * react
import React from 'react'

// * styles 
import styles from './Home.module.scss'

// * components 
import Hero from './Hero'
import NewFilms from './NewFilms'
import NewSerials from './NewSerials'
import NewCartoons from './NewCartoons'
import NewAnime from './NewAnime'

const Home: React.FC<any> = () => {
    return (
        <div>
            <Hero/>
            <NewFilms/>
            <NewSerials/>
            <NewCartoons/>
            <NewAnime/>
        </div>
    )
}

export default Home