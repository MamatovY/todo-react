import { PayloadAction, createSlice } from "@reduxjs/toolkit";
import { Todo } from "types";



const initialState: Todo[] = []

const todoSlice = createSlice({
    name: '@todos',
    initialState,
    reducers: {
        addTodo: (state, action: PayloadAction<string>) => {
            const newTodo: Todo = {
                id: new Date().toString(),
                title: action.payload,
                completed: false
            }
            return [newTodo, ...state]
        },
        changeCompleted: (state, action: PayloadAction<Todo['id']>) => {
            const todo = state.find(el => el.id === action.payload)
            if (todo) {
                todo.completed = !todo.completed
            }
        },
        deleteTodo: (state, action: PayloadAction<Todo['id']>) => {
            return state.filter(item => item.id !== action.payload)
        },
    }
})

export default todoSlice.reducer

export const {
    addTodo,
    changeCompleted,
    deleteTodo
} = todoSlice.actions