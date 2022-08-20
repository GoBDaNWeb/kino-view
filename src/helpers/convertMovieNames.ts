export default function converMovieName(name: string) {
    switch (name) {
        case 'movie':
            return 'Фильм';
        case 'tv-series':
            return 'Сериал';
        case 'cartoon':
            return 'Мультфильм';
        case 'anime':
            return 'Аниме';
        default:
            return '';
    }
}
