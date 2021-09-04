import React, { useState } from "react";
import Button from "../../UI/Button";
import InputCanvas from "./InputCanvas";

import "./SidebarContainer.css";

const SidebarContainer = (props) => {
  const [drawing, setDrawing] = useState(undefined);

  const getCanvas = (canvas) => {
    setDrawing(canvas);
  };

  const clearDrawing = () => {
    if (!drawing) {
      return;
    }
    const ctx = drawing.getContext("2d");
    ctx.clearRect(0, 0, drawing.width, drawing.height);
  };
  const parsingCanvas = () => {
    if (!drawing) {
      return;
    }
    const ctx = drawing.getContext("2d");
    let canvasData = ctx.getImageData(0, 0, drawing.width, drawing.height);
    // for (let i = 3; i < canvasData.width; i++){
    //   for (let j = )
    // }
    console.log(canvasData);
  };
  return (
    <div className="sidebar">
      <InputCanvas currentDrawing={getCanvas} />
      <Button onClick={parsingCanvas}>Go</Button>
      <Button onClick={clearDrawing}>Reset</Button>
    </div>
  );
};

export default SidebarContainer;
