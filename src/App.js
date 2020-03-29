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

  switchNameHandler = () => {
    this.setState({
      person: [
        { name: "vishal", age: 22 },
        { name: "vish", age: 58 }
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
        />
        <Person
          name={this.state.person[1].name}
          age={this.state.person[1].age}
        />
      </div>
    );
  }
}

export default App;
