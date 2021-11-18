import HomeImage from '../../assets/image05.webp';
import * as S from './style';

const Home = () => {
  return (
    <S.PageStyle>
      <S.PageBigText>Bem vindo ao Gratibox</S.PageBigText>
      <S.PageSmallText>
        Receba em casa um box com chás, produtos orgânicos, incensos e muito
        mais...
      </S.PageSmallText>
      <S.Img src={HomeImage} alt="home_img" />
      <S.ButtonSignUp>Quero começar</S.ButtonSignUp>
      <S.ButtonSignIn>Já sou grato</S.ButtonSignIn>
    </S.PageStyle>
  );
};

export default Home;
