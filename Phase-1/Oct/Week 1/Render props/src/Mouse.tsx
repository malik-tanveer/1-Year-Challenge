import React, { useState } from "react";

export function MouseTracker(props) {
  const [position, setPosition] = useState({ x: 0, y: 0 });

  return (
    <div
      style={{ border: "1px solid gray", height: "500px" }}
      onMouseMove={(e) => setPosition({ x: e.clientX, y: e.clientY })}
    >
      {/* Yahan render prop function call ho raha hai */}
      {props.render(position)}
    </div>
  );
}
