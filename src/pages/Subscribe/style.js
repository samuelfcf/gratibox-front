import styled from 'styled-components';

const PageStyle = styled.div`
  background-color: #6d7ce4;
  display: flex;
  flex-direction: column;
  align-items: center;
  justify-content: space-between;
  min-height: 100vh;
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
  height: 100%;
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

const Div = styled.div`
  width: calc(100vw - 50px);
  margin-bottom: 10px;
`;

const Details = styled.div`
  display: flex;
  justify-content: space-between;
`;

const Label = styled.label`
  margin-left: 5px;
`;

const Input = styled.input`
  height: 30px;
`;

const CheckBox = styled.div`
  display: flex;
  align-items: center;
  margin-left: 13px;
`;

const CheckBoxesDiv = styled.div`
  display: flex;
  justify-content: space-between;
`;

const Form = styled.form`
  display: flex;
  flex-direction: column;
  gap: 5px;
  margin-bottom: 10px;
`;

const InputForm = styled.input`
  width: 290px;
  height: 44px;
  border: 0;
  border-radius: 5px;
  background-color: rgba(224, 209, 237, 0.62);
  color: #4d65a8;
  font-size: 18px;
  font-weight: bold;
  font-family: Roboto, sans-serif;
  padding-left: 10px;

  &::placeholder {
    color: #4d65a8;
    font-size: 18px;
    font-weight: bold;
    font-family: Roboto, sans-serif;
  }
`;

const CityStateInputs = styled(InputForm)`
  width: 135px;
`;

const CityStateContainer = styled.div`
  display: flex;
  gap: 17px;
`;

export {
  PageStyle,
  WelcomeText,
  SmallText,
  SubscribeContainer,
  Img,
  Button,
  Div,
  Details,
  Label,
  Input,
  CheckBox,
  CheckBoxesDiv,
  Form,
  InputForm,
  CityStateInputs,
  CityStateContainer,
};
