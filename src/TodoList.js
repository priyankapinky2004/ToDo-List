import React, { useEffect, useState } from "react";
import { getTodos, addTodo, updateTodo, deleteTodo } from "./api";

const TodoList = () => {
    const [todos, setTodos] = useState([]);
    const [task, setTask] = useState("");

    useEffect(() => {
        fetchTodos();
    }, []);

    const fetchTodos = async () => {
        const data = await getTodos();
        setTodos(data);
    };

    const handleAdd = async () => {
        if (task.trim() === "") return;
        await addTodo(task);
        setTask("");
        fetchTodos();
    };

    const handleToggle = async (id, completed) => {
        await updateTodo(id, !completed);
        fetchTodos();
    };

    const handleDelete = async (id) => {
        await deleteTodo(id);
        fetchTodos();
    };

    return (
        <div className="container">
            <h2>Serverless To-Do List</h2>
            <div className="input-container">
                <input
                    type="text"
                    value={task}
                    onChange={(e) => setTask(e.target.value)}
                    placeholder="Add a task..."
                />
                <button onClick={handleAdd}>Add</button>
            </div>
            <ul>
                {todos.map((todo) => (
                    <li key={todo.id}>
                        <span
                            style={{ textDecoration: todo.completed ? "line-through" : "none", cursor: "pointer" }}
                            onClick={() => handleToggle(todo.id, todo.completed)}
                        >
                            {todo.task}
                        </span>
                        <button onClick={() => handleDelete(todo.id)}>❌</button>
                    </li>
                ))}
            </ul>
        </div>
    );
};

export default TodoList;