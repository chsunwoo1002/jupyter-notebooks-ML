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
    let arr = [];
    for (let h = 0; h < canvasData.height; h++) {
      let tmp = [];
      for (let w = 0; w < canvasData.width; w++) {
        tmp.push(canvasData.data[h * canvasData.width + w * 4 + 3]);
      }
      arr.push(tmp);
    }

    props.inputHandler(arr);
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
