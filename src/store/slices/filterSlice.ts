import {createSlice} from '@reduxjs/toolkit'

const initialState = {
    filters: {
        sort: '-1',
        genres: '',
        rating: '1-10',
        year: '1960-2022',
        search: ''
    }
}

const filterSlice = createSlice({
    name: 'filter',
    initialState,
    reducers: {
        setSort: (state, action) => {
            state.filters.sort = action.payload
        },
        setGenres: (state, action) => {
            state.filters.genres = action.payload
        },
        setRating: (state, action) => {
            state.filters.rating = action.payload
        },
        setYear: (state, action) => {
            state.filters.year = action.payload
        },
        setSearch: (state, action) => {
            state.filters.search = action.payload
        },
        resetFilters: state => {
            state.filters = initialState.filters
        }
    }
})

export const {
    setSort,
    setGenres,
    setRating,
    setYear,
    setSearch,
} = filterSlice.actions

export const filterReducer = filterSlice.reducer
