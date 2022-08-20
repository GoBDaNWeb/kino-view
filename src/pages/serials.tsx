// * react/next
import { GetStaticProps, NextPage } from 'next';

// * redux
import { initStore } from 'store/store';

// * services
import { getSerials } from 'services/KinoviewService';

// * components
import Serials from 'components/screens/Serials';

const SerialsPage: NextPage = () => {
    return <Serials />;
};

export const getStaticProps: GetStaticProps = async () => {
    const store = initStore();
    const state = store.getState();
    const { filters } = state.filter;
    const { page } = state.paginate;
    await store.dispatch(getSerials.initiate({ filters, page }));
    return { props: { initialReduxState: store.getState() } };
};

export default SerialsPage;
