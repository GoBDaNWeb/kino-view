interface ICarrer {
    value: string
}

interface IInfo {
    birthday?: Date,
    career?: ICarrer[],
    death?: Date,
    growth?: number,
    sex?: string,
    totalMovies?: number,
    spouses?: any
}

export interface IInfoProps {
    aboutPerson: IInfo
}