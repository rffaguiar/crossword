import React from "react";
import _ from "lodash";
import cn from "classnames";

import css from "./style.css";

class Tile extends React.Component {
  constructor(props) {
    super(props);

    this.handleClick = this.handleClick.bind(this);
    this.handleKeyPress = this.handleKeyPress.bind(this);
    this.handleChange = this.handleChange.bind(this);
    this.shouldPress = this.shouldPress.bind(this);
  }

  handleClick() {
    this.props.onClick(this);
  }

  handleKeyPress(e) {
    this.props.onKeyPress(this);
  }

  handleChange(event) {
    this.props.updateValue(this.props.id, event.target.value);
  }

  shouldPress() {
    return _.intersection(this.props.wordId, this.props.highlightIds).length;
  }

  shouldComponentUpdate(nextProps, nextState) {
    return true;
  }

  componentDidUpdate() {
    if (this.props.wordId.includes(this.props.previousTile.wordId)) {
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
      <div className="Tile">
        {!_.isEmpty(originNumbers) &&
          <span className="originNumbers">
            {originNumbers}
          </span>}
        <input
          type="text"
          className={cn(
            "tileInput",
            {
              noWord: _.isEmpty(this.props.wordId)
            },
            {
              wordPressed: this.shouldPress()
            }
          )}
          onClick={this.handleClick}
          onKeyPress={this.handleKeyPress}
          onChange={this.handleChange}
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
