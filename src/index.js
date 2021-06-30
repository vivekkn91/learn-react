import { render } from "@testing-library/react";
import React from "react";
import "./index.css";
import ReactDom from "react-dom";
const firstBook = [
  {
    pic: "https://www.extremetech.com/wp-content/uploads/2019/12/SONATA-hero-option1-764A5360-edit.jpg",
    name: "vivek",
    age: "male",
  },
  {
    pic: "https://www.extremetech.com/wp-content/uploads/2019/12/SONATA-hero-option1-764A5360-edit.jpg",
    name: "ram",
    age: "male",
  },
  {
    pic: "https://www.extremetech.com/wp-content/uploads/2019/12/SONATA-hero-option1-764A5360-edit.jpg",
    name: "lak",
    age: "male",
  },
  {
    pic: "https://www.extremetech.com/wp-content/uploads/2019/12/SONATA-hero-option1-764A5360-edit.jpg",
    name: "lak",
    age: "male",
  },
  {
    pic: "https://www.extremetech.com/wp-content/uploads/2019/12/SONATA-hero-option1-764A5360-edit.jpg",
    name: "ram",
    age: "male",
  },
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
    <section className="mainsection">
      {firstBook.map((listofbook) => {
        const { pic, name, age } = listofbook;
        return (
          <div>
            <img src={pic} />
            <h1>{name}</h1>
            <h1>{age}</h1>
          </div>
        );
      })}
    </section>
  );
}

ReactDom.render(<First />, document.getElementById("root"));
