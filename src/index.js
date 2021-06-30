import { render } from "@testing-library/react";
import React from "react";
import ReactDom from "react-dom";
const firstBook = [
  { name: "vivek", age: "male" },
  { name: "ram", age: "male" },
  { name: "lak", age: "male" },
  { name: "lak", age: "male" },
  { name: "ram", age: "male" },
];
//const namearry = ["qdsdsd", "sdsds"];
//const listItems = namearry.map((namee) => {
//return <li>{namee} </li>;
//});
function First() {
  {
    // console.log(listItems);
  }
  return (
    <section>
      {firstBook.map((listofbook) => {
        const { name, age } = listofbook;
        return (
          <div>
            <h1>{name}</h1>
            <h1>{age}</h1>
            <h3>>hello</h3>
          </div>
        );
      })}
    </section>
  );
}

ReactDom.render(<First />, document.getElementById("root"));
