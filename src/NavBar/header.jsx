import React, { useContext } from "react";
import { AppContext } from "../context/AppContext";
import "bootstrap/dist/css/bootstrap.min.css";

const Header = () => {
  const { darkMode, setDarkMode } = useContext(AppContext);

  return (
    <div
      className={`Header d-flex fixed-top ${
        darkMode ? "bg-dark" : "bg-secondary"
      }`}>
      <div className="Profile col-2 pt-3 text-start ps-3">
        <img
          className="img-fluid pb-3 rounded-circle"
          src="https://t4.ftcdn.net/jpg/05/11/55/91/360_F_511559113_UTxNAE1EP40z1qZ8hIzGNrB0LwqwjruK.jpg"
          alt="Profile"
          width="50px"
        />
      </div>
      <header className="Title col-10 text-light py-3 position-relative">
        <h1 className="text-center m-0">To-Do List</h1>
        <button
          type="button"
          className={`btn ${
            darkMode ? "btn-light" : "btn-dark"
          } position-absolute top-0 end-0 mt-3 me-3`}
          onClick={() => setDarkMode(!darkMode)}>
          {darkMode ? "Light" : "Dark"}
        </button>
      </header>
    </div>
  );
};

export default Header;
