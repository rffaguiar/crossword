import React from "react";
import _ from "lodash";
import cn from "classnames";

import WORDS from "../../constants/words";
import INITIAL_BOARD from "../../constants/board";

import Tile from "../Tile";

import css from "./style.css";

class Board extends React.Component {
  constructor(props) {
    super(props);

    this.state = {
      previousTile: {}, // position and word's id on focus
      wordsPressed: [], // ids of words pressed
      board: INITIAL_BOARD,
      incorrectWordsNumber: 0
    };

    this.handleClick = this.handleClick.bind(this);
    this.handleKeyUp = this.handleKeyUp.bind(this);
    // this.handleUpdateTileValue = this.handleUpdateTileValue.bind(this);
    this.checkWords = this.checkWords.bind(this);
    this.isWordOnFocus = this.isWordOnFocus.bind(this);
  }

  handleClick(tile) {
    this.setState({
      wordsPressed: tile.props.wordId,
      previousTile: {}
    });
  }

  handleKeyUp(tile, e) {
    const indexTileToUpdate = _.findIndex(
      this.state.board,
      i => i.id == tile.props.id
    );

    let newBoard = this.state.board;
    let deletedValue = false;

    if (e.keyCode == 8) {
      //backspace
      newBoard[indexTileToUpdate].value = "";
      deletedValue = true;
    } else {
      newBoard[indexTileToUpdate].value = e.key;
    }

    if (_.isEmpty(this.state.previousTile)) {
      this.setState({
        previousTile: {
          wordId: tile.props.wordId[0],
          x: tile.props.x,
          y: tile.props.y
        },
        board: newBoard,
        deletedValue: deletedValue
      });
    } else {
      // console.log("keep the wordId, update only x,y");
      this.setState({
        previousTile: {
          wordId: this.state.previousTile.wordId,
          x: tile.props.x,
          y: tile.props.y
        },
        board: newBoard,
        deletedValue: deletedValue
      });
    }
  }

  // handleUpdateTileValue(newTileId, newTileValue) {
  //   const indexTileToUpdate = _.findIndex(
  //     this.state.board,
  //     tile => tile.id == newTileId
  //   );
  //
  //   let newBoard = this.state.board;
  //   newBoard[indexTileToUpdate].value = newTileValue;
  //   this.setState({
  //     board: newBoard
  //   });
  // }

  checkWords() {
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

  isWordOnFocus(tile) {
    return _.intersection(tile.wordId, this.state.wordsPressed).length;
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
          onKeyUp={this.handleKeyUp}
          // updateValue={this.handleUpdateTileValue}
          previousTile={this.state.previousTile}
          key={i}
          origins={tile.origin}
          x={tile.x}
          y={tile.y}
          wordId={tile.wordId}
          id={tile.id}
          value={tile.value}
          wordSelected={this.isWordOnFocus(tile)}
          deletedValue={this.state.deletedValue}
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
