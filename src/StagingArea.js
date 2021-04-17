import React from "react";
import { v4 as uuidv4 } from "uuid";
// import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
// import { faHandPointDown } from "@fortawesome/free-solid-svg-icons";

class StagingArea extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
      hoverToken: false,
    };
  }

  render() {
    let hoverToken =
      this.props.currentTurn === "Red" ? (
        <div className="hover-token-red"></div>
      ) : (
        <div className="hover-token-yellow"></div>
      );

    let stagingContent = [];
    let col;
    for (let i = 0; i <= 6; i++) {
      col = (
        <div
          key={uuidv4()}
          className="col-stage"
          onClick={(e) => this.props.handleTokenDropClick(i)}
        >
          {hoverToken}
        </div>
      );
      stagingContent.push(col);
    }

    return <div id="staging-area">{stagingContent.map((e) => e)}</div>;
  }
}
export default StagingArea;
