import React from "react";
import ReactDOM from "react-dom";
import _ from "lodash";

const component = () => {
  const element = document.createElement("div");

  element.innerHTML = _.join(["Hello ", "webpack"], "");
  element.id = "root";

  return element;
};

document.body.appendChild(component());

const Element = () => <div>REACT COMPONENT</div>;

ReactDOM.render(<Element />, document.getElementById("root"));
