import React, { Component } from "react";
import NameForm from "./form";

class NavBar extends React.Component {
  render() {
    return (
      <nav className="navbar navbar-light bg-light">
        <div className="container-fluid">
          <a className="navbar-brand" href="#">
            Shopping List{" "}
            <span className="badge badge-pill badge-secondary">
              {this.props.totalCounters}
            </span>
            <NameForm
              onSubmit={this.props.onSubmit}
              onChange={this.props.onChange}
              newValue={this.props.newValue}
            />
          </a>
        </div>
      </nav>
    );
  }
}

export default NavBar;
