// * react/next
import { GetStaticProps, NextPage } from 'next';

// * redux
import { initStore } from 'store/store';

// * services
import { getFilms } from 'services/KinoviewService';

// * components
import Films from 'components/screens/Films';

const FilmsPage: NextPage = () => {
    return <Films />;
};

export const getStaticProps: GetStaticProps = async () => {
    const store = initStore();
    const state = store.getState();
    const { filters } = state.filter;
    const { page } = state.paginate;
    await store.dispatch(getFilms.initiate({ filters, page }));

    return { props: { initialReduxState: store.getState() } };
};

export default FilmsPage;
