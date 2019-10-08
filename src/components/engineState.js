import React from "react";
import { connect } from "react-redux";
import { switchEngine, stopAll } from "../actions/pageActions";

class Engine extends React.Component {
  handleChangeEngine = () => {
    this.props.dispatchEngine();
    this.props.stopMoving();
  };
  render() {
    return (
      <div>
        <button onClick={this.handleChangeEngine}>
          {this.props.engine ? "Заглушить двигатель" : "Завести двигатель"}
        </button>
      </div>
    );
  }
}
const mapStateToProps = store => {
  return { engine: store.page.engine };
};
const mapDispatchToProps = dispatch => {
  return {
    dispatchEngine: () => dispatch(switchEngine()),
    stopMoving: () => dispatch(stopAll())
  };
};
export default connect(
  mapStateToProps,
  mapDispatchToProps
)(Engine);
