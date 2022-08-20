// * react/next
import { GetServerSideProps, NextPage } from 'next';
import { getMovieById, getReviews } from 'services/KinoviewService';
import { initStore } from 'store/store';

// * components
import Movie from 'components/screens/Movie';

const MoviePage: NextPage = () => {
    return <Movie />;
};

export const getServerSideProps: GetServerSideProps = async (params) => {
    const store = initStore();
    await store.dispatch(getMovieById.initiate(params.query.id));
    // @ts-ignore
    await store.dispatch(getReviews.initiate(params.query.id));

    return { props: { initialReduxState: store.getState() } };
};

export default MoviePage;
