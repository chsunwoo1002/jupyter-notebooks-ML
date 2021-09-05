import React from "react";

const DisplayContainer = (props) => {
  let inputArr;
  if (props.input) {
    inputArr = props.input;
    console.log(inputArr);
  }

  return <h1> here</h1>;
};

export default DisplayContainer;
