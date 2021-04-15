import React from "react";
import "./App.css";

import StagingArea from "./StagingArea";
import GameBoard from "./GameBoard";

import checkBoardForWin from "./CheckBoardForWin";

// Helper function used to test array equals
function arrayEquals(a, b) {
  return (
    Array.isArray(a) &&
    Array.isArray(b) &&
    a.length === b.length &&
    a.every((val, index) => val === b[index])
  );
}

// Populate a game array
let emptyGame = [];
for (let i = 0; i <= 6; i++) {
  emptyGame[i] = [];
  for (let j = 0; j <= 5; j++) {
    emptyGame[i].push("");
  }
}

class App extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
      tokensInPlay: emptyGame,
      color: "Red",
      gameOutCome: false,
    };
    this.handleColumnButtonClick = this.handleColumnButtonClick.bind(this);
  }

  handleColumnButtonClick(e) {
    let colNumber = e.target.value;
    if (this.state.tokensInPlay[colNumber][0] === "") {
      let newArray = this.state.tokensInPlay.slice();
      newArray[colNumber].splice(0, 1, this.state.color);
      this.setState({ tokensInPlay: newArray });
      this.switchColor();
      this.startfallingToken(colNumber);
    }
  }

  switchColor() {
    if (this.state.color === "Red") {
      this.setState({ color: "Yellow" });
    } else {
      this.setState({ color: "Red" });
    }
  }

  startfallingToken(colNumber) {
    this.fallingToken = setInterval(
      () => this.tokenFallToBottem(colNumber),
      100
    );
  }

  tokenFallToBottem(colNumber) {
    console.log("falling call");
    let newColumn = this.state.tokensInPlay[colNumber].slice();
    let largestEmptyIndex = 0;
    for (let i = 0; i <= 5; i++) {
      if (newColumn[i] === "" && i > largestEmptyIndex) {
        largestEmptyIndex = i;
      }
    }

    let shiftedEmpty = newColumn.splice(largestEmptyIndex, 1);
    newColumn.unshift(...shiftedEmpty);

    if (arrayEquals(newColumn, this.state.tokensInPlay[colNumber])) {
      clearInterval(this.fallingToken);
      let outcome = checkBoardForWin(this.state.tokensInPlay);
      console.log(outcome);
    } else {
      let newArray = this.state.tokensInPlay.slice();
      newArray.splice(colNumber, 1, newColumn);
      this.setState({ tokensInPlay: newArray });
    }
  }

  render() {
    return (
      <div id="app-wrapper">
        <div id="title">
          <h1>Connect Four</h1>
          <h6>coded by cody</h6>
        </div>
        <StagingArea
          handleColumnButtonClick={this.handleColumnButtonClick}
          currentTurn={this.state.color}
        />
        <GameBoard tokensInPlay={this.state.tokensInPlay} />
      </div>
    );
  }
}

export default App;
