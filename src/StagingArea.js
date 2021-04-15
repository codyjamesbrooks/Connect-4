import React from "react";

class StagingArea extends React.Component {
  render() {
    let hoverToken =
      this.props.currentTurn === "Red" ? (
        <div className="hover-space">
          <div className="hover-token-red"></div>
        </div>
      ) : (
        <div className="hover-space">
          <div className="hover-token-yellow"></div>
        </div>
      );

    return (
      <div id="staging-area">
        <div className="col-stage">
          <button
            id="col-1-button"
            value={0}
            onClick={(e) => this.props.handleColumnButtonClick(e)}
          >
            {" "}
            1{" "}
          </button>
          {hoverToken}
        </div>
        <div className="col-stage">
          <button
            id="col-2-button"
            value={1}
            onClick={(e) => this.props.handleColumnButtonClick(e)}
          >
            {" "}
            2{" "}
          </button>
          {hoverToken}
        </div>
        <div className="col-stage">
          <button
            id="col-3-button"
            value={2}
            onClick={(e) => this.props.handleColumnButtonClick(e)}
          >
            {" "}
            3{" "}
          </button>
          {hoverToken}
        </div>
        <div className="col-stage">
          <button
            id="col-4-button"
            value={3}
            onClick={(e) => this.props.handleColumnButtonClick(e)}
          >
            {" "}
            4{" "}
          </button>
          {hoverToken}
        </div>
        <div className="col-stage">
          <button
            id="col-5-button"
            value={4}
            onClick={(e) => this.props.handleColumnButtonClick(e)}
          >
            {" "}
            5{" "}
          </button>
          {hoverToken}
        </div>
        <div className="col-stage">
          <button
            id="col-6-button"
            value={5}
            onClick={(e) => this.props.handleColumnButtonClick(e)}
          >
            {" "}
            6{" "}
          </button>
          {hoverToken}
        </div>
        <div className="col-stage">
          <button
            id="col-7-button"
            value={6}
            onClick={(e) => this.props.handleColumnButtonClick(e)}
          >
            {" "}
            7{" "}
          </button>
          {hoverToken}
        </div>
      </div>
    );
  }
}
export default StagingArea;
/*  




*/
