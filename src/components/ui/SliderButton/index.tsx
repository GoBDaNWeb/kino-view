// * react/next
import React, {forwardRef} from 'react'
import {SliderButtonProps} from './types'

// * icons 
import {MdNavigateNext, MdNavigateBefore} from 'react-icons/md'

// * styles 
import styles from './SliderButton.module.scss'

const SliderButton = forwardRef<HTMLButtonElement, SliderButtonProps>((props, ref) => {
    return (
        <button
            className={styles.btn}
            ref={ref}
        >
            {
                props.dir === 'prev' 
                ? <MdNavigateBefore className={styles.iconPrev}/> 
                : <MdNavigateNext className={styles.iconNext}/>
            }
        </button>
    )
})

SliderButton.displayName = 'SliderButton';

export default SliderButton