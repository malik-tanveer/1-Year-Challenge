import { useState } from "react";
import { ThemeContext } from "../context/ThemeCotext";
import Child from "../context/Child";

const Context = () => {
  const [theme, setTheme] = useState("light");

  const toggleTheme = () =>
    setTheme((prev) => (prev === "light" ? "dark" : "light"));

  return (
    <ThemeContext.Provider value={{ theme, toggleTheme }}>
      <div style={{ background: theme === "light" ? "#fff" : "#333", color: theme === "light" ? "#000" : "#fff", minHeight: "100vh", padding: "20px" }}>
        <h1>Current Theme: {theme}</h1>
        <button onClick={toggleTheme}>Toggle Theme</button>
        <Child />
      </div>
    </ThemeContext.Provider>
  );
};

export default Context;
