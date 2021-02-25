import React, { useState } from "react";
import PeriodicDisplay from "../PeriodicDisplay";
import "./Periodic.css";

const Periodic = () => {
  const url = "https://neelpatel05.pythonanywhere.com/";
  const searchMod = "";
  const [elements, setElements] = useState([]);
  async function getElements() {
    let response;
    response = await fetch(`${url}${searchMod}`);

    let json = await response.json();

    console.log(json);
    // return json;
    setElements(json);
  }
  // getElements();
  return (
    <>
      <div>
        {console.log("div")}
        {elements.map((val, id) => {
          return (
            <p key={id}>
              {console.log("herrre")}
              {console.log(val)}
              {val["name"]}
            </p>
          );
        })}
      </div>
      <PeriodicDisplay></PeriodicDisplay>
    </>
  );
};
export default Periodic;
