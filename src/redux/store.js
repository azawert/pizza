import { configureStore } from '@reduxjs/toolkit'
import cartSlice from './slices/cartSlice'
import filterSlice from './slices/filterSlice'

export const store = configureStore({
  reducer: {
    filterSlice,
    cartSlice
  },
})