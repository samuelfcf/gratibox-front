import * as S from './style';
import Swal from 'sweetalert2';
import { useContext, useEffect, useState } from 'react';
import { useNavigate } from 'react-router-dom';
import { getSubscriptionInfo } from '../../services/api';
import UserContext from '../../contexts/UserContext';
import GirlInLotus from '../../assets/image03.jpg';

const Subscription = () => {
  const { user } = useContext(UserContext);
  const [plan, setPlan] = useState('');
  const [products, setProducts] = useState([]);
  const [subscriptionDate, setSubscriptionDate] = useState('');
  const navigate = useNavigate();

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

    if (user) {
      getSubscriptionInfo(user.token, user.user.id).then((res) => {
        console.log(res.data);
        if (res.data[0].plan === 1) {
          setPlan('Mensal');
        } else setPlan('Semanal');
      });
    }
  }, []);

  return (
    <S.PageStyle>
      <S.WelcomeText>
        {user?.user.name
          ? `Bom te ver por aqui, ${user?.user.name}`
          : 'Bom te ver por aqui'}
      </S.WelcomeText>
      <S.SmallText>“Agradecer é arte de atrair coisas boas”</S.SmallText>

      <S.SubscriptionContainer>
        <S.Img src={GirlInLotus} alt="girl in lotus" />
        <S.SubscriptionInfo>
          <div>
            <S.InfoTitle>Plano: </S.InfoTitle>
            <S.Infos>{!plan ? '' : plan}</S.Infos>
          </div>
          <div>
            <S.InfoTitle>Data da assinatura: </S.InfoTitle>
            <S.Infos>dd/mm/aaaa</S.Infos>
          </div>
          <div>
            <S.InfoTitle>Pŕoximas entregas: </S.InfoTitle>
            <S.DeliveryDatesArea>
              <S.Infos>dd/mm/aaaa</S.Infos>
              <S.Infos>dd/mm/aaaa</S.Infos>
              <S.Infos>dd/mm/aaaa</S.Infos>
            </S.DeliveryDatesArea>
          </div>
          <S.ProductsArea>
            <span>Chás</span>
            <span>Produtos orgânicos</span>
            <span>Incensos</span>
          </S.ProductsArea>
        </S.SubscriptionInfo>
      </S.SubscriptionContainer>
      <S.Button>Avaliar Entregas</S.Button>
    </S.PageStyle>
  );
};

export default Subscription;
