import { createSlice, PayloadAction } from "@reduxjs/toolkit";
import { stat } from "fs";

interface customerState{
    value: Customer[];
}

interface Customer{
    id:string;
    name:string;
    food:string[];
}

interface CustomerFoodOrder{
    id:string;
    food:string;
}
const initialState: customerState  ={
    value: []
}
export const customerSlice=createSlice({
    name:"customers",
    initialState,
    reducers:{
        addCustomer:(state,action:PayloadAction<Customer>)=>{
            state.value.push(action.payload)
        },
        addFood:(state,action:PayloadAction<CustomerFoodOrder>)=>{
            state.value.forEach((customer=>{
                if(customer.id===action.payload.id){
                    customer.food.push(action.payload.food);
                }
            }))
        }
 
    }
}) 
export const {addCustomer, addFood} = customerSlice.actions
export default customerSlice.reducer