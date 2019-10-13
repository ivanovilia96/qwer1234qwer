import React from "react";
import { connect } from "react-redux";
import "./App.css";
import Car from "./components/car";
import {
  pushArr,
  startEngine,
  stopAll,
  startMoving,
  stopMoving,
  stopEngine,
  deleteArr
} from "./actions/pageActions";

class App extends React.Component {
  state = { accept: false, id: 0, selectValue: "bmv" };

  handleAccept = () => {
    this.setState({ accept: !this.state.accept });
  };
  handkeAdd = () => {
    this.props.pushArr(this.state.selectValue);
  };
  handkeSelect = e => {
    this.setState({ selectValue: e.currentTarget.value });
  };
  render() {
    const newArr = this.props.arrFor.map(value => {
      return (
        <div key={value.id}>
          <Car
            startMoving={this.props.startMoving}
            stopMoving={this.props.stopMoving}
            startEngine={this.props.startEngine}
            stopEngine={this.props.stopEngine}
            stopAll={this.props.stopAll}
            id={value.id}
            marka={value.marka}
            engine={value.engine}
            isMove={value.move}
            deleteArr={this.props.deleteArr}
          />
        </div>
      );
    });

    return (
      <div className="mainDiv">
        {newArr.length ? newArr : "Ваш автопарк пуст,пока что..."} <br />
        <a href="https://yandex.ru/">Согласится с правилами сервиса </a>
        <input type="checkbox" onClick={this.handleAccept} />
        <select value={this.state.selectValue} onChange={this.handkeSelect}>
          <option value="bmv">bmv</option>
          <option value="audi">audi</option>
          <option value="mersedes">mersedes</option>
        </select>
        <button
          onClick={this.handkeAdd}
          disabled={this.state.accept ? false : true}
        >
          Add a car
        </button>
        <br />
      </div>
    );
  }
}
const mapStateToProps = store => {
  return {
    arrFor: store.page.arrCar,
    allProps: store.page,
    isMove: store.page.move,
    engineProps: store.page.engine
  };
};
const mapDispatchToProps = dispatch => {
  return {
    startMoving: e => {
      dispatch(startMoving(e));
    },
    stopMoving: e => {
      dispatch(stopMoving(e));
    },
    pushArr: e => {
      dispatch(pushArr(e));
    },
    startEngine: e => dispatch(startEngine(e)),
    stopEngine: e => dispatch(stopEngine(e)),
    stopAll: e => dispatch(stopAll(e)),
    deleteArr: e => {
      dispatch(deleteArr(e));
    }
  };
};

export default connect(
  mapStateToProps,
  mapDispatchToProps
)(App);
