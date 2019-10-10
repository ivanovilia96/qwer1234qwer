import React from "react";
import { connect } from "react-redux";
import "./App.css";
// import { setYear } from "./actions/pageActions";
import Car from "./components/car";
import {
  pushArr,
  switchEngine,
  stopAll,
  switchMove,
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
            changeMove={this.props.changeMove}
            dispatchEngine={this.props.dispatchEngine}
            stopMoving={this.props.stopMoving}
            id={value.id}
            marka={value.marka}
            engine={this.props.engineProps}
            isMove={this.props.isMove}
            deleteArr={this.props.deleteArr}
          />
        </div>
      );
    });

    return (
      <div className="App">
        {newArr}

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
    pushArr: e => {
      dispatch(pushArr(e));
    },
    dispatchEngine: e => dispatch(switchEngine(e)),
    stopMoving: () => dispatch(stopAll()),
    changeMove: () => dispatch(switchMove()),
    deleteArr: e => {
      dispatch(deleteArr(e));
    }
  };
};

export default connect(
  mapStateToProps,
  mapDispatchToProps
)(App);
