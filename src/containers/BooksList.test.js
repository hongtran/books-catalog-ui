import React from 'react';
import axios from 'axios';
import {
  act, render, waitForElementToBeRemoved, waitForElement,
} from '@testing-library/react';
import {
    BrowserRouter
  } from 'react-router-dom';
import BooksList from './BooksList';

describe('BooksList', () => {
  const books = [
    {
      _id: '6104a8c0bb33891db473afc6',
      title: 'hong tran',
      description: 'hong tran desc',
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
  beforeEach(() => {
    axios.get = jest.fn(() => Promise.resolve({ data: books }));
  });
  afterAll(() => {
    jest.clearAllMocks();
  });
  it('displays text “…Loading” while fetching gifs', async () => {
    await act(async () => {
      const { getByText } = render(<BrowserRouter><BooksList /></BrowserRouter>);
      getByText('…Loading');
    });
  });

  it('removes text “…Loading” after displaying gifs', async () => {
    await act(async () => {
      const { getByText } = render(<BrowserRouter><BooksList /></BrowserRouter>);
      await waitForElementToBeRemoved(() => getByText('…Loading'));
    });
  });

  it('Should displays three books with match title', async () => {
    await act(async () => {
      const { getByText } = render(<BrowserRouter><BooksList /></BrowserRouter>);
      await waitForElement(() => getByText(books[0].title));
      getByText(books[1].title);
      getByText(books[2].title);
    });
  });
});
