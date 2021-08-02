// import { connect } from 'react-redux';
// import PropTypes from 'prop-types';
import Book from '../components/Book';
import '../styles/scss/BooksList.scss';
import BookService from '../services/BookService';
import React, { useState, useEffect } from 'react';

const BooksList = () => {
  const [books, setBooks] = useState([]);
  const [isFetching, setIsFetching] = useState(false);
  useEffect(() => {
    setIsFetching(true);
    BookService.getBookList()
      .then(res => {
        setBooks(res);
      })
      .catch(err => {
        setBooks([]);
        console.log(err);
      })
      .finally(() => {
        setIsFetching(false);
      });
  }, []);
  return (
    <div className="book-list">
      <div className="books-container">
        {books.length > 0 ? books.map(book => (
          <Book key={book._id} book={book} />
        )) : <p>…Loading</p>}
      </div>
    </div>
  );
};

BooksList.propTypes = {
};

// const mapStateToProps = state => ({
// });

// const mapDispatchToProps = dispatch => ({
// });

// export default connect(mapStateToProps, mapDispatchToProps, null)(BooksList);
export default BooksList;
