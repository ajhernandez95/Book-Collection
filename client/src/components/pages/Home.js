import React, { useContext, useEffect } from 'react';
import AuthContext from '../../context/auth/authContext';
import BookContainer from '../books/BookContainer';

const Home = () => {
  const authContext = useContext(AuthContext);

  useEffect(() => {
    authContext.loadUser();
  }, []);

  return (
    <div className='flex bg-gray-900 h-screen'>
      <BookContainer />
    </div>
  );
};

export default Home;
