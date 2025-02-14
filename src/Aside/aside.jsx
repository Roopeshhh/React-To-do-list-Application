import React, { useContext } from "react";
import { AppContext } from "../context/AppContext";
import "bootstrap/dist/css/bootstrap.min.css";

const Aside = () => {
  const { darkMode, activeCategory, setActiveCategory } =
    useContext(AppContext);

  const categories = [
    { id: "all", name: "All Tasks", icon: "bi-list-ul" },
    { id: "social", name: "Social", icon: "bi-people" },
    { id: "shopping", name: "Shopping", icon: "bi-cart" },
    { id: "savings", name: "Savings", icon: "bi-piggy-bank" },
    { id: "workouts", name: "Workouts", icon: "bi-bicycle" },
  ];

  return (
    <div
      className={`col-2 vh-100 position-fixed top-0 pt-5 mt-5 d-flex flex-column 
      ${darkMode ? "bg-dark" : "bg-light"}`}>
      <div className="mt-4 flex-grow-1">
        {categories.map((category) => (
          <button
            key={category.id}
            className={`btn w-100 text-start mb-2 ${
              activeCategory === category.id
                ? "btn-primary"
                : darkMode
                ? "btn-outline-light"
                : "btn-outline-dark"
            }`}
            onClick={() => setActiveCategory(category.id)}>
            <i className={`bi ${category.icon} me-2`}></i>
            {category.name}
          </button>
        ))}
      </div>

      <div className="bottom-buttons mb-4 px-3">
        <button
          className={`btn w-100 mb-2 ${
            darkMode ? "btn-outline-light" : "btn-outline-dark"
          }`}>
          <i className="bi bi-question-circle me-2"></i>
          Help
        </button>
        <button
          className={`btn w-100 ${
            darkMode ? "btn-outline-light" : "btn-outline-dark"
          }`}>
          <i className="bi bi-gear me-2"></i>
          Settings
        </button>
      </div>
    </div>
  );
};

export default Aside;
