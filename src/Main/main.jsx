import React, { useState, useEffect, useContext } from "react";
import { AppContext } from "../context/AppContext";

const Main = () => {
  const { darkMode, activeCategory } = useContext(AppContext);

  const [tasks, setTasks] = useState(() => {
    const savedTasks = localStorage.getItem("tasks");
    return savedTasks ? JSON.parse(savedTasks) : [];
  });

  const [newTask, setNewTask] = useState("");
  const [priority, setPriority] = useState("medium");
  const [category, setCategory] = useState("all");
  const [dueDate, setDueDate] = useState("");
  const [searchTerm, setSearchTerm] = useState("");
  const [sortBy, setSortBy] = useState("date"); // date, priority, alphabetical

  useEffect(() => {
    localStorage.setItem("tasks", JSON.stringify(tasks));
  }, [tasks]);

  const handleSubmit = (e) => {
    e.preventDefault();
    if (!newTask.trim()) return;

    const task = {
      id: Date.now(),
      text: newTask,
      completed: false,
      priority,
      category,
      dueDate,
      createdAt: new Date().toISOString(),
    };

    setTasks([...tasks, task]);
    setNewTask("");
    setPriority("medium");
    setDueDate("");
  };

  const handleDelete = (id) => {
    setTasks(tasks.filter((task) => task.id !== id));
  };

  const handleToggleComplete = (id) => {
    setTasks(
      tasks.map((task) =>
        task.id === id ? { ...task, completed: !task.completed } : task
      )
    );
  };

  const handleEdit = (id, newText) => {
    setTasks(
      tasks.map((task) => (task.id === id ? { ...task, text: newText } : task))
    );
  };

  const filteredAndSortedTasks = tasks
    .filter((task) =>
      activeCategory === "all" ? true : task.category === activeCategory
    )
    .filter((task) =>
      task.text.toLowerCase().includes(searchTerm.toLowerCase())
    )
    .sort((a, b) => {
      switch (sortBy) {
        case "priority":
          const priorityOrder = { high: 1, medium: 2, low: 3 };
          return priorityOrder[a.priority] - priorityOrder[b.priority];
        case "alphabetical":
          return a.text.localeCompare(b.text);
        default:
          return new Date(b.createdAt) - new Date(a.createdAt);
      }
    });

  return (
    <main
      className={`col-10 offset-2 mt-5 pt-4 main-content ${
        darkMode ? "bg-dark text-light" : ""
      }`}>
      <div className="p-4">
        <div
          className={`card shadow-sm mb-4 ${
            darkMode ? "bg-dark text-light border-secondary" : ""
          }`}>
          <div className="card-body">
            <form onSubmit={handleSubmit}>
              <div className="row g-3">
                <div className="col-12 col-md-6">
                  <input
                    type="text"
                    className="form-control"
                    placeholder="Add new task..."
                    value={newTask}
                    onChange={(e) => setNewTask(e.target.value)}
                  />
                </div>
                <div className="col-6 col-md-2">
                  <select
                    className={`form-select ${
                      darkMode ? "bg-secondary text-light" : ""
                    }`}
                    value={priority}
                    onChange={(e) => setPriority(e.target.value)}>
                    <option value="low">Low Priority</option>
                    <option value="medium">Medium Priority</option>
                    <option value="high">High Priority</option>
                  </select>
                </div>
                <div className="col-6 col-md-2">
                  <select
                    className={`form-select ${
                      darkMode ? "bg-secondary text-light" : ""
                    }`}
                    value={category}
                    onChange={(e) => setCategory(e.target.value)}>
                    <option value="all">All</option>
                    <option value="social">Social</option>
                    <option value="shopping">Shopping</option>
                    <option value="savings">Savings</option>
                    <option value="workouts">Workouts</option>
                  </select>
                </div>
                <div className="col-6 col-md-2">
                  <input
                    type="date"
                    className={`form-control ${
                      darkMode ? "bg-secondary text-light" : ""
                    }`}
                    value={dueDate}
                    onChange={(e) => setDueDate(e.target.value)}
                  />
                </div>
                <div className="col-6 col-md-2">
                  <button type="submit" className="btn btn-primary w-100">
                    Add Task
                  </button>
                </div>
              </div>
            </form>
          </div>
        </div>

        {/* Search and Sort Controls */}
        <div
          className={`card shadow-sm mb-4 ${
            darkMode ? "bg-dark text-light border-secondary" : ""
          }`}>
          <div className="card-body">
            <div className="row g-3">
              <div className="col-12 col-md-8">
                <input
                  type="text"
                  className={`form-control ${
                    darkMode ? "bg-secondary text-light" : ""
                  }`}
                  placeholder="Search tasks..."
                  value={searchTerm}
                  onChange={(e) => setSearchTerm(e.target.value)}
                />
              </div>
              <div className="col-12 col-md-4">
                <select
                  className={`form-select ${
                    darkMode ? "bg-secondary text-light" : ""
                  }`}
                  value={sortBy}
                  onChange={(e) => setSortBy(e.target.value)}>
                  <option value="date">Sort by Date</option>
                  <option value="priority">Sort by Priority</option>
                  <option value="alphabetical">Sort Alphabetically</option>
                </select>
              </div>
            </div>
          </div>
        </div>

        {/* Tasks List */}
        <div className="task-list-container">
          <div className="task-list mt-4">
            {filteredAndSortedTasks.map((task) => (
              <div
                key={task.id}
                className={`card mb-3 ${
                  darkMode ? "bg-dark text-light border-secondary" : ""
                } 
                           ${task.completed ? "opacity-75" : ""}`}>
                <div className="card-body">
                  <div className="row align-items-center">
                    <div className="col-auto">
                      <input
                        type="checkbox"
                        className="form-check-input"
                        checked={task.completed}
                        onChange={() => handleToggleComplete(task.id)}
                      />
                    </div>
                    <div className="col">
                      <div
                        className={
                          task.completed ? "text-decoration-line-through" : ""
                        }
                        contentEditable
                        onBlur={(e) =>
                          handleEdit(task.id, e.target.textContent)
                        }
                        suppressContentEditableWarning={true}>
                        {task.text}
                      </div>
                      <div className="small text-muted mt-1">
                        Due: {task.dueDate || "No due date"}
                      </div>
                    </div>
                    <div className="col-auto d-flex gap-2 align-items-center">
                      <span
                        className={`badge bg-${
                          task.priority === "high"
                            ? "danger"
                            : task.priority === "medium"
                            ? "warning"
                            : "success"
                        }`}>
                        {task.priority}
                      </span>
                      <span className="badge bg-info">{task.category}</span>
                      <button
                        className="btn btn-sm btn-outline-danger"
                        onClick={() => handleDelete(task.id)}>
                        <i className="bi bi-trash"></i>
                      </button>
                    </div>
                  </div>
                </div>
              </div>
            ))}

            {filteredAndSortedTasks.length === 0 && (
              <div
                className={`empty-state card ${
                  darkMode ? "bg-dark border-secondary" : ""
                }`}>
                <div className="card-body text-center">
                  <i className="bi bi-clipboard-check display-1 mb-3"></i>
                  <h3 className={darkMode ? "text-light" : "text-dark"}>
                    No Tasks Found
                  </h3>
                  <p className="text-muted">
                    {searchTerm
                      ? "No tasks match your search criteria"
                      : "Add a new task to get started!"}
                  </p>
                  <button
                    className="btn btn-primary mt-3"
                    onClick={() =>
                      document.querySelector('input[type="text"]').focus()
                    }>
                    <i className="bi bi-plus-circle me-2"></i>
                    Add New Task
                  </button>
                </div>
              </div>
            )}
          </div>
        </div>
      </div>
    </main>
  );
};

export default Main;
