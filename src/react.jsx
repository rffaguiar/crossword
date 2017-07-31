// @flow

import React from "react";
import ReactDOM from "react-dom";
import Crossword from "./components/Crossword";

const rootElement = (idName: string = "root") => {
  const element = document.createElement("div");
  element.id = idName;
  return element;
};

document.body.appendChild(rootElement());

ReactDOM.render(<Crossword />, document.getElementById("root"));
