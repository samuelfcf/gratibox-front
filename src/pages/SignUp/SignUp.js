import * as S from '../../styles/SignUpAndSignInStyle';

const SignUp = () => {
  return (
    <S.PageStyle>
      <S.Text>Bem vindo ao GratiBox</S.Text>
      <S.Form>
        <S.Input placeholder="Nome" autoFocus />
        <S.Input placeholder="Email" autoFocus />
        <S.Input placeholder="Senha" autoFocus />
        <S.Input placeholder="Confirmar Senha" autoFocus />
      </S.Form>
      <S.Button>Cadastrar</S.Button>
    </S.PageStyle>
  );
};

export default SignUp;
