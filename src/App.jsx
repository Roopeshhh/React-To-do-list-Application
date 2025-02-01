import React from "react";
import Aside from "./Aside/aside";
import Header from "./NavBar/header";
import Main from "./Main/main";
import "bootstrap/dist/css/bootstrap.min.css";

function App() {
  return (
    <>
      <Header />
      <div className="container-fluid p-0">
        <div className="row">
          <Aside />
          <Main />
        </div>
      </div>
    </>
  );
}

export default App;

/* import "bootstrap/dist/css/bootstrap.min.css";
import "bootstrap/dist/js/bootstrap.bundle.min.js";

import React from "react";
import Header from "./NavBar/header";
import Aside from "./Aside/aside";
const App = () => {
  return (
    <>
      <Header />
      <Aside />
    </>
  );
};

export default App; */
