import React from "react";
import _ from "lodash";

import WORDS from "../../constants/words";
import INITIAL_BOARD from "../../constants/board";

import Tile from "../Tile";

import css from "./style.css";

class Board extends React.Component {
  constructor(props) {
    super(props);

    this.state = {
      previousTile: {},
      wordsPressed: [],
      board: INITIAL_BOARD,
      incorrectWordsNumber: 0
    };

    this.handleClick = this.handleClick.bind(this);
    this.handleKeyPress = this.handleKeyPress.bind(this);
    this.handleUpdateTileValue = this.handleUpdateTileValue.bind(this);
    this.checkWords = this.checkWords.bind(this);
  }

  handleClick(tile) {
    this.setState({
      wordsPressed: tile.props.wordId,
      previousTile: {}
    });
  }

  handleKeyPress(tile) {
    if (_.isEmpty(this.state.previousTile)) {
      this.setState({
        previousTile: {
          wordId: tile.props.wordId[0],
          x: tile.props.x,
          y: tile.props.y
        }
      });
    } else {
      // console.log("keep the wordId, update only x,y");
      this.setState({
        previousTile: {
          wordId: this.state.previousTile.wordId,
          x: tile.props.x,
          y: tile.props.y
        }
      });
    }
  }

  handleUpdateTileValue(newTileId, newTileValue) {
    const indexTileToUpdate = _.findIndex(
      this.state.board,
      tile => tile.id == newTileId
    );

    let newBoard = this.state.board;
    newBoard[indexTileToUpdate].value = newTileValue;
    this.setState({
      board: newBoard
    });
  }

  checkWords() {
    console.log("checking cherry");
    // get all tiles with wordId 1,
    // compare the values of each one and check with the correct word
    let tempBoard = this.state.board;
    let selectedTiles = [];
    let userWord = [];
    let correctWord = [];
    let incorrectWords = 0;

    for (var word of WORDS) {
      console.log(`checking word: ${word.word}`);

      // grab user tiles referenced to a specified word
      selectedTiles = _.filter(tempBoard, tile => {
        return _.includes(tile.wordId, word.id);
      });

      // transform the user tiles in a array of letters
      for (var tile of selectedTiles) {
        userWord.push(tile.value);
      }

      // explode correct word to an array of letters
      correctWord = [...word.word];
      console.log("-------");
      console.log(`correctWord: ${correctWord}`);
      console.log(`userWord: ${userWord}`);
      // compare them
      for (var i = 0; i < correctWord.length; i++) {
        if (correctWord[i] != userWord[i]) {
          console.log(`${correctWord[i]} is different from ${userWord[i]}`);
          incorrectWords++;
          break;
        }
      }
      console.log("-------");

      userWord = [];
    }

    this.setState({
      incorrectWordsNumber: incorrectWords
    });

    if (incorrectWords) {
      console.log(`number of incorrect words: ${incorrectWords}`);
    } else {
      console.log("congrats! everything is correct!");
    }
  }

  componentDidUpdate() {
    console.log("showing board");
    console.log(this.state.board);
  }

  render() {
    const board = this.state.board.map((tile, i) => {
      return (
        <Tile
          onClick={this.handleClick}
          onKeyPress={this.handleKeyPress}
          updateValue={this.handleUpdateTileValue}
          previousTile={this.state.previousTile}
          key={i}
          origins={tile.origin}
          x={tile.x}
          y={tile.y}
          wordId={tile.wordId}
          id={tile.id}
          value={tile.value}
          highlightIds={this.state.wordsPressed}
        />
      );
    });

    return (
      <div className={css.Board}>
        {board}
        <br />
        <button onClick={this.checkWords}>Check Words</button>
        <br />
        <div>
          Incorrect Words: {this.state.incorrectWordsNumber}
        </div>
      </div>
    );
  }
}

export default Board;
