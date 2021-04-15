import React from "react";
import { v4 as uuidv4 } from "uuid";

class GameBoard extends React.Component {
  render() {
    let boardLayout = this.props.tokensInPlay.map((column) => {
      return (
        <div key={uuidv4()} className="game-board-col">
          {column.map((space) => {
            switch (space) {
              case "Red":
                return <div key={uuidv4()} className="game-space-red"></div>;
              case "Yellow":
                return <div key={uuidv4()} className="game-space-yellow"></div>;
              default:
                return <div key={uuidv4()} className="game-space"></div>;
            }
          })}
        </div>
      );
    });
    return <div id="game-board">{boardLayout}</div>;
  }
}

export default GameBoard;
