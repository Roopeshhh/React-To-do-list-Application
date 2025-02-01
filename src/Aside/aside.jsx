import React from "react";
import "bootstrap/dist/css/bootstrap.min.css";
import "bootstrap/dist/js/bootstrap.bundle.min.js";

const Aside = () => {
  return (
    <>
      <div className="col-2 bg-light vh-100 position-fixed top-0 pt-5 mt-5">
        <div className="dropdown mt-3">
          <button
            className="btn btn-secondary dropdown-toggle mx-5 px-4"
            type="button"
            id="categoryDropdown"
            data-bs-toggle="collapse"
            data-bs-target="#categoryMenu"
            aria-expanded="false">
            <i className="bi bi-list-ul me-2"></i>
            Category
          </button>

          <div className="collapse" id="categoryMenu">
            <ul className="list-unstyled mt-2 mx-5 px-4 py-1">
              <li>
                <a className="dropdown-item py-1" href="#">
                  Social
                </a>
              </li>
              <li>
                <a className="dropdown-item py-1" href="#">
                  Shopping
                </a>
              </li>
              <li>
                <a className="dropdown-item py-1" href="#">
                  savings
                </a>
              </li>
              <li>
                <a className="dropdown-item py-1" href="#">
                  workouts
                </a>
              </li>
            </ul>
          </div>
        </div>

        <div className="other-buttons">
          <button
            className="btn btn-secondary mx-5 px-4 mt-5 me-5"
            type="button">
            <i className="bi bi-question-circle me-2"></i>
            Help
          </button>
          <button
            className="btn btn-secondary mx-5 px-4 mt-5 me-5"
            type="button">
            <i className="bi bi-gear me-2"></i>
            Settings
          </button>
        </div>
      </div>
    </>
  );
};

export default Aside;
