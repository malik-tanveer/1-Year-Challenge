import React, { useContext } from "react";
import { DropdownContext } from "./Dropdown";

export const DropdownMenu = ({ children }: { children: React.ReactNode }) => {
  const context = useContext(DropdownContext);
  if (!context) throw new Error("DropdownMenu must be inside Dropdown");

  if (!context.open) return null;

  return (
    <div
      style={{
        position: "absolute",
        top: "40px",
        left: "0",
        backgroundColor: "white",
        boxShadow: "0 2px 8px rgba(0,0,0,0.15)",
        borderRadius: "4px",
        minWidth: "150px",
        zIndex: 10,
      }}
    >
      {children}
    </div>
  );
};
