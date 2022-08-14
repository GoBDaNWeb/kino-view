// * react/next
import React from 'react'
import {IFactsProps} from '../types'

// *styles 
import styles from './Facts.module.scss'

const Facts: React.FC<IFactsProps> = ({facts}) => {
    return (
        <div className={styles.facts}>
            <h5>
                Интересные факты
            </h5>
            <ul className={styles.factsList}>
                {
                    facts && facts?.length > 0
                    ? (
                        <>
                            { 
                                facts?.map(fact => (
                                    <li key={fact.value} className={styles.item} dangerouslySetInnerHTML={{__html: fact.value}} />
                                ))
                            }
                        </>
                    ) : (
                        <div className={styles.empty}>
                            Фактов нет
                        </div>
                    )
                    
                } 
            </ul>
        </div>
    )
}

export default Facts