import React from "react";

export const DropdownItem = ({ children }: { children: React.ReactNode }) => {
  return (
    <div
      style={{
        padding: "8px 12px",
        cursor: "pointer",
      }}
      onMouseEnter={(e) =>
        (e.currentTarget.style.backgroundColor = "#f0f0f0")
      }
      onMouseLeave={(e) => (e.currentTarget.style.backgroundColor = "white")}
    >
      {children}
    </div>
  );
};
