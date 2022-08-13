// * react/next
import React from "react"

// * styles 
import styles from './Layout.module.scss'

// * components 
import Header from './Header'

const Layout = ({children}: {children: React.ReactNode}) => {
    return (
        <div>
            <Header/>
            <div className={styles.LayoutChildren}>
                {children}
            </div>
        </div>
    )
}

export default Layout