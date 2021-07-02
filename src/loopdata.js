import React from "react";
import { firstBook } from "./nav";
const Loopdata = () => {
  const [people, setPeople] = React.useState(firstBook);
  const removeItem = (id) => {
    let newPeople = people.filter((person) => person.id !== id);
    setPeople(newPeople);
  };
  return (
    <>
      {people.map((person) => {
        const { id, name } = person;
        return (
          <div key={id} className="item">
            <h4>{name}</h4>
            <button onClick={() => removeItem(id)}>remove</button>
          </div>
        );
      })}
    </>
  );
};

export default Loopdata;
