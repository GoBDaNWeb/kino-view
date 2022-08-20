export default function ratingColorHandler(rating: any) {
    if (rating === 0) {
        return 'defaultRating';
    }
    if (rating < 4) {
        return 'badRating';
    }
    if (rating < 7) {
        return 'normalRating';
    }
    if (rating < 10) {
        return 'goodRating';
    }
}
