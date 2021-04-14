import React from "react";
import "./App.css";

import StagingArea from "./StagingArea";
import GameBoard from "./GameBoard";

let emptyGame = [...Array(7)].map((e) => ["", "", "", "", "", ""]);

class App extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
      tokensInPlay: emptyGame,
      color: "Red",
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
    this.fallingToken = setInterval(this.tokenFallToBottem(colNumber), 300);
  }

  tokenFallToBottem(colNumber) {
    let currentColumn = this.state.tokensInPlay[colNumber].slice();
    let newColumn = [];
    let newArray = this.state.tokensInPlay.slice();
    for (let i = 0; i <= 5; i++) {
      if (currentColumn[i] !== "" && i < 5) {
        // look ahead
        if (currentColumn[i + 1] === "") {
          newColumn = [
            ...currentColumn.slice(0, i),
            "",
            currentColumn[i],
            ...currentColumn.slice(i + 2),
          ];
          break;
        } else {
          // end the loop, tokens are at the bottom of the game board.
          newColumn = currentColumn.slice();
          break;
        }
      }
    }
    if (newColumn !== currentColumn) {
      newArray.splice(colNumber, 1, newColumn);
      this.setState((state) => ({
        tokensInPlay: newArray,
      }));
    } else {
      clearInterval(this.fallingToken);
    }
  }

  render() {
    return (
      <div id="app-wrapper">
        <div id="title">
          <h1>Connect Four</h1>
          <h6>coded by cody</h6>
        </div>
        <StagingArea handleColumnButtonClick={this.handleColumnButtonClick} />
        <GameBoard tokensInPlay={this.state.tokensInPlay} />
      </div>
    );
  }
}

export default App;
