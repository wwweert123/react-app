import React, { Component } from "react";

class Counter extends React.Component {
  render() {
    return (
      <div>
        <h3>
          <span className="badge bg-light">
            {this.props.counter.item}{" "}
            <span className={this.getBadgeClasses()}>{this.formatCount()}</span>
          </span>
        </h3>
        <button
          onClick={() => this.props.onIncrement(this.props.counter)}
          className="btn btn-secondary btn-sm"
        >
          <i className="bi bi-plus-lg">Add Stuff</i>
        </button>
        <button
          onClick={() => this.props.onReduction(this.props.counter)}
          className="btn btn-success btn-sm m-2"
        >
          <i className="bi bi-dash-lg">Reduction</i>
        </button>
        <button
          onClick={() => this.props.onDelete(this.props.counter.id)}
          className="btn btn-danger btn-sm m-2"
        >
          Delete
        </button>
      </div>
    );
  }

  getBadgeClasses() {
    let classes = "badge m-2 text-light bg-";
    classes += this.props.counter.value === 0 ? "warning" : "primary";
    return classes;
  }

  formatCount() {
    const { value } = this.props.counter;
    return value === 0 ? "Zero" : value;
  }
}

export default Counter;
