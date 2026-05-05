import { useContext } from "react";
import { ThemeContext } from "../components/ThemeContext";

export default function Navbar() {
  const context = useContext(ThemeContext);

  if (!context) return null;
  const { theme, toggleTheme } = context;

  return (
    <nav style={{ padding: "10px", borderBottom: "1px solid gray" }}>
      <h2>My Website</h2>
      <button onClick={toggleTheme}>
        Switch to {theme === "light" ? "Dark 🌙" : "Light ☀️"}
      </button>
    </nav>
  );
}
