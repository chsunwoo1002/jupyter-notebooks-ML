import React, { useState } from "react";
import Button from "../../UI/Button";
import InputCanvas from "./InputCanvas";

import "./SidebarContainer.css";

const SidebarContainer = (props) => {
  const [drawing, setDrawing] = useState("");

  const getCanvas = (canvas) => {
    setDrawing(canvas);
  };

  const clearDrawing = (props) => {
    if (!drawing) {
      return;
    }
    const ctx = drawing.getContext("2d");
    ctx.clearRect(0, 0, drawing.width, drawing.height);
  };

  return (
    <div className="sidebar">
      <InputCanvas currentDrawing={getCanvas} />
      <Button>Go</Button>
      <Button onClick={clearDrawing}>Reset</Button>
    </div>
  );
};

export default SidebarContainer;
