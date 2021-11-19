import * as S from '../../styles/SignUpAndSignInStyle';
import Swal from 'sweetalert2';
import { useState } from 'react';
import { useNavigate } from 'react-router-dom';
import { signIn } from '../../services/api';

const SignIn = () => {
  const navigate = useNavigate();
  const [isDisabled, setIsDisabled] = useState(true);
  const [inputFields, setInputFields] = useState({
    email: '',
    password: '',
  });

  const handleChange = (event) => {
    setInputFields({ ...inputFields, [event.target.name]: event.target.value });
  };

  const handleSubmit = (e) => {
    e.preventDefault();
    setIsDisabled(!isDisabled);
    const body = inputFields;
    signIn(body)
      .then(async (res) => {
        const userIsSubscriber = res.data.user.is_subscriber;
        localStorage.setItem('@user', JSON.stringify(res.data));
        if (!userIsSubscriber) {
          navigate('/plans');
        } else navigate('/subscription');
      })
      .catch(async () => {
        await Swal.fire({
          icon: 'error',
          title: 'Não foi possível efetuar o login, por favor tente novamente',
        });
      });
  };

  return (
    <S.PageStyle>
      <S.Text>Bem vindo ao GratiBox</S.Text>
      <S.Form onSubmit={handleSubmit}>
        <S.Input
          required
          placeholder="Email"
          type="text"
          name="email"
          value={inputFields.email}
          onChange={handleChange}
          minLength="3"
          autoFocus
          autoComplete="off"
        />
        <S.Input
          required
          placeholder="Senha"
          type="password"
          name="password"
          value={inputFields.password}
          onChange={handleChange}
          minLength="3"
          placeholder="Senha"
          autoComplete="off"
        />
        <S.SignUpButton type="submit" disable={isDisabled}>
          Login
        </S.SignUpButton>
        <S.Subtitle onClick={() => navigate('/sign-up')}>
          Ainda não sou grato
        </S.Subtitle>
      </S.Form>
    </S.PageStyle>
  );
};

export default SignIn;
