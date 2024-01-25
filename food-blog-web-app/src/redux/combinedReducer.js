
import MealSlice from "./meal.slice";
import { combineReducers } from "@reduxjs/toolkit";


const reducer = combineReducers({
    meals: MealSlice.reducer,
    mealInfo: MealSlice.reducer,
    
});

export default reducer;