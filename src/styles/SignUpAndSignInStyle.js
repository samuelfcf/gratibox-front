import styled from 'styled-components';

const PageStyle = styled.div`
  height: 100vh;
  background-color: #6d7ce4;
  display: flex;
  flex-direction: column;
  align-items: center;
`;

const Text = styled.h1`
  font-size: 28px;
  font-weight: 700;
  color: #ffffff;
  margin-top: 101px;
  font-family: 'Roboto', sans-serif;
`;

const Form = styled.form`
  margin-top: 43px;
  display: flex;
  flex-direction: column;
  align-items: center;
  gap: 6px;
`;

const Input = styled.input`
  width: calc(100vw - 100px);
  height: 64px;
  border: 1px solid #604848;
  background: #ffffff;
  border-radius: 10px;
  padding-left: 22px;
  border: 1px solid #604848;
  font-size: 22px;

  &::placeholder {
    font-family: 'Roboto', sans-serif;
    font-size: 22px;
    font-weight: 500;
    color: rgba(96, 72, 72, 0.4);
  }
`;

const Button = styled.button`
  margin-top: 52px;
  background-color: #8c97ea;
  border-radius: 10px;
  border: 0;
  width: 237px;
  height: 56px;
  font-size: 36px;
  font-weight: 700;
  color: #ffffff;
  font-family: 'Roboto', sans-serif;
`;

const SignUpButton = styled(Button)`
  margin-top: 110px;
`;

const Subtitle = styled.span`
  color: #ffffff;
  font-family: 'Roboto', sans-serif;
  font-weight: 700;
  font-size: 18px;
  margin-top: 15px;
`;

export { PageStyle, Text, Form, Input, Button, Subtitle, SignUpButton };
