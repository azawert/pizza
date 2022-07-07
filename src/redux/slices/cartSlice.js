import { createSlice } from "@reduxjs/toolkit";

const initialState= {
    items: [],
    totalPrice: 0,
};



const cartSlice = createSlice({
    name: 'cart',
    initialState,
    reducers:{
        addItem(state,action){
            const findItem = state.items.find(obj=>obj.id===action.payload.id)

            if(findItem) {
                findItem.count++
                
            } else {
                state.items.push({
                    ...action.payload,
                    count:1
                });
                
            }
            state.totalPrice = state.items.reduce((sum,obj)=>(obj.price*obj.count)+sum,0)
        },
        removeItem(state,action) {
            state.items = state.items.filter((item)=>item.id!==action.payload)
        },
        removeSingleItem(state,action){
            if(state.items.reduce((sum,item)=>item.count+sum,0)!==1){
                const findItem = state.items.find(obj=>obj.id===action.payload.id)
                if(findItem) {
                    findItem.count--
            }
            state.totalPrice = state.items.reduce((sum,obj)=>(obj.price*obj.count)-sum,state.totalPrice) 
            } else {
                alert('Нельзя сделать меньше одной пиццы :)')
            }
              
            },
        clearCart(state) {
            if(state.items.length !== 0){
                if(window.confirm('Удалить все пиццы из корзины?')){
                    state.items = []
                }
                
            } else {
                alert('прежде чем очистить корзину, нужно что-то в нее добавить')
            }
            
            
        }
        
    
    }
});

export const {addItem,removeItem,clearCart,removeSingleItem} = cartSlice.actions;

export default cartSlice.reducer;