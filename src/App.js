import React, { useState } from "react";
import "./App.css";
import Person from "./Person/Person";

const app = props => {
  const [personState, setPersonState] = useState({
    person: [
      { name: "akah", age: 34 },
      { name: "giri", age: 22 }
    ]
  });

  const [otherState, setOtherState] = useState("akashgiricse");

  console.log(personState, otherState);

  const switchNameHandler = () => {
    setPersonState({
      person: [
        { name: "vishal", age: 22 },
        { name: "vish", age: 58 }
      ]
    });
  };

  return (
    <div className="App">
      <h1>Welcome to react app</h1>
      <button onClick={switchNameHandler}>Switch Name</button>
      <Person
        name={personState.person[0].name}
        age={personState.person[0].age}
      />
      <Person
        name={personState.person[1].name}
        age={personState.person[1].age}
      />
    </div>
  );
};

export default app;
