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

  const token = localStorage.getItem('token');

  if (!token) {
    console.error('Token not found in localStorage');
    return false;
  }

  try {
    const response = await instance.get(`http://localhost:3000/api/books/${id}`,{
      method: 'GET',
      headers: {
        'Content-Type': 'application/json',
        'Authorization': `${token}`,
      }
    });
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

  const token = localStorage.getItem('token');

  if (!token) {
    console.error('Token not found in localStorage');
    return false;
  }

  try {
    const response = await instance.get(`http://localhost:3000/api/authors/${id}`,{
      method: 'GET',
      headers: {
        'Content-Type': 'application/json',
        'Authorization': `${token}`,
      }
    });
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

export const loginUser = async (userData) => {
  try {
    const response = await instance.post('/users/login', userData);
    return response.data;
  } catch (error) {
    console.error('Error logging in:', error.response.data);
    throw error.response.data;
  }
}

export const verifyToken = async () => {
  const token = localStorage.getItem('token');

  if (!token) {
    console.error('Token not found in localStorage');
    return false;
  }

  try {
    const response = await fetch('http://localhost:3000/api/users/verifytoken', {
      method: 'POST',
      headers: {
        'Content-Type': 'application/json',
        'Authorization': `Bearer ${token}`,
      },
      body: JSON.stringify({ token }),
    });

    if (!response.ok) {
      // refreshToken();
      throw new Error('Token verification failed');
    }

    const verificationData = await response.json();
    console.log('Token verification response:', verificationData);
    return true;
  } catch (error) {
    console.error('Token verification error:', error.message);
    return false;
  }
};

