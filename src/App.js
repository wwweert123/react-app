import NavBar from "./components/navbar";
import "./App.css";
import Counters from "./components/counters";
import React, { Component } from "react";
import { withAlert } from "react-alert";
import NameForm from "./components/form";

class App extends React.Component {
  state = {
    counters: [
      { id: 1, value: 5, item: "Tomatoes" },
      { id: 2, value: 0, item: "Potatoes" },
      { id: 3, value: 0, item: "Eggs" },
      { id: 4, value: 0, item: "Rice" },
    ],
    newValue: "",
  };

  handleIncrement = (counter) => {
    const counters = [...this.state.counters];
    const index = counter.id - 1;
    counters[index].value++;
    this.setState({ counters });
  };

  handleReduction = (counter) => {
    const counters = [...this.state.counters];
    const index = counter.id - 1;
    counters[index].value > 0
      ? counters[index].value--
      : this.props.alert.error("Cannot go lower than zero bro!");
    this.setState({ counters });
  };

  handleReset = () => {
    const counters = this.state.counters.map((c) => {
      c.value = 0;
      return c;
    });
    this.setState({ counters });
  };

  handleDelete = (counterId) => {
    const counters = this.state.counters.filter((c) => c.id != counterId);
    this.setState({ counters });
  };

  handleAdd = () => {
    console.log("added");
    const counter = { ...this.state.counters[0] };
    counter.id =
      this.state.counters.length > 0
        ? this.state.counters[this.state.counters.length - 1].id + 1
        : 1;
    counter.value = 0;
    counter.item = this.state.newValue;
    this.setState((previousState) => ({
      counters: [...previousState.counters, counter],
    }));
  };

  handleChange = (event) => {
    this.setState({ newValue: event.target.value });
  };

  handleSubmit = (event) => {
    this.props.alert.show("New item was added: " + this.state.newValue);
    this.handleAdd();
    event.preventDefault();
  };

  handleDeleteAll = () => {
    const counters = [];
    this.setState({ counters });
  };

  render() {
    return (
      <React.Fragment>
        <NavBar
          totalCounters={this.state.counters.filter((c) => c.value > 0).length}
          onAdd={this.handleAdd}
          onSubmit={this.handleSubmit}
          onChange={this.handleChange}
          newValue={this.state.newValue}
        />
        <main className="container">
          <Counters
            counters={this.state.counters}
            onReset={this.handleReset}
            onIncrement={this.handleIncrement}
            onDelete={this.handleDelete}
            onReduction={this.handleReduction}
            onDeleteAll={this.handleDeleteAll}
          />
        </main>
      </React.Fragment>
    );
  }
}

export default withAlert()(App);
