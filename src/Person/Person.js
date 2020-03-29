import React from "react";
import "./Person.css";

const person = props => {
  return (
    <div className="Person">
      <h3 onClick={props.click}>
        My name is {props.name} and age is {props.age}
      </h3>
      <input type="text" onChange={props.changed} value={props.name} />
      <p>{props.children}</p>
    </div>
  );
};

export default person;
