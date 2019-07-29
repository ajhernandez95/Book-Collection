import React, { useState, useContext, useEffect } from 'react';
import uuid from 'uuid';
import BookContext from '../../context/books/bookContext';
import AlertContext from '../../context/alert/alertContext';

import Alerts from '../tools/Alerts';

const Form = () => {
  const bookContext = useContext(BookContext);
  const alertContext = useContext(AlertContext);
  const { addBook, currentBook, editBook } = bookContext;
  const { alerts, setAlert } = alertContext;
  const [book, setBook] = useState({
    title: '',
    author: '',
    description: ''
  });

  const { title, author, description } = book;

  useEffect(() => {
    if (currentBook !== null) {
      setBook(currentBook);
    } else {
      setBook({
        title: '',
        author: '',
        description: ''
      });
    }
  }, [bookContext, currentBook]);

  const onChange = e => {
    setBook({ ...book, [e.target.name]: e.target.value });
  };

  const onSubmit = e => {
    e.preventDefault();
    if (title === '' || author === '' || description === '') {
      setAlert({ msg: 'Please fill in all fields', id: uuid.v4() });
      return;
    }

    if (!currentBook) {
      addBook(book);
    } else {
      editBook(book);
    }

    setBook({
      title: '',
      author: '',
      description: ''
    });
  };

  return (
    <form className="text-xl h-full" onSubmit={onSubmit}>
      {alerts.length > 0 && <Alerts />}
      <h1 className="text-2xl mx-auto text-center">
        {currentBook ? 'Edit Book' : 'Add New Book'}
      </h1>
      <div className="flex flex-col">
        <label htmlFor="title">Title</label>
        <input
          type="text"
          name="title"
          placeholder="Enter a new title"
          className="text-gray-900 border border-solid border-gray-500 rounded"
          onChange={onChange}
          value={title}
        />
      </div>
      <div className="flex flex-col">
        <label htmlFor="author">Author</label>
        <input
          type="text"
          name="author"
          placeholder="Enter a new author"
          className="text-gray-900 border border-solid border-gray-500 rounded"
          onChange={onChange}
          value={author}
        />
      </div>
      <div className="flex flex-col">
        <label htmlFor="description">Description</label>
        <input
          type="text"
          name="description"
          placeholder="Enter a new description"
          className="text-gray-900 border border-solid border-gray-500 rounded"
          onChange={onChange}
          value={description}
        />
      </div>
      <input
        type="submit"
        value={currentBook ? 'Update Book' : 'Add New Book'}
        className="w-full bg-gray-800 text-gray-200 my-4 py-2 px-4 rounded md:w-auto"
        style={{ cursor: 'pointer' }}
      />
    </form>
  );
};

export default Form;
