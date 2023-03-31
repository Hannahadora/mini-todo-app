import { createSlice } from "@reduxjs/toolkit";
import { todos } from "../utils/data";

const todoSlice = createSlice({
    name: "todos",
    initialState: todos,
    reducers: {
        addTodo: (state, action) => {
            const newTodo = {
                id: Date.now(),
                title: action.payload.title,
                completed: false,
            };
            state.push(newTodo);
        },
        toggleComplete: (state, action) => {
            const index = state.findIndex(
                (todo) => todo.id === action.payload.id
            );
            state[index].completed = action.payload.completed
        },
        deleteTodo: (state, action) => {
            return state.filter((todo) => todo.id !== action.payload.id)
        },
        deleteCompleted: (state, action) => {
            return state.filter((todo) => todo.completed !== action.payload.completed)
        },
        editTodo: (state, action) => {
            const index = state.findIndex((todo) => todo.id === action.payload.id);
            state[index].title = action.payload.title;
        },
    },
});
export const { addTodo, toggleComplete, deleteTodo, deleteCompleted, editTodo } = todoSlice.actions;

export default todoSlice.reducer;