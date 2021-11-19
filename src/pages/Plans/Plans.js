import { useEffect } from 'react';
import { useNavigate } from 'react-router-dom';
import Swal from 'sweetalert2';
import * as S from './style';
import WeeklyPlanImg from '../../assets/image04.jpg';
import MontlyPlanImg from '../../assets/image02.jpg';

const Plans = () => {
  const navigate = useNavigate();
  const userStorage = JSON.parse(localStorage.getItem('@user'));

  useEffect(async () => {
    if (!userStorage?.token) {
      await Swal.fire({
        title: 'Login necessário',
        text: 'Para acessar essa página, você precisa estar logado',
        icon: 'warning',
        showDenyButton: true,
        confirmButtonText: 'Fazer Login',
        denyButtonText: 'Ir para Home',
        confirmButtonColor: '#2A6DB0',
        denyButtonColor: '#AAA',
      }).then((result) => {
        if (result.isConfirmed) {
          navigate('/sign-in');
        } else {
          navigate('/');
        }
      });
    }
  }, []);
  console.log(userStorage?.token);
  return (
    <S.PageStyle>
      <S.WelcomeText>{`Bom te ver por aqui, ${userStorage.user.name}`}</S.WelcomeText>
      <S.SmallText>
        Você ainda não asinou um plano, que tal começar agora?
      </S.SmallText>
      <S.PlansConteinar>
        <S.PlanContainer>
          <S.Img src={WeeklyPlanImg} alt="girl in lotus" />
          <S.PlanText>
            Você recebe um box por semana. Ideal para quem quer exercer a
            gratidão todos os dias.
          </S.PlanText>
          <S.PlanButton>Assinar</S.PlanButton>
        </S.PlanContainer>
        <S.PlanContainer>
          <S.Img
            style={{ width: '350px' }}
            src={MontlyPlanImg}
            alt="girl in lotus"
          />
          <S.PlanText>
            Você recebe um box por mês. <br />
            <br /> Ideal para quem está começando agora.
          </S.PlanText>
          <S.PlanButton>Assinar</S.PlanButton>
        </S.PlanContainer>
      </S.PlansConteinar>
    </S.PageStyle>
  );
};

export default Plans;
