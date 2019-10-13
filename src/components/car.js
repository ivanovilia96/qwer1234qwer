import React from "react";
import Engine from "./engineState";
import { connect } from "react-redux";
import Move from "./move";

class Car extends React.Component {
  render() {
    return (
      <div>
        {this.props.marka}
        <Engine
          engine={this.props.engine}
          startEngine={this.props.startEngine}
          stopEngine={this.props.stopEngine}
          stopAll={this.props.stopAll}
          id={this.props.id}
        />
        <Move
          startMoving={this.props.startMoving}
          stopMoving={this.props.stopMoving}
          isMove={this.props.isMove}
          engine={this.props.engine}
          id={this.props.id}
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

export default connect()(Car);
