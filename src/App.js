import React from "react";
import "./App.css";

import StagingArea from "./StagingArea";
import GameBoard from "./GameBoard";

import checkBoardForWin from "./CheckBoardForWin";

let emptyGame = [...Array(7)].map((e) => ["", "", "", "", "", ""]);

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
      300
    );
  }

  tokenFallToBottem(colNumber) {
    let newColumn = this.state.tokensInPlay[colNumber].slice();
    // get larest empty index
    let largestEmptyIndex = 0;
    for (let i = 0; i <= 5; i++) {
      if (newColumn[i] === "" && i > largestEmptyIndex) {
        largestEmptyIndex = i;
      }
    }

    let shiftedEmpty = newColumn.splice(largestEmptyIndex, 1);
    newColumn.unshift(...shiftedEmpty);

    if (newColumn === this.state.tokensInPlay[colNumber]) {
      console.log("Clearing interval, calling check");
      clearInterval(this.fallingToken);
      let outcome = checkBoardForWin(this.state.tokensInPlay);
      if (outcome) {
        this.setState({ gameOutCome: true });
      }
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
