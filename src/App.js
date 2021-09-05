import React, { useState } from "react";

import "./App.css";
import DisplayContainer from "./components/Display/DisplayContainer";

import SidebarContainer from "./components/Sidebar/SidebarContainer";

import * as tf from "@tensorflow/tfjs";

function App() {
  const [inputArr, setInputArr] = useState(undefined);
  const getInputArray = (arr) => {
    setInputArr(arr);
  };
  //const model = await tf.loadLayersModel("src/tfjs_model/model.json");
  console.log(model);
  return (
    <div className="App">
      <SidebarContainer inputHandler={getInputArray}></SidebarContainer>
      <DisplayContainer input={inputArr} />
    </div>
  );
}

export default App;
