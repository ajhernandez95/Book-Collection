import React, { useContext } from 'react';

import BookContext from '../../context/books/bookContext';

const BookItem = book => {
  const bookContext = useContext(BookContext);
  const { deleteBook, setCurrentBook } = bookContext;

  const { id, title, author, description } = book;

  const onDelete = e => {
    const id = e.target.parentElement.parentElement.parentElement.id;
    deleteBook(id);
  };
  return (
    <div className='bg-gray-800 text-gray-200 p-2 my-2' id={id}>
      <p className='break-words'>
        <span>
          <i className='fa fa-book' aria-hidden='true' />
        </span>{' '}
        Title: {title}
      </p>
      <p className='break-words'>
        <span>
          <i className='fa fa-user' aria-hidden='true' />
        </span>{' '}
        Author: {author}
      </p>
      <p className='break-words'>
        <span>
          <i className='fa fa-align-justify' aria-hidden='true' />
        </span>{' '}
        Description: {description}
      </p>
      <div>
        <span>
          <i
            style={{ cursor: 'pointer' }}
            className='fa fa-pencil mr-2'
            aria-hidden='true'
            onClick={() => setCurrentBook(book)}
          />
        </span>
        <span>
          <i
            style={{ cursor: 'pointer' }}
            className='fa fa-trash mr-2'
            aria-hidden='true'
            onClick={onDelete}
          />
        </span>
      </div>
    </div>
  );
};

export default BookItem;
