import Swal from 'sweetalert2';
import * as S from './style';
import { useEffect, useContext, useState } from 'react';
import { useNavigate } from 'react-router-dom';
import UserContext from '../../contexts/UserContext';
import SubscribeContext from '../../contexts/SubscribeContext';
import GirlInLotus from '../../assets/image03.jpg';
import { ExpandMore } from '@material-ui/icons';
import cep from 'cep-promise';
import { postSubscribe } from '../../services/api';
import { createSubscribeBody } from '../../services/utils';
import {
  Accordion,
  AccordionSummary,
  AccordionDetails,
} from '@material-ui/core';

const Subscribe = () => {
  const navigate = useNavigate();
  const { user } = useContext(UserContext);
  const { subscribe, setSubscribe } = useContext(SubscribeContext);
  const [expandedPanel, setExpandedPanel] = useState(false);
  const [plan, setPlan] = useState('');
  const [deliveryDay, setDeliveryDay] = useState('');
  const [products, setProducts] = useState([]);
  const [inputFields, setInputFields] = useState({
    name: '',
    cep: '',
    deliveryAddress: '',
    city: '',
    state: '',
  });
  const [step, setStep] = useState(1);

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

  const handleInputChange = (event) => {
    setInputFields({ ...inputFields, [event.target.name]: event.target.value });
  };

  const handleChange = (panel) => (isExpanded) => {
    setExpandedPanel(isExpanded ? panel : false);
  };

  const selectPlan = (plan) => {
    setPlan(plan);
  };

  const selectProduct = (product) => {
    if (products.includes(product)) {
      products.splice(products.indexOf(product), 1);
    } else {
      setProducts([...products, product]);
    }
  };

  const createSubscribe = () => {
    if (step === 1) {
      if (!plan || !deliveryDay || products.length === 0) {
        return Swal.fire({
          title: 'Campos vazios',
          text: 'Para prosseguir, selecione todos os campos.',
          icon: 'warning',
        });
      }
      setSubscribe({
        userId: user.user.id,
        plan: plan,
        deliveryDay: deliveryDay,
        products: products,
      });

      setStep(2);
    }

    if (step === 2) {
      if (
        !inputFields.name ||
        !inputFields.cep ||
        !inputFields.deliveryAddress ||
        !inputFields.state ||
        !inputFields.city
      ) {
        return Swal.fire({
          title: 'Campos vazios',
          text: 'Para prosseguir, selecione todos os campos.',
          icon: 'warning',
        });
      }

      const deliveryInfo = inputFields;
      const subscribeObject = {
        ...subscribe,
        deliveryInfo,
      };
      const body = createSubscribeBody(subscribeObject);
      postSubscribe(body, user.token, user.user.id)
        .then(async () => {
          await Swal.fire({
            icon: 'success',
            title: 'Assinatura concluída com sucesso!',
          });
          navigate('/subscription');
        })
        .catch(async () => {
          await Swal.fire({
            icon: 'error',
            title:
              'Erro ao concluir sua assinatura, por favor tente novamente.',
          });
          window.location.reload();
        });
    }
  };

  const handleCep = (event) => {
    cep(event.target.value).then((res) => {
      setInputFields({
        name: inputFields.name,
        cep: res.cep,
        deliveryAddress: `${res.street} - `,
        city: res.city,
        state: res.state,
      });
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
      <S.SubscribeContainer>
        <S.Img src={GirlInLotus} alt="girl in lotus" />
        {step === 1 ? (
          <>
            <S.Div>
              <Accordion
                expanded={expandedPanel === 'panel1'}
                onChange={handleChange('panel1')}
              >
                <AccordionSummary expandIcon={<ExpandMore />}>
                  Plano
                </AccordionSummary>

                <AccordionDetails>
                  <S.Details>
                    <S.CheckBoxesDiv>
                      <S.CheckBox>
                        <input
                          onClick={() => selectPlan('mensal')}
                          type="radio"
                          id="mensal"
                          name="plan"
                          value="mensal"
                        />
                        <S.Label htmlFor="mensal">Mensal</S.Label>
                      </S.CheckBox>
                      <S.CheckBox>
                        <input
                          onClick={() => selectPlan('semanal')}
                          type="radio"
                          id="semanal"
                          name="plan"
                          value="semanal"
                        />
                        <S.Label htmlFor="semanal">Semanal</S.Label>
                      </S.CheckBox>
                    </S.CheckBoxesDiv>
                  </S.Details>
                </AccordionDetails>
              </Accordion>
            </S.Div>
            <S.Div>
              <Accordion
                expanded={expandedPanel === 'panel2'}
                onChange={handleChange('panel2')}
              >
                <AccordionSummary expandIcon={<ExpandMore />}>
                  Entrega
                </AccordionSummary>

                <AccordionDetails>
                  {!plan ? (
                    'Selecione um plano!'
                  ) : plan === 'mensal' ? (
                    <S.CheckBoxesDiv>
                      <S.CheckBox>
                        <S.Input
                          onClick={() => setDeliveryDay('1')}
                          type="radio"
                          id="1"
                          name="day"
                          value="1"
                        />
                        <S.Label htmlFor="1">Dia 1</S.Label>
                      </S.CheckBox>
                      <S.CheckBox>
                        <S.Input
                          onClick={() => setDeliveryDay('10')}
                          type="radio"
                          id="10"
                          name="day"
                          value="10"
                        />
                        <S.Label htmlFor="10">Dia 10</S.Label>
                      </S.CheckBox>
                      <S.CheckBox>
                        <S.Input
                          onClick={() => setDeliveryDay('20')}
                          type="radio"
                          id="20"
                          name="day"
                          value="20"
                        />
                        <S.Label htmlFor="20">Dia 20</S.Label>
                      </S.CheckBox>
                    </S.CheckBoxesDiv>
                  ) : (
                    <>
                      <S.CheckBox>
                        <S.Input
                          onClick={() => setDeliveryDay('Segunda')}
                          type="radio"
                          id="segunda"
                          name="weekday"
                          value="segunda"
                        />
                        <S.Label htmlFor="segunda">Segunda</S.Label>
                      </S.CheckBox>
                      <S.CheckBox>
                        <S.Input
                          onClick={() => setDeliveryDay('Quarta')}
                          type="radio"
                          id="quarta"
                          name="weekday"
                          value="quarta"
                        />
                        <S.Label htmlFor="quarta">Quarta</S.Label>
                      </S.CheckBox>
                      <S.CheckBox>
                        <S.Input
                          onClick={() => setDeliveryDay('Sexta')}
                          type="radio"
                          id="sexta"
                          name="weekday"
                          value="sexta"
                        />
                        <S.Label htmlFor="sexta">Sexta</S.Label>
                      </S.CheckBox>
                    </>
                  )}
                </AccordionDetails>
              </Accordion>
            </S.Div>
            <S.Div>
              <Accordion
                expanded={expandedPanel === 'panel3'}
                onChange={handleChange('panel3')}
              >
                <AccordionSummary expandIcon={<ExpandMore />}>
                  Quero receber
                </AccordionSummary>

                <AccordionDetails>
                  <S.CheckBoxesDiv>
                    <S.CheckBox>
                      <S.Input
                        onClick={() => selectProduct('Chás')}
                        type="checkbox"
                        id="chás"
                        name="chás"
                      />
                      <S.Label htmlFor="chás">Chás</S.Label>
                    </S.CheckBox>
                    <S.CheckBox>
                      <S.Input
                        onClick={() => selectProduct('Incensos')}
                        type="checkbox"
                        id="incensos"
                        name="incensos"
                      />
                      <S.Label htmlFor="incensos">Incensos</S.Label>
                    </S.CheckBox>
                    <S.CheckBox>
                      <S.Input
                        onClick={() => selectProduct('Produtos orgânicos')}
                        type="checkbox"
                        id="produtos orgânicos"
                        name="produtos orgânicos"
                      />
                      <S.Label htmlFor="produtos orgânicos">
                        Produtos Orgânicos
                      </S.Label>
                    </S.CheckBox>
                  </S.CheckBoxesDiv>
                </AccordionDetails>
              </Accordion>
            </S.Div>
          </>
        ) : (
          <S.Form>
            <S.InputForm
              autoFocus
              name="name"
              placeholder="Nome completo"
              onChange={handleInputChange}
              value={inputFields.name}
              autoComplete="off"
            />
            <S.InputForm
              name="cep"
              placeholder="CEP"
              onChange={handleInputChange}
              onBlur={handleCep}
              value={inputFields.cep}
              autoComplete="off"
            />
            <S.InputForm
              name="deliveryAddress"
              placeholder="Endereço de entrega"
              onChange={handleInputChange}
              value={inputFields.deliveryAddress}
              autoComplete="off"
            />
            <S.CityStateContainer>
              <S.CityStateInputs
                name="city"
                placeholder="Cidade"
                onChange={handleInputChange}
                value={inputFields.city}
              />
              <S.CityStateInputs
                name="state"
                placeholder="Estado"
                onChange={handleInputChange}
                value={inputFields.state}
              />
            </S.CityStateContainer>
          </S.Form>
        )}
      </S.SubscribeContainer>
      <S.Button onClick={createSubscribe}>Próximo</S.Button>
    </S.PageStyle>
  );
};

export default Subscribe;
