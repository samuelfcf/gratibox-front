import * as S from './style';
import { useContext } from 'react';
import UserContext from '../../contexts/UserContext';
import GirlInLotus from '../../assets/image03.jpg';

const Subscription = () => {
  const { user } = useContext(UserContext);
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
            <S.Infos>@tipo_de_plano</S.Infos>
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
