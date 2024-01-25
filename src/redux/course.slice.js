import { createSlice } from "@reduxjs/toolkit";



const CourseSlice = createSlice({
    name: "CourseSlice",
    initialState:{
        courseList:[]
    },
    reducers: {
        saveCourseList: (state, action) => {
        //   console.log(action.payload);
        state.courseList = action.payload;
        }
    }
})

export default CourseSlice;
export const { saveCourseList} = CourseSlice.actions;