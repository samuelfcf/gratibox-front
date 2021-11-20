import { useEffect, useContext } from 'react';
import { useNavigate } from 'react-router-dom';
import Swal from 'sweetalert2';
import * as S from './style';
import UserContext from '../../contexts/UserContext';
import WeeklyPlanImg from '../../assets/image04.jpg';
import MontlyPlanImg from '../../assets/image02.jpg';

const Plans = () => {
  const navigate = useNavigate();
  const { user } = useContext(UserContext);

  useEffect(async () => {
    if (!user) {
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

  const handleSubscribe = (e) => {
    e.preventDefault();
    navigate('/subscribe');
  };
  return (
    <S.PageStyle>
      <S.WelcomeText>
        {user?.user.name
          ? `Bom te ver por aqui, ${user?.user.name}`
          : 'Bom te ver por aqui'}
      </S.WelcomeText>
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
          <S.PlanButton onClick={handleSubscribe}>Assinar</S.PlanButton>
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
          <S.PlanButton onClick={handleSubscribe}>Assinar</S.PlanButton>
        </S.PlanContainer>
      </S.PlansConteinar>
    </S.PageStyle>
  );
};

export default Plans;
