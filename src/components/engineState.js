import React from "react";
import { connect } from "react-redux";
// import { switchEngine, stopAll } from "../actions/pageActions";

class Engine extends React.Component {
  handleChangeEngine = () => {
    // alert(this.props.id + "vash id from engineState");
    this.props.dispatchEngine(this.props.id);
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

// const mapDispatchToProps = dispatch => {
//   return {
//     dispatchEngine: () => dispatch(switchEngine()),
//     stopMoving: () => dispatch(stopAll())
//   };
// };
export default connect()(Engine);

// mapDispatchToProps
