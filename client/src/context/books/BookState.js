import React, { useReducer } from 'react';

import uuid from 'uuid';

import BookContext from './bookContext';
import booksReducer from './booksReducer';
import {
  ADD_BOOK,
  DELETE_BOOK,
  EDIT_BOOK,
  SET_CURRENT,
  CLEAR_CURRENT,
  GET_BOOKS,
  FILTER_BOOKS,
  CLEAR_FILTER
} from '../types';

const BookState = props => {
  const initialState = {
    bookCollection: [
      {
        id: uuid.v4(),
        title: 'Book 1',
        author: 'Author 1',
        description: 'Description 1'
      },
      {
        id: uuid.v4(),
        title: 'Book 2',
        author: 'Author 2',
        description: 'Description 2'
      },
      {
        id: uuid.v4(),
        title: 'Book 3',
        author: 'Author 3',
        description: 'Description 3'
      }
    ],
    currentBook: null,
    filtered: null
  };

  const [state, dispatch] = useReducer(booksReducer, initialState);

  // Add book
  const addBook = book => {
    book.id = uuid.v4();
    dispatch({ type: ADD_BOOK, payload: book });
  };

  // Edit book
  const editBook = book => {
    dispatch({ type: EDIT_BOOK, payload: book });
    clearCurrentBook();
  };

  // Delete book
  const deleteBook = id => {
    dispatch({ type: DELETE_BOOK, payload: id });
  };

  // Get books
  const getBooks = () => {
    // func here
  };

  // Set current book
  const setCurrentBook = book => {
    dispatch({ type: SET_CURRENT, payload: book });
  };

  // Clear current book
  const clearCurrentBook = book => {
    dispatch({ type: CLEAR_CURRENT });
  };

  // Filter books
  const filter = text => {
    dispatch({ type: FILTER_BOOKS, payload: text });
  };

  // Clear filter
  const clearFilter = () => {
    dispatch({ type: CLEAR_FILTER });
  };

  return (
    <BookContext.Provider
      value={{
        books: state.bookCollection,
        setCurrentBook,
        clearCurrentBook,
        currentBook: state.currentBook,
        addBook,
        deleteBook,
        editBook,
        filter,
        filtered: state.filtered,
        clearFilter
      }}
    >
      {props.children}
    </BookContext.Provider>
  );
};

export default BookState;
