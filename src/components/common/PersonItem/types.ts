interface IMoviePerson {
    id: number;
    name: string;
    enName: string;
    description: string;
    enProfession:
        | 'director'
        | 'actor'
        | 'design'
        | 'producer'
        | 'composer'
        | 'editor';
    photo: string;
}

export interface IPersonItemProps {
    person: IMoviePerson;
}
