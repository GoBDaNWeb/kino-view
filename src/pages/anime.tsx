// * react/next 
import {GetStaticProps, NextPage} from 'next'

// * redux
import { initStore } from 'store/store'

// * services 
import {getAnime} from 'services/KinoviewService'

// * components 
import Anime from 'components/screens/Anime'

const AnimePage: NextPage = () => {
    return <Anime/>
}

export const getStaticProps: GetStaticProps = async () => {
    const store = initStore()
    const state = store.getState()
    const {filters} = state.filter;
    const {page} = state.paginate;
    await store.dispatch(getAnime.initiate({filters, page}))
    return {props: {initialReduxState: store.getState()}}
}

export default AnimePage