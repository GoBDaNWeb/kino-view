export function ratingColorHandler(rating: any) {
    if (rating === 0) {
        return 'defaultRating'
    } else if (rating < 4) {
        return 'badRating'
    } else if (rating < 7) {
        return 'normalRating'
    } else if (rating < 10) {
        return 'goodRating'
    } 
}