import { createSlice, PayloadAction } from '@reduxjs/toolkit'
import { RootState } from '../store'

const initialState: { activeBurger: boolean } = {
	activeBurger: false,
}

export const headerSlice = createSlice({
	name: 'header',
	initialState,
	reducers: {
		setActiveBurger(state, action: PayloadAction<boolean>) {
			state.activeBurger = action.payload
		},
	},
})

export const { setActiveBurger } = headerSlice.actions
export const getActiveBurger = (state: RootState) =>
	state.headerSliceReducer.activeBurger
export default headerSlice.reducer
