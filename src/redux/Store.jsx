import { combineReducers, configureStore } from "@reduxjs/toolkit";
import TodoSlice from "./TodoSlice";


const reducer = combineReducers({
    todo: TodoSlice
})

const store = configureStore({reducer})

export default store