import React from "react";
import { connect } from "react-redux";

class Move extends React.Component {
  handleStartMoving = () => {
    this.props.startMoving(this.props.id);
  };
  handleStopMoving = () => {
    this.props.stopMoving(this.props.id);
  };
  render() {
    return (
      <div>
        <button
          onClick={
            this.props.isMove ? this.handleStopMoving : this.handleStartMoving
          }
          disabled={this.props.engine ? false : true}
        >
          {this.props.isMove ? " остановиться" : "начать движение"}
        </button>
      </div>
    );
  }
}

export default connect()(Move);
