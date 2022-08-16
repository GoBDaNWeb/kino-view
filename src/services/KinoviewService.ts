import {createApi, fetchBaseQuery} from '@reduxjs/toolkit/query/react';
import { AnyMxRecord } from 'dns';
import {IMovie, IMovies, IReviews, IPerson} from './types'

export const kinoviewAPI = createApi({
    reducerPath: 'kinoviewAPI',
    baseQuery: fetchBaseQuery({baseUrl: 'https://api.kinopoisk.dev/'}),
    endpoints: (build) => ({
        getNewFilms: build.query<IMovies, number>({
            query: limit => `movie?field=rating.kp&field=year&field=typeNumber&search=1-10&search=2022&search=1&limit=${limit}&sortField=year&sortField=votes.imdb&sortType=1&sortType=-1&token=BGGATXC-SC6M1QJ-QH36R71-HFMCSMW`
        }),
        getNewSerials: build.query<IMovies, number>({
            query: limit => `movie?field=rating.kp&field=year&field=typeNumber&search=1-10&search=2022&search=2&limit=${limit}&sortField=year&sortField=votes.imdb&sortType=1&sortType=-1&token=BGGATXC-SC6M1QJ-QH36R71-HFMCSMW`
        }),
        getNewCartoons: build.query<IMovies, number>({
            query: limit => `movie?field=rating.kp&field=year&field=typeNumber&search=1-10&search=2022&search=3&limit=${limit}&sortField=year&sortField=votes.imdb&sortType=1&sortType=-1&token=BGGATXC-SC6M1QJ-QH36R71-HFMCSMW`
        }),
        getNewAnime: build.query<IMovies, number>({
            query: limit => `movie?field=rating.kp&field=year&field=typeNumber&search=1-10&search=2022&search=4&limit=${limit}&sortField=year&sortField=votes.imdb&sortType=1&sortType=-1&token=BGGATXC-SC6M1QJ-QH36R71-HFMCSMW`
        }),
        getMovieById: build.query<IMovie, string | string[] | undefined>({
            query: id => `movie?search=${id}&field=id&token=BGGATXC-SC6M1QJ-QH36R71-HFMCSMW`
        }),
        // add genres filter -> /movie?${genres}
        getFilms: build.query<IMovies, any>({
            query: filters => `movie?${filters.genres}search[]=${filters.year}&field[]=year&search[]=${filters.rating}&field=rating.kp&search=${filters.search}&field=name&isStrict=false&search=1&field=typeNumber&search=!null&field=votes.kp&sortField=year&sortType=-1&limit=10&token=BGGATXC-SC6M1QJ-QH36R71-HFMCSMW`
        }),
        //
        getSerials: build.query<IMovies, any>({
            query: filters => `movie?${filters.genres}search[]=${filters.year}&field[]=year&search[]=${filters.rating}&field=rating.kp&search=${filters.search}&field=name&isStrict=false&search=2&field=typeNumber&search=!null&field=votes.kp&sortField=year&sortType=-1&limit=10&token=BGGATXC-SC6M1QJ-QH36R71-HFMCSMW`
        }),
        //
        getCartoons: build.query<IMovies, any>({
            query: filters => `movie?${filters.genres}search[]=${filters.year}&field[]=year&search[]=${filters.rating}&field=rating.kp&search=${filters.search}&field=name&isStrict=false&search=3&field=typeNumber&search=!null&field=votes.kp&sortField=year&sortType=-1&limit=10&token=BGGATXC-SC6M1QJ-QH36R71-HFMCSMW`
        }),
        //
        getAnime: build.query<IMovies, any>({
            query: filters => `movie?${filters.genres}search[]=${filters.year}&field[]=year&search[]=${filters.rating}&field=rating.kp&search=${filters.search}&field=name&isStrict=false&search=4&field=typeNumber&search=!null&field=votes.kp&sortField=year&sortType=-1&limit=10&token=BGGATXC-SC6M1QJ-QH36R71-HFMCSMW`
        }),
        //
        getMoviesBySearch: build.query<IMovies, any>({
            query: ({query, type}) => `movie?search=${query}&field=name&limit=10&sortField=year&sortType=-1&field=typeNumber&search=${type}&isStrict=false&token=BGGATXC-SC6M1QJ-QH36R71-HFMCSMW`
        }),
        getReviews: build.query<IReviews, any>({
            query: ({id, limit}) => `review?search=${id}&field=movieId&limit=${limit}&token=BGGATXC-SC6M1QJ-QH36R71-HFMCSMW`
        }),
        getPersonById: build.query<IPerson, string | string[] | undefined>({
            query: id => `person?search=${id}&field=id&token=BGGATXC-SC6M1QJ-QH36R71-HFMCSMW`
        }),
        getMoviesById: build.query<IMovies, any>({
            query: ({query, limit}) =>
              `movie?${query}&limit=${limit}&token=BGGATXC-SC6M1QJ-QH36R71-HFMCSMW`
        }),
        // search[]=${genre}&field[]=genres.name&
        getMoviesByFilters: build.query<IMovies, any>({
            query: ({filters}) =>
              `movie?${filters.genre}search[]=${filters.years}&field[]=year&search[]=${filters.rating}&field=rating.kp&search=${filters.serach}&field=name&isStrict=false&search=1&field=typeNumber&search=!null&field=votes.kp&sortField=year&sortType=1&limit=10&token=BGGATXC-SC6M1QJ-QH36R71-HFMCSMW`
        }),
    })
});

export const {
    useGetNewFilmsQuery,
    useGetNewSerialsQuery,
    useGetNewCartoonsQuery,
    useGetNewAnimeQuery,
    useGetMovieByIdQuery,
    useGetFilmsQuery,
    useGetSerialsQuery,
    useGetCartoonsQuery,
    useGetAnimeQuery,
    useGetReviewsQuery,
    useGetPersonByIdQuery,
    useGetMoviesByIdQuery,
    useGetMoviesBySearchQuery,
    useGetMoviesByFiltersQuery,
} = kinoviewAPI;

export const {
    getNewFilms,
    getNewSerials,
    getNewCartoons,
    getNewAnime,
    getMovieById,
    getFilms,
    getSerials,
    getCartoons,
    getAnime,
    getReviews,
    getPersonById,
    getMoviesById,
    getMoviesBySearch,
    getMoviesByFilters
  } = kinoviewAPI.endpoints;