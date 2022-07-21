import { createSlice, createAsyncThunk } from '@reduxjs/toolkit'
import axios from 'axios'
import { foodBlockT } from '../../components/types'

export interface foodBlockState {
	items: foodBlockT[]
	status: string
}

export const fetchFoodBlocks = createAsyncThunk(
	'foodBlock/fetchByIdStatus',
	async () => {
		let { data } = await axios.get(
			'https://62cd9fbe066bd2b699295f7d.mockapi.io/items'
		)
		return data
	}
)

const initialState: foodBlockState = {
	items: [],
	status: 'loading',
}

export const foodBlockSlice = createSlice({
	name: 'foodBlock',
	initialState,
	reducers: {
		setItems: (state, action) => {
			state.items = action.payload
		},
	},
	extraReducers: builder => {
		builder.addCase(fetchFoodBlocks.pending, state => {
			state.items = []
			state.status = 'loading'
		})
		builder.addCase(fetchFoodBlocks.fulfilled, (state, action) => {
			state.items = action.payload
			state.status = 'success'
		})
		builder.addCase(fetchFoodBlocks.rejected, state => {
			state.items = []
			state.status = 'error'
		})
	},
})

export default foodBlockSlice.reducer
