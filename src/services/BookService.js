import axios from 'axios';

export default {
  async getBookList() {
    try {
      const response = await axios.get('http://localhost:4040/api/books');
      return response.data;
    } catch (error) {
      return null;
    }
  },

  async getBookDetail(id) {
    try {
      const response = await axios.get(`http://localhost:4040/api/books/${id}`);
      return response.data;
    } catch (error) {
      throw error;
    }
  },
};
