// @flow

import React from "react";
import ReactDOM from "react-dom";
import Board from "./components/Board";
import "./styles.css";

const rootElement = (idName: string = "root") => {
  const element = document.createElement("div");
  element.id = idName;
  return element;
};

document.body.appendChild(rootElement());

ReactDOM.render(<Board />, document.getElementById("root"));
