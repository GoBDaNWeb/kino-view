// * react 
import React from 'react'
import {IReviewButton} from './types'

// * styles 
import styles from './ReviewButton.module.scss'

const ReviewButton: React.FC<IReviewButton> = ({isFullReview, fn}) => {
    return (
        <button
            className={styles.btn}
            onClick={() => fn()}
        >
            {
                isFullReview
                ? 'Скрыть'
                : 'Показать Полностью'
            }
        </button>
    )
}

export default ReviewButton