import { createSlice, PayloadAction } from "@reduxjs/toolkit";
import { RootState } from "../store";

interface sortObj  {
    name: string;
    sortProperty:'-price' | 'title' | 'price' | 'rating' | '-rating' | '-title'
}
export type FilterSliceState = {
    searchValue: string;
    categoryId: number;
    currentPage: number;
    sort: sortObj;
}

const initialState:FilterSliceState = {
    searchValue:'',
    categoryId: 0,
    currentPage: 1,
    sort:{
        name:'популярности (по убыванию)',
        sortProperty:'-price'
      }
};



const filterSlice = createSlice({
    name: 'filters',
    initialState,
    reducers:{
        setCategoryId(state,action :PayloadAction<number>) {
            state.categoryId = action.payload
        },
        setSearchValue(state,action :PayloadAction<string>) {
            state.searchValue = action.payload
        },
        setSort(state,action:PayloadAction<sortObj>) {
            
            state.sort = action.payload
        },
        setCurrentPage(state,action:PayloadAction<number>) {
            state.currentPage = action.payload
        },
        setFilters(state,action:PayloadAction<FilterSliceState>) {
            state.currentPage = action.payload.currentPage;
            state.sort = action.payload.sort;
            state.categoryId = Number(action.payload.categoryId)
            
        }
    
    }
});

export const selectCategoryId = (state: RootState)=> state.filterSlice.categoryId;
export const selectSortType = (state: RootState)=>state.filterSlice.sort.sortProperty
export const selectCurrentPage = (state: RootState)=> state.filterSlice.currentPage
export const selectSearchValue = (state: RootState)=> state.filterSlice.searchValue

export const {setCategoryId,setSort,setCurrentPage,setFilters,setSearchValue} = filterSlice.actions;

export default filterSlice.reducer;