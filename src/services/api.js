import axios from 'axios';

const BASE_URL = process.env.REACT_APP_BASE_URL;

const signUp = (body) => {
  const promise = axios.post(`${BASE_URL}/sign-up`, body);
  return promise;
};

const signIn = (body) => {
  const promise = axios.post(`${BASE_URL}/sign-in`, body);
  return promise;
};

export { signUp, signIn };
