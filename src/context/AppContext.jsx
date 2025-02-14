import React, { createContext, useState, useEffect } from "react";

export const AppContext = createContext();

export const AppProvider = ({ children }) => {
  const [darkMode, setDarkMode] = useState(() => {
    const saved = localStorage.getItem("darkMode");
    return saved ? JSON.parse(saved) : false;
  });

  const [activeCategory, setActiveCategory] = useState(() => {
    const saved = localStorage.getItem("activeCategory");
    return saved || "all";
  });

  useEffect(() => {
    localStorage.setItem("darkMode", JSON.stringify(darkMode));
    localStorage.setItem("activeCategory", activeCategory);
    if (darkMode) {
      document.body.classList.add("dark-mode");
    } else {
      document.body.classList.remove("dark-mode");
    }
  }, [darkMode, activeCategory]);

  return (
    <AppContext.Provider
      value={{ darkMode, setDarkMode, activeCategory, setActiveCategory }}>
      {children}
    </AppContext.Provider>
  );
};
