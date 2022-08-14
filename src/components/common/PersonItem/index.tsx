// * react/nexzt 
import React from 'react'
import Link from 'next/link'
import {IPersonItemProps} from './types'

// * styles 
import styles from './PersonItem.module.scss'

const PersonItem: React.FC<IPersonItemProps> = ({person}) => {
    return (
        <Link href={`/name/${person.id}`}>
            <div className={styles.person}>
                <div className={styles.imgWrapper}>
                    <img src={person.photo} alt="Avatar" className={styles.image}/>
                </div>
                <div className={styles.info}>
                    <h4 className={styles.name}>
                        {person.name}
                    </h4>
                    <h5 className={styles.description}>
                        {person.description}
                    </h5>
                    <h6 className={styles.profession}>
                        {person.enProfession}
                    </h6>
                </div>
            </div>
        </Link>
    )
}

export default PersonItem