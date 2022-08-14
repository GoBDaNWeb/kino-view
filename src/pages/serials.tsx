// * react/next 
import {GetStaticProps, NextPage} from 'next'

// * redux
import { initStore } from 'store/store'

// * services 
import {getSerials} from 'services/KinoviewService'

// * components 
import Serials from 'components/screens/Serials'

const SerialsPage: NextPage = () => {
    return <Serials/>
}

export const getStaticProps: GetStaticProps = async () => {
    const store = initStore()
    const state = store.getState()

    await store.dispatch(getSerials.initiate())
    return {props: {initialReduxState: store.getState()}}
}

export default SerialsPage