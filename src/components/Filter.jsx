import React, { useState } from "react";

function Filter(props) {
  const clickFilter = (name) => {
    props.clickFilter(name);
  };

  return (
    <button
      type="button"
      className="btn toggle-btn"
      aria-pressed={props.isPressed}
      onClick={() => clickFilter(props.name)}
    >
      <span className="visually-hidden">Show </span>
      <span>{props.name}</span>
      <span className="visually-hidden"> tasks</span>
    </button>
  );
}

export default Filter;
