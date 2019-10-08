import React from "react";
import { connect } from "react-redux";
import "./App.css";
import { setYear } from "./actions/pageActions";
import Car from "./components/car";
import { pushArr } from "./actions/pageActions";

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
    var now = new Date();

    var milliSeconds = now.getTime();

    const newArr = this.props.arrFor.map(value => {
      return (
        <div key={value.id}>
          <Car
            id={value.id}
            marka={value.marka}
            engineP={this.props.allProps.arrCar.engine}
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
  return { arrFor: store.page.arrCar, allProps: store.page };
};
const mapDispatchToProps = dispatch => {
  return {
    pushArr: e => {
      dispatch(pushArr(e));
    }
  };
};

export default connect(
  mapStateToProps,
  mapDispatchToProps
)(App);
