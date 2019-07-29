import React, { Fragment } from 'react';
import { BrowserRouter as Router, Route, Switch } from 'react-router-dom';
import AuthState from './context/auth/AuthState';
import BookState from './context/books/BookState';
import AlertState from './context/alert/AlertState';

import Navbar from './components/layout/Navbar';
import Home from './components/pages/Home';
import About from './components/pages/About';
import Login from './components/pages/Login';
import Register from './components/pages/Register';

function App() {
  return (
    <AuthState>
      <BookState>
        <Fragment>
          <Router>
            <Navbar />
            <Switch>
              <AlertState>
                <Route exact path="/" component={Home} />
                <Route exact path="/about" component={About} />
                <Route exact path="/login" component={Login} />
                <Route exact path="/register" component={Register} />
              </AlertState>
            </Switch>
          </Router>
        </Fragment>
      </BookState>
    </AuthState>
  );
}

export default App;
