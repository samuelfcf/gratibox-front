import axios from 'axios';

const BASE_URL = process.env.REACT_APP_BASE_URL;

const getConfig = (token) => {
  return {
    headers: {
      Authorization: `Bearer ${token}`,
    },
  };
};

const signUp = (body) => {
  const promise = axios.post(`${BASE_URL}/sign-up`, body);
  return promise;
};

const signIn = (body) => {
  const promise = axios.post(`${BASE_URL}/sign-in`, body);
  return promise;
};

const postSubscribe = (body, token, id) => {
  const promise = axios.post(`${BASE_URL}/sub/${id}`, body, getConfig(token));
  return promise;
};

const getSubscriptionInfo = (token, id) => {
  const promise = axios.get(`${BASE_URL}/sub/${id}`, getConfig(token));
  return promise;
};

export { signUp, signIn, postSubscribe, getSubscriptionInfo };
