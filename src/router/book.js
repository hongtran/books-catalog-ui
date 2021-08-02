import React from 'react';
import { Route } from 'react-router-dom';

// Configure routes
import BooksList from '../containers/BooksList';
import BooksDetail from '../containers/BookDetail';

const BookRoute = () => (
  <div>
    <Route exact path="/" component={BooksList} />
    <Route path="/books/:ID" component={BooksDetail} />
  </div>
);

export default BookRoute;
