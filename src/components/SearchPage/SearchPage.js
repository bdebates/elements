import { useState } from "react";
import PeriodicDisplay from "../PeriodicDisplay";
import "./SearchPage.css";
export default function Searchpage() {
  const [inputType, setInputType] = useState("text");
  const [searchMod, setSearchMod] = useState("");
  return (
    <>
      <div className="flex">
        <select
          onChange={(e) => {
            setSearchMod(e.target.value.split(" ")[1]);
            setInputType(e.target.value.split(" ")[0]);
            console.log(e.target.value.split(" ")[1]);
            console.log(e.target.value.split(" ")[0]);
          }}
        >
          <option value="text atomicname">Atomic Name:</option>
          <option value="number atomicnumber">Atomic Number:</option>
          <option value="text symbol">Atomic Symbol:</option>
          <option value="text bondingtype">Bonding type:</option>
          <option value="text broupblock">Group Block:</option>
          <option value="text state">State:</option>
        </select>
        <input type={inputType}></input>
      </div>
      {/* <div className="flex">
        <label>Atomic Name:</label>
        <input type="text"></input>
      </div>
      <div className="flex">
        <label>Atomic Number:</label>
        <input type="text"></input>
      </div>
      <div className="flex">
        <label>Atomic Symbol:</label>
        <input type="text"></input>
      </div>
      <div className="flex">
        <label>Bonding type:</label>
        <input type="text"></input>
      </div>
      <div className="flex">
        <label>Group Block:</label>
        <input type="text"></input>
      </div>
      <div className="flex">
        <label>State:</label>
        <input type="text"></input>
      </div> */}
    </>
  );
}
