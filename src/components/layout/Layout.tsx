// * react/next
import React, {PropsWithChildren} from "react"

// * styles 
import styles from './Layout.module.scss'

// * components 
import Header from './Header'
import Footer from './Footer'

const Layout: React.FC<PropsWithChildren> = ({children}) => {
    return (
        <div className={styles.layout}>
            <Header/>
            <div className={styles.LayoutChildren}>
                {children}
            </div>
            <Footer/>
        </div>
    )
}

export default Layout