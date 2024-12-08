import React, { useState } from "react";

function ToDoList() {
    const [tasks, setTasks] = useState([]);
    const [input, setInput] = useState("");

    const addTask = () => {
        if (input) {
            setTasks([...tasks, { text: input, completed: false }]);
            setInput("");
        }
    };

    const toggleTask = (index) => {
        const newTasks = [...tasks];
        newTasks[index].completed = !newTasks[index].completed;
        setTasks(newTasks);
    };

    return (
        <div>
            <input
                value={input}
                onChange={(e) => setInput(e.target.value)}
                placeholder="Add a task"
            />
            <button onClick={addTask}>Add</button>
            <ul>
                {tasks.map((task, index) => (
                    <li
                        key={index}
                        style={{
                            textDecoration: task.completed ? "line-through" : "none",
                        }}
                        onClick={() => toggleTask(index)}
                    >
                        {task.text}
                    </li>
                ))}
            </ul>
        </div>
    );
}

export default ToDoList;