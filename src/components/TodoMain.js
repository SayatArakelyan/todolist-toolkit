import React from 'react';
import {useSelector, useDispatch} from "react-redux";
import {completeTodo, deleteTodo} from "../redux/reducers/todo";


function TodoMain() {
    const {todo} = useSelector((state) => state.todo)
    const dispatch = useDispatch()

    const handleDelete = (id) => {
        dispatch(deleteTodo({id}))

    }

    const handleChange = (id) => {
        dispatch(completeTodo({id}))

    }

    return (
        <div className="todo__content">
            {todo.map((item) => (
                <div key={item.id}>
                    {item.completed && <p>Completed</p>}
                    <input type="checkbox" onClick={() => handleChange(item.id)}/>
                    <li>{item.title}</li>
                    <button onClick={() => handleDelete(item.id)}>x</button>
                </div>


            ))}


        </div>
    );
}

export default TodoMain;