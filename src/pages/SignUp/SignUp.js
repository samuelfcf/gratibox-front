import { useState } from 'react';
import { useNavigate } from 'react-router-dom';
import { signUp } from '../../services/api';
import Swal from 'sweetalert2';
import * as S from '../../styles/SignUpAndSignInStyle';

const SignUp = () => {
  const navigate = useNavigate();
  const [isDisabled, setIsDisabled] = useState(true);
  const [inputFields, setInputFields] = useState({
    name: '',
    email: '',
    password: '',
    confirmPassword: '',
  });

  const handleChange = (event) => {
    setInputFields({ ...inputFields, [event.target.name]: event.target.value });
  };

  const handleSubmit = (e) => {
    e.preventDefault();
    setIsDisabled(!isDisabled);
    const body = inputFields;
    if (body.password !== body.confirmPassword) {
      return Swal.fire({
        icon: 'error',
        title: 'Senhas não conferem',
      });
    }
    signUp(body)
      .then(async () => {
        await Swal.fire({
          icon: 'success',
          title: 'Usuário cadastrado com sucesso!',
        });
      })
      .catch(async () => {
        await Swal.fire({
          icon: 'error',
          title:
            'Não foi possível efetuar o cadastro, por favor tente novamente',
        });
      });
  };

  return (
    <S.PageStyle>
      <S.Text>Bem vindo ao GratiBox</S.Text>
      <S.Form onSubmit={handleSubmit}>
        <S.Input
          required
          placeholder="Nome"
          type="text"
          name="name"
          value={inputFields.name}
          onChange={handleChange}
          minLength="3"
          autoFocus
          autoComplete="off"
        />
        <S.Input
          required
          placeholder="Email"
          type="text"
          name="email"
          value={inputFields.email}
          onChange={handleChange}
          minLength="3"
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
        <S.Input
          required
          placeholder="Confirmar Senha"
          type="password"
          name="confirmPassword"
          value={inputFields.confirmPassword}
          onChange={handleChange}
          minLength="3"
          autoComplete="off"
        />
        <S.Button type="submit" disable={isDisabled}>
          Cadastrar
        </S.Button>
      </S.Form>
    </S.PageStyle>
  );
};

export default SignUp;
