
import { createSlice } from "@reduxjs/toolkit";

const cartSlice=createSlice({

    name:'mycart',

    initialState:{
        cart:[]
    },
    
    reducers:{
      
        addToCart:(state,actions)=>{
            const data=state.cart.filter(e=>e.id==actions.payload.id)

           
            state.cart.push(actions.payload)
           
        },
        dataIncrease:(state,actions)=>{
            const item=state.cart.find(e=>e.id==actions.payload.id)

            if(item){
                item.qnty++;
            }
        },
        dataDecrease:(state,actions)=>{
            const item=state.cart.find(e=>e.id==actions.payload.id)

            if(!item){
                return
            }

            if(item.qnty>1){
                item.qnty--
            }else{
                state.cart=state.cart.filter(e=>e.id!==actions.payload.id)
            }
        },
        
        prodcutEmpty:(state,actions)=>{
             state.cart=state.cart.filter(e=>e.id!==actions.payload.id)
        },
        cartEmpty:(state)=>{
            state.cart=[]
        },
        itemRemove:(state, actions)=>{
            state.cart= state.cart.filter(e=>e.id!=actions.payload.id);
         }
    }
})

export const{addToCart,dataIncrease,dataDecrease,prodcutEmpty,cartEmpty,itemRemove}=cartSlice.actions

export default cartSlice.reducer