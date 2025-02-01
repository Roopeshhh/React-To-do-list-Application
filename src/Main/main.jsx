import React, { useState } from "react";

const Main = () => {
  // State for tasks and form inputs
  const [tasks, setTasks] = useState([]);
  const [newTask, setNewTask] = useState("");
  const [priority, setPriority] = useState("");
  const [category, setCategory] = useState("");

  // Handle form submission
  const handleSubmit = (e) => {
    e.preventDefault();
    if (!newTask.trim()) return; // Don't add empty tasks

    // Create new task object
    const task = {
      id: Date.now(), // Simple way to generate unique id
      text: newTask,
      priority: priority || "medium", // Default to medium if not selected
      category: category || "general", // Default to general if not selected
      completed: false,
    };

    // Add new task to tasks array
    setTasks([...tasks, task]);

    // Reset form
    setNewTask("");
    setPriority("");
    setCategory("");
  };

  // Handle task deletion
  const handleDelete = (taskId) => {
    setTasks(tasks.filter((task) => task.id !== taskId));
  };

  // Handle task completion toggle
  const handleToggleComplete = (taskId) => {
    setTasks(
      tasks.map((task) =>
        task.id === taskId ? { ...task, completed: !task.completed } : task
      )
    );
  };

  return (
    // Main container - offset-2 pushes content right to account for sidebar
    <main className="col-10 offset-2 mt-5 pt-4">
      <div className="p-4">
        {/* Title Section */}
        <h2 className="mb-4">Tasks</h2>

        {/* Task Input Form Card */}
        <div className="card shadow-sm mb-4">
          <div className="card-body">
            <form onSubmit={handleSubmit} className="row g-3">
              {/* Task Input Field */}
              <div className="col-12 col-md-6">
                <input
                  type="text"
                  className="form-control"
                  placeholder="Add new task..."
                  value={newTask}
                  onChange={(e) => setNewTask(e.target.value)}
                />
              </div>

              {/* Priority Dropdown */}
              <div className="col-6 col-md-3">
                <select
                  className="form-select"
                  value={priority}
                  onChange={(e) => setPriority(e.target.value)}>
                  <option value="" disabled>
                    Priority
                  </option>
                  <option value="high">High</option>
                  <option value="medium">Medium</option>
                  <option value="low">Low</option>
                </select>
              </div>

              {/* Category Dropdown */}
              <div className="col-6 col-md-3">
                <select
                  className="form-select"
                  value={category}
                  onChange={(e) => setCategory(e.target.value)}>
                  <option value="" disabled>
                    Category
                  </option>
                  <option value="social">Social</option>
                  <option value="shopping">Shopping</option>
                  <option value="savings">Savings</option>
                  <option value="workouts">Workouts</option>
                </select>
              </div>

              {/* Add Button */}
              <div className="col-12">
                <button type="submit" className="btn btn-primary">
                  <i className="bi bi-plus-circle me-2"></i>
                  Add Task
                </button>
              </div>
            </form>
          </div>
        </div>

        {/* Task Cards Section */}
        <div className="task-list mt-4">
          {tasks.map((task) => (
            <div key={task.id} className="card mb-3">
              <div className="card-body d-flex justify-content-between align-items-center">
                {/* Left Side - Checkbox and Task Text */}
                <div className="d-flex align-items-center">
                  <input
                    type="checkbox"
                    className="form-check-input me-3"
                    checked={task.completed}
                    onChange={() => handleToggleComplete(task.id)}
                  />
                  <span
                    style={{
                      textDecoration: task.completed ? "line-through" : "none",
                    }}>
                    {task.text}
                  </span>
                </div>

                {/* Right Side - Priority, Category, and Action Buttons */}
                <div className="d-flex align-items-center gap-3">
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
          ))}
        </div>
      </div>
    </main>
  );
};

export default Main;
