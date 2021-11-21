import styled from 'styled-components';

const PageStyle = styled.div`
  background-color: #6d7ce4;
  display: flex;
  flex-direction: column;
  align-items: center;
  justify-content: space-around;
  height: 100vh;
`;

const WelcomeText = styled.h1`
  font-family: Roboto, sans-serif;
  color: #ffffff;
  font-size: 26px;
  line-height: 30.47px;
  font-weight: bold;
  text-align: center;
  margin-top: 30px;
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

const SubscriptionContainer = styled.div`
  background-color: #ffffff;
  margin: 20px 3px 0px 3px;
  min-width: 358px;
  border-radius: 25px;
  display: flex;
  flex-direction: column;
  justify-content: center;
  width: fit-content;
  padding-bottom: 10px;
`;

const Img = styled.img`
  width: calc(100vw - 20px);
  border-radius: 25px;
`;

const Button = styled.button`
  background-color: #8c97ea;
  width: calc(100vw - 168px);
  height: 56px;
  text-align: center;
  border: 0;
  border-radius: 10px;
  color: #ffffff;
  font-weight: 500;
  font-size: 22px;
  font-family: Roboto, sans-serif;
  margin-top: 20px;
  margin-bottom: 8px;
`;

const SubscriptionInfo = styled.div`
  display: flex;
  flex-direction: column;
  gap: 15px;
  margin-left: 20px;
`;

const DeliveryDatesArea = styled.div`
  display: flex;
  margin-left: 50px;
  flex-direction: column;
  margin-top: 5px;
`;

const InfoTitle = styled.span`
  font-family: Roboto, sans-serif;
  font-size: 18px;
  line-height: 21px;
  color: #4d65a8;
  font-weight: 700;
`;

const Infos = styled(InfoTitle)`
  color: #e63c80;
`;

const ProductsArea = styled.div`
  display: flex;
  justify-content: space-around;
  margin-left: -20px;
  color: #e63c80;
  font-weight: 500;
`;

export {
  PageStyle,
  WelcomeText,
  SmallText,
  SubscriptionContainer,
  Img,
  Button,
  SubscriptionInfo,
  DeliveryDatesArea,
  InfoTitle,
  Infos,
  ProductsArea,
};
