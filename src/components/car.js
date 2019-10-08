import React from "react";
import Engine from "./engineState";
import { connect } from "react-redux";
import Move from "./move";
import { deleteArr } from "../actions/pageActions";

class Car extends React.Component {
  render() {
    return (
      <div>
        {this.props.marka}
        <Engine engineP={this.props.engineP} />
        <Move />

        {this.props.stateEngine
          ? " Двигатель  заведен | "
          : " Двигатель  не заведен | "}
        {this.props.move
          ? " автомобиль двигается |"
          : " автомобиль не двигается |"}
        {this.props.move ? " колеса крутятся | " : " колеса не крутятся | "}
        <button onClick={this.handleDelete}> Удалить </button>
      </div>
    );
  }
  handleDelete = e => {
    this.props.deleteArr(this.props.id);
  };
}
const mapStateToProps = store => {
  return {
    stateEngine: store.page.engine,
    // marka: store.page.marka,
    move: store.page.move
  };
};
const mapDispatchToProps = dispatch => {
  return {
    deleteArr: e => {
      dispatch(deleteArr(e));
    }
  };
};

export default connect(
  mapStateToProps,
  mapDispatchToProps
)(Car);
