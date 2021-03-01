import React, { useMemo, useState } from "react";
import PeriodicDisplay from "../PeriodicDisplay";
import "./Periodic.css";

const Periodic = () => {
  const url = "https://neelpatel05.pythonanywhere.com/";
  const searchMod = "";
  const [elements, setElements] = useState([]);
  const [selectedElemnt, setSelectedElemnt] = useState("");
  async function getElements() {
    let response;
    response = await fetch(`${url}${searchMod}`);

    let json = await response.json();

    // console.log(json);
    // return json;
    setElements([...json]);
  }
  useMemo(() => {
    getElements();
  }, []);
  // getElements();
  return (
    <>
      <div className="flex">
        {/* {console.log("div")} */}
        {elements.map((val, id) => {
          let extraBlanks;
          // let elementColor;
          // console.log(val);
          switch (val.atomicNumber) {
            case 1:
              extraBlanks = [...Array(16)];
              break;
            case 4:
            case 12:
              extraBlanks = [...Array(10)];
              break;

            default:
              extraBlanks = [];
              break;
          }
          if (val.atomicNumber === 57 || val.atomicNumber === 89) {
            return <button>{val.atomicNumber === 57 ? "*" : "**"}</button>;
          }
          if (
            (val.atomicNumber >= 57 && val.atomicNumber <= 71) ||
            (val.atomicNumber >= 89 && val.atomicNumber <= 103)
          ) {
            return <></>;
          }
          // switch (val.groupBlock) {
          //   case "alkali metal":
          //     elementColor = "red";
          //     break;

          //   default:
          //     break;
          // }
          return (
            <>
              <button
                onClick={(e) => {
                  setSelectedElemnt(e.target.value);
                }}
                className={val.groupBlock.split(" ")[0]}
                key={val.name}
                value={val.name}
              >
                {val["symbol"]}
              </button>
              {extraBlanks.map((v, i) => {
                // console.log(val.name + " " + val.name + i);
                return (
                  <button
                    style={{ border: "0px black solid" }}
                    key={val.name + i}
                  ></button>
                );
              })}
            </>
          );
        })}
        {elements.map((value, ids) => {
          if (
            (value.atomicNumber >= 57 && value.atomicNumber <= 71) ||
            (value.atomicNumber >= 89 && value.atomicNumber <= 103)
          ) {
            let extraBlanks;
            if (value.atomicNumber === 57 || value.atomicNumber === 89) {
              extraBlanks = [...Array((value.atomicNumber % 16) - 6)];
            } else {
              extraBlanks = [];
            }
            return (
              <>
                {extraBlanks.map((v, i) => {
                  return (
                    <button
                      style={{ border: "0px" }}
                      key={value.name + i}
                    ></button>
                  );
                })}
                <button
                  onClick={(e) => {
                    setSelectedElemnt(e.target.value);
                  }}
                  className={value.groupBlock.split(" ")[0]}
                  key={value.name}
                  value={value.name}
                >
                  <div className="asterick">
                    {value.atomicNumber === 57 ? "*" : ""}
                    {value.atomicNumber === 89 ? "**" : ""}
                  </div>
                  {value["symbol"]}
                </button>
              </>
            );
          }
          return <></>;
        })}
      </div>

      <PeriodicDisplay element={selectedElemnt}></PeriodicDisplay>
    </>
  );
};
export default Periodic;
