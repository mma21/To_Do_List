import React from "react";
import {RiCloseCircleLine} from "react-icons/ri";

const TodoItem = ({todo, removeTask, toggleTask}) => {
    return (
        <div className={(todo.completed ? 'todo-row complete' : 'todo-row')}>
            <div onClick={() => toggleTask(todo.id)} className='todo-row-main' >
                {todo.task}
            </div>
            <div className='iconsContainer'>
                <RiCloseCircleLine onClick={() => removeTask(todo.id)}/>
            </div>

        </div>
    )
}

export default TodoItem