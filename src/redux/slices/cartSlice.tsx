import { createSlice, PayloadAction } from '@reduxjs/toolkit'
import { foodBlockT } from '../../components/types'
import { getCartFromLs } from '../../utils/getCartFromLs'

interface cartSliceState {
	items: foodBlockT[]
	totalPrice: number
}

const initialState: cartSliceState = {
	items: getCartFromLs(),
	totalPrice: 0,
}
export const cartSlice = createSlice({
	name: 'cart',
	initialState,
	reducers: {
		addItem(state, action: PayloadAction<foodBlockT>) {
			const findItem = state.items.find(
				(elem: foodBlockT) => elem.id === action.payload.id
			)
			if (findItem) {
				findItem.count++
			} else {
				state.items.push({
					...action.payload,
					count: 1,
				})
			}
		},
		reduceItem(state, action: PayloadAction<string>) {
			state.items.map((item: foodBlockT) => {
				if (item.id === action.payload) {
					item.count--
				}
			})
		},
		deleteItem(state, action: PayloadAction<string>) {
			state.items = state.items.filter(
				(item: foodBlockT) => item.id !== action.payload
			)
		},
		editPrice(state, action: PayloadAction<number>) {
			state.totalPrice = action.payload
		},
	},
})

export const { addItem, reduceItem, deleteItem, editPrice } = cartSlice.actions
export default cartSlice.reducer
