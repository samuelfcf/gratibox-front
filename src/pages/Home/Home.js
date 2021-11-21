import { useNavigate } from 'react-router-dom';
import HomeImage from '../../assets/image05.webp';
import * as S from './style';

const Home = () => {
  const navigate = useNavigate();

  return (
    <S.PageStyle>
      <S.PageBigText>Bem vindo ao Gratibox</S.PageBigText>
      <S.PageSmallText>
        Receba em casa um box com chás, produtos orgânicos, incensos e muito
        mais...
      </S.PageSmallText>
      <S.Img src={HomeImage} alt="home_img" />
      <S.ButtonsArea>
        <S.ButtonSignUp onClick={() => navigate('/sign-up')}>
          Quero começar
        </S.ButtonSignUp>
        <S.ButtonSignIn onClick={() => navigate('/sign-in')}>
          Já sou grato
        </S.ButtonSignIn>
      </S.ButtonsArea>
    </S.PageStyle>
  );
};

export default Home;
