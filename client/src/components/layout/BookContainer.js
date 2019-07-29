import React, { useContext, useRef } from 'react';
import BookItem from '../layout/BookItem';
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
    <div className='flex flex-col w-3/4 m-auto bg-blue-800 text-gray-200 md:w-1/2 md:flex-row'>
      <div className='text-gray-200 p-4 md:w-1/2'>
        <Form />
      </div>
      <div className='p-4 md:w-1/2'>
        <div className='flex flex-col mb-4'>
          <label htmlFor='filter'>Filter</label>
          <input
            type='text'
            name='filter'
            placeholder='Filter books...'
            className='text-gray-800 h-10'
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
