// * react
import React, { useState } from 'react';
import ReviewButton from 'components/ui/ReviewButton';
import { IReviewItemProps } from '../../../types';

// * styles
import styles from './ReviewItem.module.scss';

// * components

const ReviewItem: React.FC<IReviewItemProps> = ({ review }) => {
    const [isFullReview, setIsFullReview] = useState<boolean>(false);

    const changeFullReviewHandler = () => {
        setIsFullReview((prev) => !prev);
    };

    return (
        <div className={styles.review}>
            <h5>{review.title}</h5>
            <p className={isFullReview ? `${styles.fullReview}` : ''}>
                {review.review}
            </p>
            <ReviewButton
                isFullReview={isFullReview}
                fn={changeFullReviewHandler}
            />
        </div>
    );
};

export default ReviewItem;
