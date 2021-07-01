import React, { useState } from "react";
import { firstBook } from "./nav";

export const Loopdata = () => {
  const [data, setdata] = useState(firstBook);
  {
    data.map((data) => {
      const { name } = data;
      console.log(name);
      return (
        <div>
          <h1>{name}</h1>
        </div>
      );
    });
  }
};
