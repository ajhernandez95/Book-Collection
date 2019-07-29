import React, { useContext, useRef } from 'react';
import BookItem from './BookItem';
import BookContext from '../../context/books/bookContext';

import Form from '../tools/Form';

const BookContainer = () => {
  const bookContext = useContext(BookContext);
  const { books, filter, clearFilter, filtered } = bookContext;
  const text = useRef('');

  const onChange = () => {
    if (text.current.value) {
      filter(text.current.value);
    } else {
      clearFilter();
    }
  };
  return (
    <div className="flex flex-col w-3/4 m-auto bg-white rounded md:w-1/2 md:flex-row">
      <div className=" p-4 md:w-1/2">
        <Form />
      </div>
      <div className="p-4 md:w-1/2">
        <div className="flex flex-col mb-4 text-xl">
          <label htmlFor="filter">Filter</label>
          <input
            type="text"
            name="filter"
            placeholder="Filter books..."
            className="text-gray-900 border border-solid border-gray-500 rounded"
            onChange={onChange}
            ref={text}
          />
        </div>
        {filtered !== null
          ? filtered.map(book => (
              <BookItem
                key={book.id}
                id={book.id}
                title={book.title}
                author={book.author}
                description={book.description}
              />
            ))
          : books.map(book => (
              <BookItem
                key={book.id}
                id={book.id}
                title={book.title}
                author={book.author}
                description={book.description}
              />
            ))}
      </div>
    </div>
  );
};

export default BookContainer;
