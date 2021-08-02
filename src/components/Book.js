import React from 'react';
import PropTypes from 'prop-types';
import {
  BrowserRouter as Router,
  Link,
} from 'react-router-dom';
import '../styles/scss/Book.scss';

const Book = ({ book }) => (
  <div className="Lesson-Panel">
    <div className="title">{book.title}</div>
    <div className="year">{book.year}</div>
    <Link className="book" to={`/books/${book._id}`}>View Book</Link>
  </div>
);

Book.propTypes = {
  book: PropTypes.shape({
    _id: PropTypes.string.isRequired,
    title: PropTypes.string.isRequired,
    description: PropTypes.string.isRequired,
    year: PropTypes.number.isRequired,
  }).isRequired,
};

export default Book;
