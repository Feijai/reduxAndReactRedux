import React, { Component } from "react";
import { nanoid } from "nanoid";
import { connect } from "react-redux";
import { createAddPersonAction } from "../../redux/actions/person";

class Person extends Component {
  addPerson = () => {
    const name = this.nameNode.value;
    const age = this.ageNode.value;
    const personObj = { id: nanoid(), name, age };
    this.props.jiaYiRen(personObj);
  };
  render() {
    return (
      <div>
        <h2>我是Person組件</h2>
        <input
          ref={(c) => (this.nameNode = c)}
          type="text"
          placeholder="輸入名子"
        ></input>
        <input
          ref={(c) => (this.ageNode = c)}
          type="text"
          placeholder="輸入年齡"
        ></input>
        <button onClick={this.addPerson}>add</button>
        <ul>
          {this.props.yiduiren.map((p) => {
            return (
              <li key={p.id}>
                {p.name}--{p.age}
              </li>
            );
          })}
          {console.log(this.props.yiduiren)}
        </ul>
      </div>
    );
  }
}

export default connect((state) => ({ yiduiren: state.ren }), {
  jiaYiRen: createAddPersonAction,
})(Person);
