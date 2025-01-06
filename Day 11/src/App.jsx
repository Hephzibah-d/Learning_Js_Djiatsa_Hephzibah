import React, { useState } from "react";

function App() {
  const [tasks, setTasks] = useState([]);
  const [newTask, setNewTask] = useState("");
  const [editTaskId, setEditTaskId] = useState(null);
  const [editTaskText, setEditTaskText] = useState("");

  // Add a new task
  const addTask = () => {
    if (newTask.trim() === "") return;
    setTasks([...tasks, { id: Date.now(), text: newTask }]);
    setNewTask("");
  };

  // Delete a task
  const deleteTask = (id) => {
    setTasks(tasks.filter((task) => task.id !== id));
  };

  // Edit a task
  const editTask = (id, text) => {
    setEditTaskId(id);
    setEditTaskText(text);
  };

  // Update the edited task
  const updateTask = () => {
    setTasks(
      tasks.map((task) =>
        task.id === editTaskId ? { ...task, text: editTaskText } : task
      )
    );
    setEditTaskId(null);
    setEditTaskText("");
  };

  // Cancel editing
  const cancelEdit = () => {
    setEditTaskId(null);
    setEditTaskText("");
  };

  return (
    <div style={styles.container}>
      <h1 style={styles.header}>To-Do List</h1>

      {/* Input for adding new tasks */}
      <div style={styles.inputContainer}>
        <input
          type="text"
          placeholder="Add a new task"
          value={newTask}
          onChange={(e) => setNewTask(e.target.value)}
          style={styles.input}
        />
        <button onClick={addTask} style={styles.addButton}>
          Add Task
        </button>
      </div>

      {/* Task List */}
      <ul style={styles.taskList}>
        {tasks.map((task) => (
          <li key={task.id} style={styles.taskItem}>
            {/* Task Text */}
            {editTaskId === task.id ? (
              <>
                <input
                  type="text"
                  value={editTaskText}
                  onChange={(e) => setEditTaskText(e.target.value)}
                  style={styles.editInput}
                />
                <button onClick={updateTask} style={styles.saveButton}>
                  Save
                </button>
                <button onClick={cancelEdit} style={styles.cancelButton}>
                  Cancel
                </button>
              </>
            ) : (
              <>
                <span style={styles.taskText}>{task.text}</span>
                <button
                  onClick={() => editTask(task.id, task.text)}
                  style={styles.editButton}
                >
                  Edit
                </button>
                <button
                  onClick={() => deleteTask(task.id)}
                  style={styles.deleteButton}
                >
                  Delete
                </button>
              </>
            )}
          </li>
        ))}
      </ul>
    </div>
  );
}

const styles = {
  container: {
    display: "flex",
    flexDirection: "column",
    alignItems: "center",
    justifyContent: "center",
    padding: "30px",
    fontFamily: "'Arial', sans-serif",
    backgroundColor: "#f4f7fa",
    borderRadius: "8px",
    width: "80%",
    maxWidth: "500px",
    boxShadow: "0px 4px 15px rgba(0, 0, 0, 0.1)",
  },
  header: {
    fontSize: "2rem",
    color: "#333",
    marginBottom: "20px",
  },
  inputContainer: {
    display: "flex",
    justifyContent: "space-between",
    width: "100%",
    marginBottom: "20px",
  },
  input: {
    padding: "10px",
    width: "70%",
    borderRadius: "8px",
    border: "1px solid #ccc",
    fontSize: "1rem",
    transition: "border-color 0.3s ease",
  },
  addButton: {
    padding: "10px 20px",
    backgroundColor: "#4CAF50",
    color: "#fff",
    border: "none",
    borderRadius: "8px",
    cursor: "pointer",
    transition: "background-color 0.3s ease",
  },
  taskList: {
    listStyleType: "none",
    padding: 0,
    margin: 0,
    width: "100%",
  },
  taskItem: {
    display: "flex",
    justifyContent: "space-between",
    alignItems: "center",
    padding: "15px",
    marginBottom: "10px",
    borderRadius: "8px",
    backgroundColor: "#fff",
    boxShadow: "0px 2px 8px rgba(0, 0, 0, 0.1)",
    transition: "transform 0.2s ease-in-out",
  },
  taskText: {
    flex: 1,
    fontSize: "1.1rem",
    color: "#555",
  },
  editButton: {
    padding: "6px 12px",
    backgroundColor: "#FFB400",
    color: "#fff",
    border: "none",
    borderRadius: "5px",
    cursor: "pointer",
    transition: "background-color 0.3s ease",
  },
  deleteButton: {
    padding: "6px 12px",
    backgroundColor: "#f44336",
    color: "#fff",
    border: "none",
    borderRadius: "5px",
    cursor: "pointer",
    marginLeft: "5px",
    transition: "background-color 0.3s ease",
  },
  editInput: {
    padding: "10px",
    marginRight: "10px",
    width: "70%",
    borderRadius: "8px",
    border: "1px solid #ccc",
    fontSize: "1rem",
  },
  saveButton: {
    padding: "10px 20px",
    backgroundColor: "#4CAF50",
    color: "#fff",
    border: "none",
    borderRadius: "8px",
    cursor: "pointer",
    transition: "background-color 0.3s ease",
  },
  cancelButton: {
    padding: "10px 20px",
    backgroundColor: "#ccc",
    color: "#fff",
    border: "none",
    borderRadius: "8px",
    cursor: "pointer",
    marginLeft: "5px",
    transition: "background-color 0.3s ease",
  },
};

// Hover and button effects
const addButtonHover = {
  ...styles.addButton,
  backgroundColor: "#45a049",
};

const editButtonHover = {
  ...styles.editButton,
  backgroundColor: "#FF9B00",
};

const deleteButtonHover = {
  ...styles.deleteButton,
  backgroundColor: "#e57373",
};

const saveButtonHover = {
  ...styles.saveButton,
  backgroundColor: "#45a049",
};

const cancelButtonHover = {
  ...styles.cancelButton,
  backgroundColor: "#b0b0b0",
};

export default App;
