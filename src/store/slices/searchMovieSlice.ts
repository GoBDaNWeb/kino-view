import {createSlice} from '@reduxjs/toolkit'

const initialState = {
    searchValue: '',
    searchType: '1-4'
}

const searchMovieSlice = createSlice({
    name: 'loadMore',
    initialState,
    reducers: {
        setSearchValue: (state, action) => {
            state.searchValue = action.payload
        },
        setSearchType: (state, action) => {
            state.searchType = action.payload
        },
    }
})

export const {
    setSearchValue,
    setSearchType
} = searchMovieSlice.actions

export const searchMovieReducer = searchMovieSlice.reducer
