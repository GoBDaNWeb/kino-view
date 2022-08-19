interface IMoviePerson {
    id: number;
    name: string;
    enName: string;
    description: string;
    enProfession: 'director' | 'actor' | 'design' | 'producer' | 'composer' | 'editor';
    photo: string;
}

interface IFacts {
    spoiler: boolean,
    type: string,
    value: string
}

interface IReview {
    author: string,
    date: Date,
    id: number,
    movieId: number,
    review: string,
    reviewDislikes: number,
    reviewLikes: number,
    title: string,
    updatedAt: Date,
    userRating: number
}

export interface IPersonItemProps {
    person: IMoviePerson
}

export interface IFactsProps {
    facts?: IFacts[]
}

export interface IReviewItemProps {
    review: IReview
}

interface ICoutry {
    name: string
}

interface IGenre{
    name: string
}

interface IInfo {
    ageRating?: number,
    countries?: ICoutry[],
    fees?: number,
    genres?: IGenre[],
    movieLength?: number,
    premiere?: Date,
    slogan?: string
}

export interface IInfoProps {
    aboutMovie: IInfo
}