import {createSlice} from '@reduxjs/toolkit'

const initialState = {
    filmsLimit: 8,
    serialsLimit: 8,
    cartoonsLimit: 8,
    animeLimit: 8
}

const loadMoreSlice = createSlice({
    name: 'loadMore',
    initialState,
    reducers: {
        loadMoreFilms: (state) => {
            state.filmsLimit += 8
        },
        loadMoreSerials: (state) => {
            state.serialsLimit += 8
        },
        loadMoreCartoons: (state) => {
            state.cartoonsLimit += 8
        },
        loadMoreAnime: (state) => {
            state.animeLimit += 8
        },
    }
})

export const {
    loadMoreFilms,
    loadMoreSerials,
    loadMoreCartoons,
    loadMoreAnime
} = loadMoreSlice.actions

export const loadMoreReducer = loadMoreSlice.reducer
