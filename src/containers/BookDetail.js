import React, { useState, useEffect } from 'react';
import isEmpty from 'lodash/isEmpty';
import BookService from '../services/BookService';
import '../styles/scss/BookDetail.scss';
import PropTypes from 'prop-types';

const createMarkup = markup => ({ __html: markup });

const BooksDetail = (props) => {
  const { match } = props;
  const [book, setBook] = useState(0);
  const [isFetching, setIsFetching] = useState(false);
  useEffect(() => {
    setIsFetching(true);
    BookService.getBookDetail(match.params.ID)
      .then(res => {
        setBook(res);
      })
      .catch(err => {
        setBook({});
        // console.log(err);
      })
      .finally(() => {
        setIsFetching(false);
      });
  }, [match.params.ID]);

  let jsxStr = '';
  if (isFetching) {
    jsxStr = (
      <p>Loading...</p>
    );
  }
  if (!isEmpty(book)) {
    const {
      title,
      description,
      year,
    } = book;
    jsxStr = (
      <div className="book-card">
        <table className="table-book">
          <thead>
            <tr>
              <th>Title</th>
              <th>description</th>
              <th>Year</th>
            </tr>
          </thead>
          <tbody>
            <tr className="row">
              <td>{title}</td>
              <td><p className="book-card--description" dangerouslySetInnerHTML={createMarkup(description)} /></td>
              <td><p>{year}</p></td>
            </tr>
          </tbody>
          <tfoot />
        </table>
      </div>
    );
  }
  return (
    <div className="book-list">
      <div className="books-container">
        {jsxStr}
      </div>
    </div>
  );
};

BooksDetail.propTypes = {
    match: PropTypes.shape({
        params: PropTypes.shape({
          ID: PropTypes.node,
        }).isRequired,
    }).isRequired
};
export default BooksDetail;
