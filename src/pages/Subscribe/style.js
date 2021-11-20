import styled from 'styled-components';

const PageStyle = styled.div`
  background-color: #6d7ce4;
  display: flex;
  flex-direction: column;
  align-items: center;
  justify-content: space-between;
`;

const WelcomeText = styled.h1`
  font-family: Roboto, sans-serif;
  color: #ffffff;
  font-size: 26px;
  line-height: 30.47px;
  font-weight: bold;
  text-align: center;
  margin-top: 50px;
`;

const SmallText = styled.h2`
  font-family: Roboto, sans-serif;
  font-size: 18px;
  color: #ffffff;
  font-weight: 300;
  text-align: center;
  margin-top: 21px;
  margin-bottom: 10px;
`;

const SubscribeContainer = styled.div`
  background-color: #ffffff;
  margin: 20px 8px 0px 8px;
  min-width: 358px;
  border-radius: 25px;
  display: flex;
  flex-direction: column;
  align-items: center;
  justify-content: center;
  width: fit-content;
`;

const Img = styled.img`
  width: calc(100vw - 20px);
  border-radius: 25px;
`;

const Button = styled.button`
  background-color: #8c97ea;
  width: calc(100vw - 168px);
  height: 39px;
  text-align: center;
  border: 0;
  border-radius: 10px;
  color: #ffffff;
  font-weight: 500;
  font-size: 24px;
  font-family: Roboto, sans-serif;
  margin-top: 20px;
  margin-bottom: 8px;
`;

export { PageStyle, WelcomeText, SmallText, SubscribeContainer, Img, Button };
