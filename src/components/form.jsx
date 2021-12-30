import React, { Component } from "react";

class NameForm extends React.Component {
  render() {
    return (
      <div className="input-group mb-3">
        <form onSubmit={this.props.onSubmit} className="form-inline">
          <span className="input-group-text" id="basic-addon1">
            +
          </span>
          <input
            type="text"
            className="form-control"
            placeholder="What Food?"
            //value={this.props.newValue}
            onChange={this.props.onChange}
          />
          <button type="submit" className="btn btn-primary mb-2 m-2">
            Submit
          </button>
        </form>
      </div>
    );
  }
}

export default NameForm;
