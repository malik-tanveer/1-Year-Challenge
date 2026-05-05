import React, { createContext, useState } from "react";

interface DropdownContextType {
  open: boolean;
  toggle: () => void;
}

export const DropdownContext = createContext<DropdownContextType | null>(null);

export const Dropdown = ({ children }: { children: React.ReactNode }) => {
  const [open, setOpen] = useState(false);
  const toggle = () => setOpen((prev) => !prev);

  return (
    <DropdownContext.Provider value={{ open, toggle }}>
      <div style={{ position: "relative", display: "inline-block" }}>
        {children}
      </div>
    </DropdownContext.Provider>
  );
};
