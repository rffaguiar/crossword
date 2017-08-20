// @flow

import * as React from "react";
import ReactDOM from "react-dom";
import Board from "./components/Board";
import "./style.scss";

const rootElement = (idName: string = "root") => {
  const element = document.createElement("div");
  element.id = idName;
  return element;
};

const googleFonts = () => {
  const link = document.createElement("link");
  link.href = "https://fonts.googleapis.com/css?family=Lato";
  link.rel = "stylesheet";
  return link;
};

const metaViewport = () => {
  const meta = document.createElement("meta");

  meta.name = "viewport";
  meta.content = "width=device-width, initial-scale=1";

  return meta;
};

window.document.body.appendChild(rootElement());
window.document.head.appendChild(metaViewport());
window.document.head.appendChild(googleFonts());

ReactDOM.render(<Board />, document.getElementById("root"));
