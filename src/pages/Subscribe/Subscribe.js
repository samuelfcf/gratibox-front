import { useEffect, useContext, useState } from 'react';
import { useNavigate } from 'react-router-dom';
import Swal from 'sweetalert2';
import * as S from './style';
import UserContext from '../../contexts/UserContext';
import SubscribeContext from '../../contexts/SubscribeContext';
import GirlInLotus from '../../assets/image03.jpg';
import { ExpandMore } from '@material-ui/icons';
import {
  Accordion,
  AccordionSummary,
  AccordionDetails,
} from '@material-ui/core';
import styled from 'styled-components';
import cep from 'cep-promise';

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

  const handleChange = (panel) => (event, isExpanded) => {
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
      setSubscribe({
        userId: user.user.id,
        plan: plan,
        deliveryDay: deliveryDay,
        products: products,
      });

      setStep(2);
    } else {
      const body = inputFields;
      setSubscribe({ ...subscribe, body });
    }
  };
  console.log(subscribe);

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
                    <>
                      <div>
                        <input
                          onClick={() => setDeliveryDay('1')}
                          type="radio"
                          id="1"
                          name="day"
                          value="1"
                        />
                        <label htmlFor="1">Dia 1</label>
                      </div>
                      <div>
                        <input
                          onClick={() => setDeliveryDay('10')}
                          type="radio"
                          id="10"
                          name="day"
                          value="10"
                        />
                        <label htmlFor="10">Dia 10</label>
                      </div>
                      <div>
                        <input
                          onClick={() => setDeliveryDay('20')}
                          type="radio"
                          id="20"
                          name="day"
                          value="20"
                        />
                        <label htmlFor="20">Dia 20</label>
                      </div>
                    </>
                  ) : (
                    <>
                      <div>
                        <input
                          onClick={() => setDeliveryDay('Segunda')}
                          type="radio"
                          id="segunda"
                          name="weekday"
                          value="segunda"
                        />
                        <label htmlFor="segunda">Segunda</label>
                      </div>
                      <div>
                        <input
                          onClick={() => setDeliveryDay('Quarta')}
                          type="radio"
                          id="quarta"
                          name="weekday"
                          value="quarta"
                        />
                        <label htmlFor="quarta">Quarta</label>
                      </div>
                      <div>
                        <input
                          onClick={() => setDeliveryDay('Sexta')}
                          type="radio"
                          id="sexta"
                          name="day"
                          value="sexta"
                        />
                        <label htmlFor="sexta">Sexta</label>
                      </div>
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
              autoFocus
              name="deliveryAddress"
              placeholder="Endereço de entrega"
              onChange={handleInputChange}
              value={inputFields.deliveryAddress}
              autoComplete="off"
            />
            <S.CityStateContainer>
              <S.CityStateInputs
                autoFocus
                name="city"
                placeholder="Cidade"
                onChange={handleInputChange}
                value={inputFields.city}
              />
              <S.CityStateInputs
                autoFocus
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
