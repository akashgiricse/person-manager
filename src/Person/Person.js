import React from "react";
import Radium from "radium";
import "./Person.css";

const person = props => {
  const style = {
    "@media (min-width: 500px)": {
      width: "450px"
    }
  };
  return (
    <div className="Person" style={style}>
      <h3 onClick={props.click}>
        My name is {props.name} and age is {props.age}
      </h3>
      <input type="text" onChange={props.changed} value={props.name} />
      <p>{props.children}</p>
    </div>
  );
};

export default Radium(person);
