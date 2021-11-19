import axios from 'axios';

const BASE_URL = process.env.REACT_APP_BASE_URL;

const signUp = (body) => {
  console.log(BASE_URL);
  const promise = axios.post(`${BASE_URL}/sign-up`, body);
  return promise;
};

export { signUp };
