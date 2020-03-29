import React from "react";

const person = props => {
  return (
    <div>
      <h3>
        My name is {props.name} and age is {props.age}
      </h3>
      <p>{props.children}</p>
    </div>
  );
};

export default person;
