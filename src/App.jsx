import React, { useState } from "react";
import Book from "./components/Book";
import Form from "./components/Form";
import Filter from "./components/Filter";

const BOOKS = [
  {
    id: "book-1",
    title: "Book 1",
    completed: false,
  },
  {
    id: "book-2",
    title: "Book 2",
    completed: true,
  },
  {
    id: "book-3",
    title: "Book 3",
    completed: false,
  },
];

const FILTERS_OBJ = {
  All: () => true,
  Active: (el) => el.completed == false,
  Completed: (el) => el.completed == true,
};

function App(props) {
  const [books, setBooks] = useState(BOOKS);
  const [bookNumber, setBookNumber] = useState(BOOKS.length);
  const [filter, setFilter] = useState("All");

  const deleteBookHandler = (bookId) => {
    const NEWBOOKS = books.filter((book) => bookId !== book.id);
    setBooks(NEWBOOKS);
    setBookNumber(NEWBOOKS.length);
  };

  const submitHandler = (bookData) => {
    const bookDataObj = {
      ...bookData,
      id: Math.random().toString(),
      completed: false,
    };

    setBooks([bookDataObj, ...books]);
    setBookNumber(bookNumber + 1);
  };

  const editBookHandler = (bookData) => {
    const BOOKSEDITED = books.map((book) => {
      if (book.id == bookData.id) {
        // return { id: bookData.id, title: bookData.title, completed: false };
        return { ...book, title: bookData.title };
      } else {
        return book;
      }
    });

    setBooks(BOOKSEDITED);
  };

  const toggleCompletedHandler = (id) => {
    const BOOKSEDITED = books.map((book) => {
      if (book.id == id) {
        return { ...book, completed: !book.completed };
      } else {
        return book;
      }
    });

    setBooks(BOOKSEDITED);
  };

  const clickFilterHandler = (name) => {
    setFilter(name);
  };

  let filteredBooks = books.filter(FILTERS_OBJ[filter]);

  const filtersList = Object.keys(FILTERS_OBJ).map((item) => (
    <Filter
      name={item}
      isPressed={item === filter}
      clickFilter={clickFilterHandler}
      key={item}
    />
  ));

  return (
    <div className="todoapp stack-large">
      <h1>Book reading list</h1>
      <Form onSubmit={submitHandler} />
      <div className="filters btn-group stack-exception">{filtersList}</div>

      <h2 id="list-heading">
        {bookNumber} {bookNumber == 1 ? "book" : "books"} remaining
      </h2>
      <ul
        role="list"
        className="todo-list stack-large stack-exception"
        aria-labelledby="list-heading"
      >
        {filteredBooks.map((book) => (
          <Book
            name={book.title}
            completed={book.completed}
            key={book.id}
            id={book.id}
            deleteBook={deleteBookHandler}
            editBook={editBookHandler}
            toggleCompleted={toggleCompletedHandler}
          />
        ))}
      </ul>
    </div>
  );
}

export default App;
