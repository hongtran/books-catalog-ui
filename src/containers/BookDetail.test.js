import React from 'react';
import { render, waitForElement } from '@testing-library/react';
import axios from 'axios';
import TestRenderer from 'react-test-renderer';
import BookDetail from './BookDetail';

const { act } = TestRenderer;
// import {act} from 'react-dom/test-utils';

const renderComponent = (props = {}) => render(
  <BookDetail {...props} />,
);
describe('<BookDetail />', () => {
  let book;
  beforeEach(() => {
    book = {
      _id: '6104a8c0bb33891db473afc6',
      title: 'title 1',
      description: 'description 1',
      year: '2021',
    };
    axios.get = jest.fn(() => Promise.resolve({ data: book }));
  });
  afterAll(() => {
    jest.clearAllMocks();
  });
  it('should render loading text', async () => {
    await act(async () => {
      const { getByText } = renderComponent({ match: { params: { ID: '6104a8c0bb33891db473afc6' } } });
      getByText('Loading...');
    });
  });

  it('should render title, description, year of book', async () => {
    await act(async () => {
      const { getByText } = renderComponent({ match: { params: { ID: '6104a8c0bb33891db473afc6' } } });
      await waitForElement(() => getByText(book.title));
      await waitForElement(() => getByText(book.description));
      await waitForElement(() => getByText(book.year));
    });
  });
});
