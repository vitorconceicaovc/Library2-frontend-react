import axios from "axios";

const instance = axios.create({
    baseURL: 'http://localhost:3000/api',
});

export const getBooks = async () => {
    try {
      const response = await instance.get('/books')
      return response.data
    } catch (error) {
      console.error('Error fetching books:', error)
      throw error;
    }
};

export const getBookById = async (id) => {
    try {
      const response = await instance.get(`/books/${id}`);
      return response.data;
    } catch (error) {
      console.error(`Error fetching book with ID ${id}:`, error);
      throw error;
    }
};

export const getBooksInstances = async () => {
    try {
      const response = await instance.get('/booksinstances')
      return response.data
    } catch (error) {
      console.error('Error fetching booksinstances:', error)
      throw error;
    }
};

export const getAuthors = async () => {
    try {
        const response = await instance.get('./authors')
        return response.data
    } catch (error) {
        console.error('Error fetching authors:', error)
        throw error;
    }
}

export const getAuthorById = async (id) => {
  try {
    const response = await instance.get(`/authors/${id}`);
    return response.data;
  } catch (error) {
    console.error(`Error fetching book with ID ${id}:`, error);
    throw error;
  }
};

export const registerUser = async (userData) => {
  try {
    const response = await instance.post('/users/register', userData);
    return response.data;
  } catch (error) {
    console.error('Error registering user:', error.response.data);
    throw error.response.data;
  }
};