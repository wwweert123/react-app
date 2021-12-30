import React, { Component } from "react";
import Counter from "./counter";

class Counters extends React.Component {
  render() {
    return (
      <div>
        <button
          onClick={this.props.onReset}
          className="btn btn-primary btn-sm m-2"
        >
          Reset
        </button>
        <button
          onClick={this.props.onDeleteAll}
          className="btn btn-warning btn-sm m-2"
        >
          Delete All
        </button>
        {this.props.counters.map((counter) => (
          <Counter
            key={counter.id}
            onDelete={this.props.onDelete}
            counter={counter}
            onIncrement={this.props.onIncrement}
            onReduction={this.props.onReduction}
          />
        ))}
      </div>
    );
  }
}

export default Counters;
