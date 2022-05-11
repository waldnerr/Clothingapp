import { createSlice } from "@reduxjs/toolkit";

const initialState ={
    hat:null,
    shirt:null,
    pants:null,
    shoes:null,
}

export const clothes =createSlice({
    name:'clo',
    initialState,
    reducers:{
        setHat:(state, action) =>{
            state.hat = action.payload;
        },
        setShirt:(state, action) =>{
            state.shirt = action.payload;
        },
        setPants:(state, action) =>{
            state.pants = action.payload;
        },
        setShoes:(state, action) =>{
            state.shoes = action.payload;
        }
    }
});

export const {setHat,setShirt,setPants,setShoes}=clothes.actions;

//selectors
export const selectHat =(state) => state.col.hat;
export const selectShirt =(state) => state.col.shirt;
export const selectPants =(state) => state.col.pants;
export const selectShoes =(state) => state.col.shoes;


export default clothes.reducer;