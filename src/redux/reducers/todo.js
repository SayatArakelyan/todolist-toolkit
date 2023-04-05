import {createSlice} from "@reduxjs/toolkit";
import _ from 'lodash';

const initialState = {
    todo: [{
        id: _.uniqueId(),
        title: "learn something",
        completed: false
    }],
    error: "",
    status: "",


}

const todoSlice = createSlice({
    name: "todos",
    initialState,
    reducers: {
        addTodo: (state, action) => {
            state.todo =

                [...state.todo, {
                    id: _.uniqueId(),
                    title: action.payload.title,
                    completed: false
                }]
        },

        deleteTodo:(state,action)=>{
            state.todo= state.todo.filter((todo)=>{
                return todo.id !== action.payload.id

            })

        },
        completeTodo: (state,action)=>{
            state.todo= state.todo.map((item)=>{
                if (item.id===action.payload.id){
                    return {...item, completed: !item.completed}
                }
                return item
            })

        }

    }

})
export const {addTodo,deleteTodo,completeTodo} = todoSlice.actions
export default todoSlice.reducer