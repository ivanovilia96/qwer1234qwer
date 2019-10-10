import React from "react";
import { connect } from "react-redux";
// import { switchMove } from "../actions/pageActions";

class Move extends React.Component {
  handleSwitchMove = () => {
    this.props.changeMove();
  };
  render() {
    return (
      <div>
        <button
          onClick={this.handleSwitchMove}
          disabled={this.props.engine ? false : true}
        >
          {this.props.isMove ? " остановиться" : "начать движение"}
        </button>
      </div>
    );
  }
}
// const mapStateToProps = store => {
//   return {
//     isMove: store.page.move,
//     engine: store.page.engine
//   };
// };
// const mapDispatchToprops = dispatch => {
//   return { changeMove: () => dispatch(switchMove()) };
// };
export default connect()(Move);
// mapStateToProps,
// mapDispatchToprops
