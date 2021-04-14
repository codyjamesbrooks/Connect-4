import React from "react";

class GameBoard extends React.Component {
  render() {
    let boardLayout = this.props.tokensInPlay.map((column) => {
      return (
        <div className="game-board-col">
          {column.map((space) => {
            switch (space) {
              case "Red":
                return <div className="game-space-red"></div>;
              case "Yellow":
                return <div className="game-space-yellow"></div>;
              default:
                return <div className="game-space"></div>;
            }
          })}
        </div>
      );
    });
    return <div id="game-board">{boardLayout}</div>;
  }
}

export default GameBoard;
