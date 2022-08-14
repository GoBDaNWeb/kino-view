// * react/next 
import {useState} from 'react'
import {useRouter} from 'next/router'

// * services 
import { useGetReviewsQuery } from "services/KinoviewService"

// * styles 
import styles from './Reviews.module.scss'

// * components 
import ReviewItem from './ReviewItem'
import Button from 'components/ui/Button'


const Reviews = () => {
    const [limit, setLimit] = useState(3)

    const router = useRouter()
    const {isFetching, data} = useGetReviewsQuery({id: router.query.id, limit})
    
    const onLoadMoreReviews = () => {
        setLimit(prev => prev + 3)
    }
    
    return (
        <div className={styles.reviews}>
            <h5>
                Рецензии
            </h5>
            <div className={styles.reviewsList}>
                {
                    data && data.docs?.length > 0
                    ? (
                        <>
                            {
                                data?.docs.map(review => (
                                    <ReviewItem key={review.id} review={review}/>
                                ))
                            }
                        </>
                    ) : (
                        <div className={styles.empty}>
                            Рецензий пока что нет
                        </div>
                    )
                    
                }
                {
                    data && data.docs?.length > 0
                    && (
                        <Button
                            fn={onLoadMoreReviews}
                        >
                            {
                                isFetching
                                ? 'Загрузка...'
                                : 'Показать еще'
                            }
                        </Button>
                    )  
                }
            </div>
        </div>
    )
}

export default Reviews