import React, {useState} from 'react';
import {BsSearch} from "react-icons/bs";
import "./style.css"
import { useDispatch} from "react-redux";
import {addTodo} from "../../redux/reducers/todo";
import TodoMain from "../TodoMain";

function TodoHeader() {
    const [value, setValue] = useState('')

    const dispatch = useDispatch()




    const handlerSubmit = (ev) => {
        ev.preventDefault()
        dispatch(addTodo({title: value}));
        setValue('')
    }


    return (
        <>
            <form onSubmit={handlerSubmit}>
                <label className="todo__add">
                    <span className="todo__add__icon"> <BsSearch/> </span>

                    <input type="text" className="add__todo__filed" placeholder="Add todo"
                           value={value} onChange={(e) => setValue(e.target.value)}/>
                </label>

                <button className="add__todo___button">Add</button>
            </form>


            <TodoMain/>
        </>

    );
}

export default TodoHeader;