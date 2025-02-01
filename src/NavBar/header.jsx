import React from "react";
import "bootstrap/dist/css/bootstrap.min.css";
import "./header.css";

const Header = () => {
  return (
    <div className="Header d-flex fixed-top bg-secondary">
      <div className="Profile col-2 pt-3 text-start ps-3">
        <img
          className="img-fluid pb-3"
          src={
            "https://t4.ftcdn.net/jpg/05/11/55/91/360_F_511559113_UTxNAE1EP40z1qZ8hIzGNrB0LwqwjruK.jpg"
          }
          alt="Profile"
          width="50px"
        />
      </div>
      <header className="Title col-10 text-light py-3 position-relative">
        <h1 className="text-center m-0">To-Do List</h1>
        <button
          type="button"
          className="btn btn-primary position-absolute top-0 end-0 mt-3 me-3"
          data-bs-toggle="button">
          Dark
        </button>
      </header>
    </div>
  );
};

export default Header;
