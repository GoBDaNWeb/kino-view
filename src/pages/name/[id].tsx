// * react/next
import { GetServerSideProps, NextPage } from 'next';

// *redux
import { initStore } from 'store/store';

// * srvices
import { getPersonById } from 'services/KinoviewService';

// * components
import Name from 'components/screens/Name';

const NamePage: NextPage = () => {
    return <Name />;
};

export const getServerSideProps: GetServerSideProps = async (params) => {
    const store = initStore();

    await store.dispatch(getPersonById.initiate(params.query.id));

    return { props: { initialReduxState: store.getState() } };
};

export default NamePage;
