import React from "react";
import {useState} from "react";

const TodoForm = ({addTask}) => {
    const [userInput, setUserInput] = useState("");
    const handleChange = (event) => {
        setUserInput(event.target.value);
    }
    const handleSubmit = (event) => {
        event.preventDefault()
        addTask(userInput)
        setUserInput('')
    }
    return (
        <form className='todo-form' onSubmit={handleSubmit}>
            <input
                className='todo-input'
                type='text'
                placeholder='Добавить новую задачу...'
                onChange={handleChange}
                value={userInput}/>
            <button className='todo-button'>Добавить</button>
        </form>
    )
}

export default TodoForm