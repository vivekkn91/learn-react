import React, { useState } from "react";

export const Clickbutton = () => {
  const [state, setstate] = useState("clickbutton to see my name");
  const changeButton = () => {
    if (state == "clickbutton to see my name") {
      setstate("sdhd");
    } else {
      setstate("clickbutton to see my name");
    }
  };

  return (
    <div>
      <h1>{state}</h1>
      <button onClick={changeButton}>click me</button>
    </div>
  );
};
