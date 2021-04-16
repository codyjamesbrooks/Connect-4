import React from "react";

class StagingArea extends React.Component {
  render() {
    let hoverToken =
      this.props.currentTurn === "Red" ? (
        <div className="hover-token-red"></div>
      ) : (
        <div className="hover-token-yellow"></div>
      );

    return (
      <div id="staging-area">
        <div
          className="col-stage"
          onClick={(e) => this.props.handleTokenDropClick(0)}
        >
          {hoverToken}
        </div>
        <div
          className="col-stage"
          onClick={(e) => this.props.handleTokenDropClick(1)}
        >
          {hoverToken}
        </div>
        <div
          className="col-stage"
          onClick={(e) => this.props.handleTokenDropClick(2)}
        >
          {hoverToken}
        </div>
        <div
          className="col-stage"
          onClick={(e) => this.props.handleTokenDropClick(3)}
        >
          {hoverToken}
        </div>
        <div
          className="col-stage"
          onClick={(e) => this.props.handleTokenDropClick(4)}
        >
          {hoverToken}
        </div>
        <div
          className="col-stage"
          onClick={(e) => this.props.handleTokenDropClick(5)}
        >
          {hoverToken}
        </div>
        <div
          className="col-stage"
          onClick={(e) => this.props.handleTokenDropClick(6)}
        >
          {hoverToken}
        </div>
      </div>
    );
  }
}
export default StagingArea;
/*  




*/
