import React from "react";
import _ from "lodash";
import cn from "classnames";
import css from "./style.scss";

const isActive = (wordId, wordsPressed) => {
  if (_.indexOf(wordsPressed, wordId) >= 0) {
    return true;
  }
};

const Tips = props => {
  const wordsPressed = props.wordsPressed;
  console.log("wordsPressed inside tips: ", wordsPressed);

  const tips = props.words.map((word, i) => {
    return (
      <li
        key={word.id}
        className={cn({ [css.isPressed]: isActive(word.id, wordsPressed) })}
      >
        {word.tip}
      </li>
    );
  });
  return (
    <div className={css.Tips}>
      <ol>
        {tips}
      </ol>
    </div>
  );
};

export default Tips;
