import React, { useMemo, useState } from "react";
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

    // console.log(json);
    // return json;
    setElements([...json]);
  }
  useMemo(() => {
    return getElements();
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
            return <p>{val.atomicNumber === 57 ? "*" : "**"}</p>;
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
              <p className={val.groupBlock.split(" ")[0]} key={val.name}>
                {val["symbol"]}
              </p>
              {extraBlanks.map((v, i) => {
                console.log(val.name + " " + val.name + i);
                return (
                  <p
                    style={{ border: "0px black solid" }}
                    key={val.name + i}
                  ></p>
                );
              })}
            </>
          );
        })}
      </div>
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
                  <p
                    style={{ border: "0px black solid" }}
                    key={value.name + i}
                  ></p>
                );
              })}
              <p className={value.groupBlock.split(" ")[0]} key={value.name}>
                <div className="asterick">
                  {value.atomicNumber === 57 ? "*" : ""}
                  {value.atomicNumber === 89 ? "**" : ""}
                </div>
                {value["symbol"]}
              </p>
            </>
          );
        }
        return <></>;
      })}
      <PeriodicDisplay></PeriodicDisplay>
    </>
  );
};
export default Periodic;
