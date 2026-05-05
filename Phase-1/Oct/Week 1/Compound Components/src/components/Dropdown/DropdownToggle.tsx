import { useContext } from "react";
import { DropdownContext } from "./Dropdown";

export const DropdownToggle = () => {
  const context = useContext(DropdownContext);
  if (!context) throw new Error("DropdownToggle must be inside Dropdown");

  return (
    <button
      onClick={context.toggle}
      style={{
        backgroundColor: "#007bff",
        color: "white",
        padding: "8px 12px",
        border: "none",
        borderRadius: "4px",
        cursor: "pointer",
      }}
    >
      Toggle Menu
    </button>
  );
};
