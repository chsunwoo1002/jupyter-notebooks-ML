import React from "react";
import Button from "../../UI/Button";
import InputCanvas from "./InputCanvas";

import "./SidebarContainer.css";

const SidebarContainer = (props) => {
  return (
    <div className="sidebar">
      <InputCanvas />
      <Button>Go</Button>
      <Button>Reset</Button>
    </div>
  );
};

export default SidebarContainer;
