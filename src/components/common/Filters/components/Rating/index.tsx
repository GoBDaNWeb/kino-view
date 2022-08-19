// * react
import React from 'react'
import {IFilterComponentsProps} from '../../types'

// * styles
import styles from './Rating.module.scss'

// * components 
import RangeSlider from 'components/ui/RangeSlider'

const Rating: React.FC<IFilterComponentsProps> = ({value, onChange}) => {
    return (
        <div className={styles.ratingFilter}>
            <h5>Рейтинг</h5>
            <div className={styles.inputs}>
                <input 
                    type="number" 
                    placeholder="От" 
                    min={1}
                    max={10}
                    value={value && value[0]}
                    // @ts-ignore
                    onChange={(e) => onChange([e.target.value, value[1] || 10])}
                />
                <input 
                    type="number" 
                    placeholder="До"
                    min={2}
                    max={10}
                    value={value && value[1]}
                    // @ts-ignore
                    onChange={(e) => onChange([value[0] || 1, e.target.value])}
                />
            </div>
            <RangeSlider 
                min={1} 
                max={10} 
                step={1}
                defaultValue={[1, 10]}
                onChange={onChange} 
                value={value}
            />
        </div> 
    )
}

export default Rating