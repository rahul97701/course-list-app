import { createSlice } from "@reduxjs/toolkit"

const MealSlice = createSlice({
    name: "MealSlice",
    initialState: {
        MealList: [],
        Meal:[],
       
        error: {
            isError: false,
            message: "",
        },
    },
    reducers: {
        saveMealList: (state, action) => {
            
            state.MealList = action.payload;
        },
     
        getMealList: (state, action) =>{

        },
        saveMealInfo: (state, action) => {
            
            state.Meal = action.payload;
        },
     
        getMealInfo: (state, action) =>{

        },
        setError: (state, action) => {
            state.error = {
                isError: true,
                message: action.payload,
            };
        },    
        resetError: (state) => {
            state.error = {
                isError: false,
                message: "",
            };
        },
},
});

export default MealSlice;
export const {  
    setError, 
    resetError, 
    getMealList,
    saveMealList, 
    getMealInfo,
    saveMealInfo,
   } = MealSlice.actions;