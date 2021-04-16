import React from "react";

class WinnersComponent extends React.Component {
  render() {
    let losingColor = this.props.winnersColor[1] === "Red" ? "Yellow" : "Red";
    let winnerDivId =
      this.props.winnersColor[1] === "Red"
        ? "winning-banner-red"
        : "winning-banner-yellow";
    if (this.props.winnersColor[0]) {
      return (
        <div className="winning-banner" id={winnerDivId}>
          <h1>Congulations {this.props.winnersColor} you're the best!</h1>
          <h3>Or you are slight better than {losingColor}!</h3>
          <h5>Possibly just on this occasion....</h5>
          <h6>...It's a simple game. Calm down. Winning isn't everything...</h6>
          <button onClick={this.props.handleResetGameClick}>Play Again?</button>
        </div>
      );
    } else {
      return <div></div>;
    }
  }
}

export default WinnersComponent;
