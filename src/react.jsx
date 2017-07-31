import React from "react";
import ReactDOM from "react-dom";
import _ from "lodash";
import Crossword from "./components/Crossword";

const rootElement = () => {
  const element = document.createElement("div");
  element.id = "root";
  return element;
};

document.body.appendChild(rootElement());

ReactDOM.render(<Crossword />, document.getElementById("root"));
