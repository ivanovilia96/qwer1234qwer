import React from "react";
import { connect } from "react-redux";

class Engine extends React.Component {
  handleStartEngine = () => {
    this.props.startEngine(this.props.id);
    this.props.stopAll(this.props.id);
  };
  handleStopEngine = () => {
    this.props.stopEngine(this.props.id);
    this.props.stopAll(this.props.id);
  };
  render() {
    return (
      <div>
        <button
          onClick={
            this.props.engine ? this.handleStopEngine : this.handleStartEngine
          }
        >
          {this.props.engine ? "Заглушить двигатель" : "Завести двигатель"}
        </button>
      </div>
    );
  }
}

export default connect()(Engine);
