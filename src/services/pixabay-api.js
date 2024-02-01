import axios from 'axios';

axios.defaults.baseURL = 'https://pixabay.com/api/';
const API_KEY = '42127192-1bc330ff8ce7b4294f46d472f';

export const getImages = async (query, page) => {
  const response = await axios.get(
    `?key=${API_KEY}&q=${query}&image_type=photo&orientation=horizontal&safesearch=true&page=${page}&per_page=12`
  );
  if (response.status === 200) {
    const data = response.data;
    return data;
  } else {
    return Promise.reject(new Error(`Немає покемонів з іменами`));
  }
};
