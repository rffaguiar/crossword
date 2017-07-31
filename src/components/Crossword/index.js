import React from "react";
import _ from "lodash";
import classNames from "classnames";

import Board from "../Board";

import css from "./style.css";

const TemporaryRoadmap = () =>
  <div>
    <p>https://www.theguardian.com/crosswords/quick/14716#7-down</p>
    <p>done: little numbers at origin</p>
    <p>done: highlight word tiles when clicked</p>
    <p>
      done: when type one letter, focus on the next tile related to that word
    </p>
    <p>done: remove the placeholders and start the checking</p>
    <p>done: check all buttons</p>
    <p>implement backspace</p>
    <p>implement tips</p>
  </div>;

const Crossword = () =>
  <div className="Crossword">
    <div>
      <TemporaryRoadmap />
      <Board />
    </div>
  </div>;

export default Crossword;
