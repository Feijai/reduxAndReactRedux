import {
  createIncrementAction,
  createDecrementAction,
  createDecrementAsyncAction,
} from "../../redux/actions/count";
import { connect } from "react-redux";

import React, { Component } from "react";

class Count extends Component {
  increment = () => {
    const { value } = this.selectNumber;
    this.props.jia(parseInt(value));
  };
  decrement = () => {
    const { value } = this.selectNumber;
    this.props.jian(parseInt(value));
  };
  incrementIfOdd = () => {
    const { value } = this.selectNumber;
    if (this.props.count % 2 !== 0) {
      this.props.jia(parseInt(value));
    }
  };
  incrementAsync = () => {
    const { value } = this.selectNumber;
    this.props.asyncjia(parseInt(value), 500);
  };

  render() {
    return (
      <div>
        <h1>我是Count組件</h1>
        <h4>當前求和為: {this.props.count}</h4>
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

// 狀態
// function mapStateToProps(state) {
//   return {
//     count: state,
//   };
// }
//方法
// function mapDispatchtoProps(dispatch) {
//   return {
//     jia: (number) => {
//       dispatch(createIncrementAction(number));
//     },
//     jian: (number) => {
//       dispatch(createDecrementAction(number));
//     },
//     asyncjia: (number, time) => {
//       dispatch(createDecrementAsyncAction(number, time));
//     },
//   };
// }

// export default connect(mapStateToProps, mapDispatchtoProps)(CountUI);
export default connect((state) => ({ count: state.he }), {
  jia: createIncrementAction,
  jian: createDecrementAction,
  asyncjia: createDecrementAsyncAction,
})(Count);
