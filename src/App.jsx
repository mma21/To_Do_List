import {useState} from "react";
import "./App.css";
import TodoForm from "./components/TodoForm.jsx";
import TodoItem from "./components/TodoItem.jsx";

function App() {
    const [todos, setTodos] = useState([]);


    const addTask = (userInput) => {
        if (userInput) {
            const newTask = {
                id: Date.now(),
                task: userInput,
                complited: false
            }
            setTodos([...todos, newTask])
        }
    }
    const removeTask = (id) => {
        const deleteTask = todos.filter((item) => item.id !== id)
        setTodos(deleteTask)
    }
    const toggleTask = (id) => {
        setTodos([...todos.map((todo) =>
                todo.id === id ? { ...todo, completed: !todo.completed } : { ...todo }
            ),
        ]);
    }
    return (
        <div className="todo-app">
            <h1>Список задач (Todo List)</h1>
            <TodoForm addTask={addTask}/>
            <hr className="separator"/>
            {todos.map((todo) => (
                <TodoItem
                    todo={todo}
                    key={todo.id}
                    removeTask={removeTask}
                    toggleTask={toggleTask}
                />
            ))}
        </div>
    );
}

export default App;
