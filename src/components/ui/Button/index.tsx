// * react/next 
import react from 'react'

// * styles 
import styles from './Button.module.scss'

const Button = ({children, fn}: {children: React.ReactNode, fn: any}) => {
    return (
        <button 
            onClick={() => fn()}
            className={styles.btn}
        >
            {children}
        </button>
    )
}

export default Button