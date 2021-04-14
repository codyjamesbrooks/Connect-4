import React from "react";

class StagingArea extends React.Component {
  render() {
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
          <div className="hover-space">
            <div className="hover-token"></div>
          </div>
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
          <div className="hover-space">
            <div className="hover-token"></div>
          </div>
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
          <div className="hover-space">
            <div className="hover-token"></div>
          </div>
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
          <div className="hover-space">
            <div className="hover-token"></div>
          </div>
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
          <div className="hover-space">
            <div className="hover-token"></div>
          </div>
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
          <div className="hover-space">
            <div className="hover-token"></div>
          </div>
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
          <div className="hover-space">
            <div className="hover-token"></div>
          </div>
        </div>
      </div>
    );
  }
}
export default StagingArea;
