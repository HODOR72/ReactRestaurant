import { RootState } from '../store'

export const selectCartById = (id: string) => (state: RootState) => state.cartSliceReducer.items.find(obj => obj.id === id)
export const getItems = (state: RootState) => state.cartSliceReducer.items
export const getFoodBlocks = (state: RootState) => state.foodBlockReducer
export const getActiveBurger = (state: RootState) => state.headerSliceReducer.activeBurger