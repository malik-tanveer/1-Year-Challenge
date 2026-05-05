// Child.js
import { useContext } from "react";
import { ThemeContext } from "../context/ThemeCotext";

const Child = () => {
  const { theme } = useContext(ThemeContext);

  return <h2>Child sees theme: {theme}</h2>;
};

export default Child;
