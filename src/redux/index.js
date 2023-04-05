import {configureStore} from "@reduxjs/toolkit";
import todo from "./reducers/todo";

const store = configureStore({
    reducer:{
todo
    }

})

export default store