import { combineReducers } from "@reduxjs/toolkit";
import CourseSlice from "./course.slice";


const reducer = combineReducers({
    courses: CourseSlice.reducer,
})

export default reducer;