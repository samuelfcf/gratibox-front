import styled from 'styled-components';

const PageStyle = styled.div`
  display: flex;
  flex-direction: column;
  justify-content: center;
  align-items: center;
  background-color: #6d7ce4;
  height: 100vh;
`;

const Img = styled.img`
  width: 100%;
  height: 480px;
  position: relative;
`;

const PageBigText = styled.h1`
  font-family: Roboto, sans-serif;
  font-weight: 700;
  font-size: 28px;
  margin-top: 53px;
  color: #ffffff;
`;

const PageSmallText = styled.h3`
  font-family: Roboto, sans-serif;
  font-weight: 300;
  font-size: 18px;
  text-align: center;
  color: #ffffff;
  margin: 45px 40px 0px 40px;
`;

const ButtonSignUp = styled.button`
  position: absolute;
  bottom: 42px;
  width: 202px;
  height: 45px;
  border: 0;
  border-radius: 10px;
  background-color: #8c97ea;
  font-family: Roboto, sans-serif;
  font-weight: 700;
  font-size: 18px;
  color: #ffffff;
`;

const ButtonSignIn = styled.button`
  position: absolute;
  bottom: 8px;
  border: 0;
  background: none;
  font-size: 18px;
  color: #ffffff;
  font-weight: 700;
`;

export {
  PageStyle,
  Img,
  PageBigText,
  PageSmallText,
  ButtonSignIn,
  ButtonSignUp,
};
