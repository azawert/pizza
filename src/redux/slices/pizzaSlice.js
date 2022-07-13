import axios from "axios";
import { createSlice,createAsyncThunk } from "@reduxjs/toolkit";

export const fetchPizzas = createAsyncThunk (
    'pizza/fetchPizzas',
    async ({sortBy,order,search,currentPage,category}) => {
        const {data} = await axios.get(`https://62a2fcc35bd3609cee5f6470.mockapi.io/items?limit=4&page=${currentPage}&${category}&sortBy=${sortBy}&order=${order?'asc':'desc'}${search}`)
        return data
    }
)

const initialState= {
    items:[],
    status:'loading'
};



const pizzaSlice = createSlice({
    name: 'pizza',
    initialState,
    reducers:{
        
    },
    extraReducers: {
        [fetchPizzas.pending]: (state)=> {
            state.items = []
            state.status = 'loading'
        },
        [fetchPizzas.fulfilled]: (state,action) => {
            state.items = action.payload
            state.status = 'done'
        },
        [fetchPizzas.rejected]: (state,error)=>{
            state.items = []
            state.status = 'failed'
        }
    }
    
    
});

export const selectItems = (state) => (state.pizzaSlice.items)
export const selectStatus = (state) => (state.pizzaSlice.status);

export const {setPizzas} = pizzaSlice.actions;

export default pizzaSlice.reducer;