import React from 'react';
import axios from 'axios';
import fecthMock from 'fetch-mock';
import BookService from './BookService';

describe('<BookService />', () => {
  const books = [
    {
      _id: '6104a8c0bb33891db473afc6',
      title: 'hong tran',
      description: 'hong xxx',
      year: 2021,
    },
    {
      _id: '6104a8dabb33891db473afc7',
      title: 'book 1',
      description: 'desc book 1',
      year: 2021,
    },
    {
      _id: '6104a8e3bb33891db473afc8',
      title: 'book 2',
      description: 'desc book 2',
      year: 2020,
    },
  ];
  it('Test get all books', () => {
    fecthMock.get('*', books);
    BookService.getBookList().then(response => {
      expect(response.data).toEqual(books);
    });
    fecthMock.restore();
  });

  it('Test get one book detail', () => {
    fecthMock.get('*', books[0]);
    BookService.getBookDetail().then(response => {
      expect(response.data).toEqual(books[0]);
    });
    fecthMock.restore();
  });
});
