import React from "react";
import Engine from "./engineState";
import { connect } from "react-redux";
import Move from "./move";
// import { deleteArr } from "../actions/pageActions";

class Car extends React.Component {
  render() {
    return (
      <div>
        {this.props.marka}
        <Engine
          engine={this.props.engine}
          dispatchEngine={this.props.dispatchEngine}
          stopMoving={this.props.stopMoving}
          id={this.props.id}
        />
        <Move
          changeMove={this.props.changeMove}
          isMove={this.props.isMove}
          engine={this.props.engine}
        />

        {this.props.engine
          ? " Двигатель  заведен | "
          : " Двигатель  не заведен | "}
        {this.props.isMove
          ? " автомобиль двигается |"
          : " автомобиль не двигается |"}
        {this.props.isMove ? " колеса крутятся | " : " колеса не крутятся | "}
        <button onClick={this.handleDelete}> Удалить </button>
      </div>
    );
  }
  handleDelete = e => {
    this.props.deleteArr(this.props.id);
  };
}
// const mapStateToProps = store => {
//   return {
//     stateEngine: store.page.engine,
//     // marka: store.page.marka,
//     move: store.page.move
//   };
// };
// const mapDispatchToProps = dispatch => {
//   return {
//     deleteArr: e => {
//       dispatch(deleteArr(e));
//     }
//   };
// };

export default connect()(Car);
// mapStateToProps,
// mapDispatchToProps
