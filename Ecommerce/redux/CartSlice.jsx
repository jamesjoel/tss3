import {createSlice,createAsyncThunk} from '@reduxjs/toolkit'
import Api_Url from '../src/constants/Api_Url';
let getCartData=createAsyncThunk("getAll",async()=>{
    let token=localStorage.getItem("access-user");
    axios.get(`${Api_Url}Cart/CartData`,{headers :{Authorization:token}}).then(response=>{
        console.log(response.data);
        return response.data;
    })
})
let CartSlice = createSlice({
    name:"cart",
    initialState:[],
    reducers:{
        addToCart(state,action){
              state.push(action.payload)
        },
        clearCart(state,action){
            return [];
        },
        removeItem(state,action){
         return state.filter(item=>item._id!=action.payload._id)
        }
    }
})
export default CartSlice.reducer;
export let {addToCart,clearCart,removeItem}=CartSlice.actions;
// Particular reducer can manupulate the data of particular slice 