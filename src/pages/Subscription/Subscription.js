import * as S from './style';
import Swal from 'sweetalert2';
import { useContext, useEffect, useState } from 'react';
import { useNavigate } from 'react-router-dom';
import { getSubscriptionInfo } from '../../services/api';
import { formatDate, handleNextDeliverys } from '../../services/utils';
import UserContext from '../../contexts/UserContext';
import GirlInLotus from '../../assets/image03.jpg';

const Subscription = () => {
  const { user } = useContext(UserContext);
  const [plan, setPlan] = useState('');
  const [products, setProducts] = useState([]);
  const [subscriptionDate, setSubscriptionDate] = useState('');
  const [nextDeliverys, setNextDeliverys] = useState([]);
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
        const subscriptionInfos = res.data;

        if (subscriptionInfos[0].plan === 1) {
          setPlan('Mensal');
        } else setPlan('Semanal');

        setSubscriptionDate(formatDate(subscriptionInfos[0].subscription_date));

        let subscriptionProducts = [];
        res.data.forEach((register) => {
          subscriptionProducts.push(register.product_name);
        });

        setProducts(subscriptionProducts);

        setNextDeliverys(
          handleNextDeliverys(
            subscriptionInfos[0].delivery_day,
            subscriptionInfos[0].plan
          )
        );
      });
    }
  }, []);

  const evaluatesDelivery = async () => {
    Swal.fire({
      title: 'Avaliações',
      text: 'Em breve você poderá avaliar nossas entregas e nos ajudar a melhorar nosso serviço :)',
    });
  };

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
            <S.Infos>{!subscriptionDate ? '' : subscriptionDate}</S.Infos>
          </div>
          <div>
            <S.InfoTitle>Pŕoximas entregas: </S.InfoTitle>
            <S.DeliveryDatesArea>
              {nextDeliverys.length === 0
                ? ''
                : nextDeliverys.map((nextDelivery) => (
                    <S.Infos>{`${nextDelivery}`}</S.Infos>
                  ))}
            </S.DeliveryDatesArea>
          </div>
          <S.ProductsArea>
            {products.length === 0
              ? ''
              : products.map((product) => <span>{`${product}`}</span>)}
          </S.ProductsArea>
        </S.SubscriptionInfo>
      </S.SubscriptionContainer>
      <S.Button onClick={evaluatesDelivery}>Avaliar Entregas</S.Button>
    </S.PageStyle>
  );
};

export default Subscription;
