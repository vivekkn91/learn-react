import React from "react";
import "./index.css";
import ReactDom from "react-dom";
import { firstBook } from "./nav";
import { Clickbutton } from "./clickbutton";
import { Loopdata } from "./loopdata";

//const namearry = ["qdsdsd", "sdsds"];
//const listItems = namearry.map((namee) => {
//return <li>{namee} </li>;
//});
function First() {
  {
    // console.log(listItems);
  }
  return (
    <section className="maindiv">
      <Loopdata></Loopdata>
      <Clickbutton></Clickbutton>
      {firstBook.map((listofbook) => {
        const { pic, name, age } = listofbook;
        const clickme = () => alert(name);
        return (
          <div className="">
            <img src={pic} />
            <h1>{name}</h1>
            <h1>{age}</h1>
            <button type="button" onClick={clickme}>
              buy
            </button>
          </div>
        );
      })}
    </section>
  );
}

ReactDom.render(<First />, document.getElementById("root"));
