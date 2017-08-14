import React from "react";
import _ from "lodash";
import cn from "classnames";

import css from "./style.css";

class Tile extends React.Component {
  constructor(props) {
    super(props);

    this.handleClick = this.handleClick.bind(this);
    this.handleKeyUp = this.handleKeyUp.bind(this);
    // this.handleChange = this.handleChange.bind(this);
    this.isWordOnFocus = this.isWordOnFocus.bind(this);
  }

  handleClick() {
    this.props.onClick(this);
  }

  handleKeyUp(e) {
    this.props.onKeyUp(this, e);
  }

  // handleChange(event) {
  //   this.props.updateValue(this.props.id, event.target.value);
  // }

  isWordOnFocus() {
    return _.intersection(this.props.wordId, this.props.wordsPressedIds).length;
  }

  componentDidUpdate() {
    if (this.props.wordId.includes(this.props.previousTile.wordId)) {
      if (this.props.deletedValue) {
        console.log("fix this and implement backspace");
        if (this.props.previousTile.x == this.props.x) {
          this.textInput.focus();
          return;
        }

        // if (this.props.previousTile.y == this.props.y) {
        //   this.textInput.focus();
        //   return;
        // }
      }

      if (this.props.x - this.props.previousTile.x == 1) {
        this.textInput.focus();
        return;
      }

      if (this.props.y - this.props.previousTile.y == 1) {
        this.textInput.focus();
        return;
      }
    }
  }

  render() {
    let originNumbers = "";
    if (this.props.origins.length) {
      originNumbers = this.props.origins.map((origin, i) =>
        <small key={i}>
          {origin}
        </small>
      );
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
          // onChange={this.handleChange}
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
