import axios from "axios";
import { createSlice,createAsyncThunk, PayloadAction } from "@reduxjs/toolkit";
import { RootState } from "../store";



export enum Status {
    LOADING = 'loading',
    DONE = 'done',
    FAIL = 'error'
}
console.log(Status);
export const fetchPizzas = createAsyncThunk (
    'pizza/fetchPizzas',
    async ({sortBy,order,search,currentPage,category}:Record<string,string>) => {
        const {data} = await axios.get<Pizza[]>(`https://62a2fcc35bd3609cee5f6470.mockapi.io/items?limit=4&page=${currentPage}&${category}&sortBy=${sortBy}&order=${order?'asc':'desc'}${search}`)
        return data as Pizza[]
    }
)
type Pizza = {
    id: string;
    title: string;
    price: number;
    img: string;
    types: number[];
    sizes: number[];
    rating: number
}
interface PizzaSliceState {
    items: Pizza[];
    status: Status;
}

const initialState:PizzaSliceState = {
    items:[],
    status:Status.LOADING
};



const pizzaSlice = createSlice({
    name: 'pizza',
    initialState,
    reducers:{
        
    },
    extraReducers: (builder) => {
        builder.addCase(fetchPizzas.pending, (state)=>{
            
            state.status = Status.LOADING
        })
        builder.addCase(fetchPizzas.fulfilled, (state,action)=>{
            state.items = action.payload
            state.status = Status.DONE
        })
        builder.addCase(fetchPizzas.rejected, (state,error)=>{
            state.items = []
            state.status = Status.FAIL
            alert(error)
        })
    }
    
    
});

export const selectItems = (state:RootState) => (state.pizzaSlice.items)
export const selectStatus = (state:RootState) => (state.pizzaSlice.status);

export const {setPizzas} : any = pizzaSlice.actions;

export default pizzaSlice.reducer;