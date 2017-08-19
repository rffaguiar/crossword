import React from "react";
import _ from "lodash";
import cn from "classnames";

import ALLOWED_LETTERS from "../../constants/allowed_letters";

import css from "./style.css";

class Tile extends React.Component {
  constructor(props) {
    super(props);

    this.handleClick = this.handleClick.bind(this);
    this.handleKeyUp = this.handleKeyUp.bind(this);
    this.isWordOnFocus = this.isWordOnFocus.bind(this);
  }

  handleClick() {
    this.textInput.select(); //always use select to remove current word if we have something on it.
    this.props.onClick(this);
  }

  handleKeyUp(e) {
    // only allow letters and backspace
    const lowerKey = e.key.toLowerCase();
    if (_.indexOf(ALLOWED_LETTERS, lowerKey) == -1) {
      return;
    }

    if (_.indexOf(ALLOWED_LETTERS, lowerKey) >= 0) {
      console.log("the letter is allowed");
      console.log("lowerKey: ", lowerKey);
    } else {
      console.log("the letter INST allowed");
      console.log("lowerKey: ", lowerKey);
    }

    this.props.onKeyUp(this, e);
  }

  isWordOnFocus() {
    return _.intersection(this.props.wordId, this.props.wordsPressedIds).length;
  }

  componentDidUpdate() {
    if (this.props.wordId.includes(this.props.previousTile.wordId)) {
      if (this.props.deletedValue) {
        console.log("value was deleted", this);

        if (this.props.previousTile.x - 1 == this.props.x) {
          console.log("focusing previous, X axis");
          this.textInput.select();
          return;
        }

        if (this.props.previousTile.y - 1 == this.props.y) {
          console.log("focusing previous, Y axis");
          this.textInput.select();
          return;
        }
      }

      if (
        this.props.x - this.props.previousTile.x == 1 &&
        !this.props.deletedValue
      ) {
        console.log("focusing next tile, X axis");
        this.textInput.select();
        return;
      }

      if (
        this.props.y - this.props.previousTile.y == 1 &&
        !this.props.deletedValue
      ) {
        console.log("focusing next tile, Y axis");
        this.textInput.select();
        return;
      }
    }
  }

  render() {
    let originNumbers = "";
    if (this.props.origins.length) {
      originNumbers = this.props.origins.map((origin, i) => {
        if (i === this.props.origins.length - 1) {
          return (
            <small key={i}>
              {origin}
            </small>
          );
        } else {
          return (
            <small key={i}>
              {origin}/
            </small>
          );
        }
      });
    }

    return (
      <div className={css.Tile}>
        {!_.isEmpty(originNumbers) &&
          <span className={css.originNumbers}>
            {originNumbers}
          </span>}
        <input
          type="text"
          className={cn(
            css.tileInput,
            {
              [css.noWord]: _.isEmpty(this.props.wordId)
            },
            {
              [css.wordSelected]: this.props.wordSelected
            }
          )}
          onClick={this.handleClick}
          onKeyUp={this.handleKeyUp}
          ref={input => {
            this.textInput = input;
          }}
          maxLength="1"
          id={this.props.id}
          defaultValue={this.props.value}
          disabled={_.isEmpty(this.props.wordId)}
        />
      </div>
    );
  }
}

export default Tile;
