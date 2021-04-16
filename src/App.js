import React from "react";
import "./App.css";

import StagingArea from "./StagingArea";
import GameBoard from "./GameBoard";
import WinnersComponent from "./WinnersComponent";
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

class App extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
      tokensInPlay: [...Array(7)].map((e) => Array(6).fill("")),
      color: "Red",
      gameOutCome: [false, ""],
    };
    this.handleColumnButtonClick = this.handleColumnButtonClick.bind(this);
    this.handleResetGameClick = this.handleResetGameClick.bind(this);
  }

  handleResetGameClick() {
    this.setState({
      tokensInPlay: [...Array(7)].map((e) => Array(6).fill("")),
      color: "Red",
      gameOutCome: [false, ""],
    });
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
      if (outcome[0]) {
        this.setState({ gameOutCome: [true, outcome[1]] });
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
        <div className="title" id="title-left">
          <h1>Connect Four</h1>
        </div>
        <div className="title" id="title-right">
          <h1>Connect Four</h1>
        </div>
        <StagingArea
          handleColumnButtonClick={this.handleColumnButtonClick}
          currentTurn={this.state.color}
        />
        <GameBoard tokensInPlay={this.state.tokensInPlay} />
        <WinnersComponent
          winnersColor={this.state.gameOutCome}
          handleResetGameClick={this.handleResetGameClick}
        />
      </div>
    );
  }
}

export default App;
