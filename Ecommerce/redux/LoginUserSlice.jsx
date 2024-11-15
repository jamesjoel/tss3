import {createSlice} from   '@reduxjs/toolkit';
let LoginUserSlice =createSlice({
    name :  'loginUser',
    initialState :false,
    reducers :{
        IsLoggedIn(state,action){
        if(localStorage.getItem('user-access')){
            return true
                    }           
         else{
            return false
                    }        }
        ,
    LoginInAction(state,action) 
    {
        return true;
    },
    LogoutInAction(state,action){
        return false;

    }
    }

})
export  default LoginUserSlice.reducer;
export let {LoginInAction,LogoutInAction,IsLoggedIn}=LoginUserSlice.actions;