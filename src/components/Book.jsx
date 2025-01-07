import React, { useState } from "react";

function Book(props) {
  const [editing, setEditing] = useState(false);
  const [enteredTitle, setEnteredTitle] = useState("");

  const deleteBook = (id) => {
    props.deleteBook(id);
  };

  const editBook = () => {
    setEditing(!editing);
  };

  const submitHandler = (e, bookId) => {
    e.preventDefault();
    const bookData = {
      title: enteredTitle,
      id: bookId,
    };
    props.editBook(bookData);
    setEnteredTitle("");
    setEditing(false);
  };

  const titleChangeHandler = (event) => {
    setEnteredTitle(event.target.value);
  };

  const editTemplate = (
    <form className="stack-small" onSubmit={(e) => submitHandler(e, props.id)}>
      <div className="form-group">
        <label className="todo-label" htmlFor={props.id}>
          New name for {props.name}
        </label>
        <input
          id={props.id}
          className="todo-text"
          type="text"
          value={enteredTitle}
          onChange={titleChangeHandler}
        />
      </div>
      <div className="btn-group">
        <button type="button" className="btn todo-cancel" onClick={editBook}>
          Cancel
          <span className="visually-hidden">renaming {props.name}</span>
        </button>
        <button type="submit" className="btn btn__primary todo-edit">
          Save
          <span className="visually-hidden">new name for {props.name}</span>
        </button>
      </div>
    </form>
  );

  const previewTemplate = (
    <li className="todo stack-small">
      <div className="c-cb">
        <input
          id={props.id}
          type="checkbox"
          defaultChecked={props.completed}
          onChange={() => props.toggleCompleted(props.id)}
        />
        <label className="todo-label" htmlFor={props.id}>
          {props.name}
        </label>
      </div>
      <div className="btn-group">
        <button type="button" className="btn" onClick={editBook}>
          Edit <span className="visually-hidden">{props.name}</span>
        </button>
        <button
          type="button"
          className="btn btn__danger"
          onClick={() => deleteBook(props.id)}
        >
          Delete <span className="visually-hidden">{props.name}</span>
        </button>
      </div>
    </li>
  );

  return editing ? editTemplate : previewTemplate;
}

export default Book;
