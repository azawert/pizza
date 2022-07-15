import { createSlice } from "@reduxjs/toolkit";
import Swal from "sweetalert2";






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
                Swal.fire({
                    title:'Добавьте больше пицц, чтобы удалить',
                    icon:'error',
                    showCancelButton:true,
                    cancelButtonText:'Закрыть',
                    showCloseButton:true,
                })
            }
              
            },
        clearCart(state) {
            if(state.items.length !== 0){
                
                      state.items = []
            } 
            
            
        }
        
    
    }
});

export const selectCart = (state) => state.cart;
export const selectCartItem = (id) => (state) => state.cartSlice.items.find(obj=>obj.id===id)

export const {addItem,removeItem,clearCart,removeSingleItem} = cartSlice.actions;

export default cartSlice.reducer;