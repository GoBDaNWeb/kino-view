// * react/next 
import {GetStaticProps, NextPage} from 'next'

// * redux
import { initStore } from 'store/store'

// * services 
import {getCartoons} from 'services/KinoviewService'

// * components 
import Cartoons from 'components/screens/Cartoons'

const CartoonsPage: NextPage = () => {
    return <Cartoons/>
}

export const getStaticProps: GetStaticProps = async () => {
    const store = initStore()
    const state = store.getState()

    await store.dispatch(getCartoons.initiate())
    return {props: {initialReduxState: store.getState()}}
}

export default CartoonsPage