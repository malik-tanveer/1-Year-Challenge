import { useContext } from "react";
import { ThemeContext } from "../components/ThemeContext";

export default function Footer() {
  const context = useContext(ThemeContext);

  if (!context) return null;
  const { theme } = context;

  return (
    <footer style={{ padding: "10px", borderTop: "1px solid gray" }}>
      <p>Current Theme: {theme.toUpperCase()}</p>
      <p>© 2025 My Website</p>
    </footer>
  );
}
