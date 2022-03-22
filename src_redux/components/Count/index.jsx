import React, { Component } from "react";
import store from "../../redux/store";
import {
  createIncrementAction,
  createDecrementAction,
  createDecrementAsyncAction,
} from "../../redux/countAction";

export default class index extends Component {
  increment = () => {
    const { value } = this.selectNumber;
    store.dispatch(createIncrementAction(value));
  };
  decrement = () => {
    const { value } = this.selectNumber;
    store.dispatch(createDecrementAction(value));
  };
  incrementIfOdd = () => {
    const { value } = this.selectNumber;
    const count = store.getState();
    if (count % 2 !== 0)
      store.dispatch({ type: "increment", data: parseInt(value) });
  };
  incrementAsync = () => {
    const { value } = this.selectNumber;
    store.dispatch(createDecrementAsyncAction(value, 500));
    console.log("1");
  };

  componentDidMount() {
    store.subscribe(() => {
      this.setState({});
    });
  }

  render() {
    return (
      <div>
        <h1>當前求和為: {store.getState()}</h1>
        <select ref={(c) => (this.selectNumber = c)} name="" id="">
          <option value="1">1</option>
          <option value="2">2</option>
          <option value="3">3</option>
        </select>
        &nbsp;
        <button onClick={this.increment}>+</button>&nbsp;
        <button onClick={this.decrement}>-</button>&nbsp;
        <button onClick={this.incrementIfOdd}>當前求和為奇數再加</button>&nbsp;
        <button onClick={this.incrementAsync}>異步加</button>&nbsp;
      </div>
    );
  }
}
