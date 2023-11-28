import { createSlice } from "@reduxjs/toolkit";
import uuid from "react-uuid";


const TodoSclice = createSlice({
    name: 'todo',
    initialState: {
        tasks: [
            {
                id: uuid(),
                task: "Reviser Javascript",
                completed: false
            },
            {
                id: uuid(),
                task: "Reviser Javas",
                completed: true
            },
            {
                id: uuid(),
                task: "Reviser Python",
                completed: false
            }
        ]

    },
    reducers: {
        addTask: (state, action)=>{
            state.tasks = [...state.tasks, {id:uuid(), task:action.payload, completed:false}]
        },
        deleteTask: (state, action) => {
            state.tasks = state.tasks.filter(t => t.id != action.payload)
        },
        ModifTask: (state, action) => {
            state.tasks = state.tasks.map(t => t.id == action.payload ? {...t, completed:!t.completed} : t)
        },
        deleteAll:(state, action) => {
            state.tasks = []
        },
        deleteTerm:(state, action) => {
            state.tasks = state.tasks.filter(t => !t.completed)
        },
        deleteNoTerm:(state, action) => {
            state.tasks = state.tasks.filter(t => t.completed)
        },


    }
})

export const {addTask, deleteTask, ModifTask, deleteAll, deleteTerm, deleteNoTerm } = TodoSclice.actions
export default TodoSclice.reducer