import {createSlice} from '@reduxjs/toolkit'

const initialState = {
    burgerIsActive: false
}

const burgerSlice = createSlice({
    name: 'burger',
    initialState,
    reducers: {
        hadleOpenBurger: (state) => {
            state.burgerIsActive = !state.burgerIsActive 
        },
    }
})

export const {
    hadleOpenBurger
} = burgerSlice.actions

export const burgerReducer = burgerSlice.reducer
