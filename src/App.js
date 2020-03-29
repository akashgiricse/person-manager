import React, { Component } from "react";
import "./App.css";
import Person from "./Person/Person";

class App extends Component {
  state = {
    person: [
      { name: "akah", age: 34 },
      { name: "giri", age: 22 }
    ]
  };

  switchNameHandler = newName => {
    this.setState({
      person: [
        { name: newName, age: 22 },
        { name: "vish", age: 58 }
      ]
    });
  };

  changeNameHandler = event => {
    this.setState({
      person: [
        { name: "Akash", age: 22 },
        { name: event.target.value, age: 58 }
      ]
    });
  };

  render() {
    return (
      <div className="App">
        <h1>Welcome to react app</h1>
        <button onClick={this.switchNameHandler}>Switch Name</button>
        <Person
          name={this.state.person[0].name}
          age={this.state.person[0].age}
          // one way of passing param to a function inside a class
          click={this.switchNameHandler.bind(this, "NewBindVishal")}
        />
        <Person
          name={this.state.person[1].name}
          age={this.state.person[1].age}
          // other way of passing param to a function inside a class
          click={() => this.switchNameHandler("NewVishal")}
          changed={this.changeNameHandler}
        />
      </div>
    );
  }
}

export default App;
