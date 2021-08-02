import React from 'react';
import { render } from '@testing-library/react';
import {
    BrowserRouter
  } from 'react-router-dom';
import Book from './Book';

describe('<Book />', () => {
  const book = {
    _id: '6104a8c0bb33891db473afc6',
    title: 'title 1',
    description: 'description 1',
    year: 2021,
  };

  it('should render book info', () => {
    const { getByText } = render(<BrowserRouter><Book book={book} /></BrowserRouter>);
    getByText('title 1');
    getByText('2021');
  });
});
