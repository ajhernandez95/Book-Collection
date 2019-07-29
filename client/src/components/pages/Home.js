import React from 'react';
import BookContainer from '../books/BookContainer';

const Home = () => {
  return (
    <div className="flex h-screen bg-gray-900">
      <BookContainer />
    </div>
  );
};

export default Home;
