import React, { useState } from "react";

function Form(props) {
  const [enteredTitle, setEnteredTitle] = useState("");

  const submitHandler = (e) => {
    e.preventDefault();
    const bookData = {
      title: enteredTitle,
    };
    props.onSubmit(bookData);
    setEnteredTitle("");
  };

  const titleChangeHandler = (event) => {
    setEnteredTitle(event.target.value);
  };

  return (
    <form onSubmit={submitHandler}>
      <h2 className="label-wrapper">
        <label htmlFor="new-todo-input" className="label__lg">
          Books to read
        </label>
      </h2>
      <input
        type="text"
        id="new-todo-input"
        className="input input__lg"
        name="text"
        autoComplete="off"
        value={enteredTitle}
        onChange={titleChangeHandler}
      />
      <button type="submit" className="btn btn__primary btn__lg">
        Add
      </button>
    </form>
  );
}

export default Form;
