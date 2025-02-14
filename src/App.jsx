import React from "react";
import Header from "./NavBar/header";
import Aside from "./Aside/aside";
import Main from "./Main/main";
import { AppProvider } from "./context/AppContext";
import "bootstrap/dist/css/bootstrap.min.css";

function App() {
  return (
    <AppProvider>
      <div className="app-wrapper">
        <Header />
        <div className="container-fluid p-0">
          <div className="row">
            <Aside />
            <Main />
          </div>
        </div>
      </div>
    </AppProvider>
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
