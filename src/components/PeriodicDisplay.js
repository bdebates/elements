import React from "react";
const PeriodicDisplay = (props) => {
  return (
    <>
      <h3>Click an element to display its properties!</h3>{" "}
      <h2>{props.element}</h2>
    </>
  );
};
export default PeriodicDisplay;
