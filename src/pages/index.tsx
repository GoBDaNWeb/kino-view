// * react/next
import { GetStaticProps, NextPage } from 'next';
import {
    getNewFilms,
    getNewSerials,
    getNewCartoons,
    getNewAnime,
} from 'services/KinoviewService';
import { initStore } from 'store/store';

// * components
import Home from 'components/screens/Home';

const HomePage: NextPage = () => {
    return <Home />;
};

export const getStaticProps: GetStaticProps = async () => {
    const store = initStore();
    const state = store.getState();
    const { filmsLimit, serialsLimit, cartoonsLimit, animeLimit } = state.load;
    await store.dispatch(getNewFilms.initiate(filmsLimit));
    await store.dispatch(getNewSerials.initiate(serialsLimit));
    await store.dispatch(getNewCartoons.initiate(cartoonsLimit));
    await store.dispatch(getNewAnime.initiate(animeLimit));

    return { props: { initialReduxState: store.getState() } };
};

export default HomePage;
