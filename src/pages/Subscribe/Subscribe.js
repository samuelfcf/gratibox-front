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

const Subscribe = () => {
  const navigate = useNavigate();
  const { user } = useContext(UserContext);
  const { subscribe, setSubscribe } = useContext(SubscribeContext);
  const [expandedPanel, setExpandedPanel] = useState(false);
  const [plan, setPlan] = useState('');
  const [deliveryDay, setDeliveryDay] = useState('');
  const [products, setProducts] = useState([]);
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
    setSubscribe({
      userId: user.user.id,
      plan: plan,
      deliveryDay: deliveryDay,
      products: products,
    });

    setStep(2);
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
            <Div>
              <Accordion
                expanded={expandedPanel === 'panel1'}
                onChange={handleChange('panel1')}
              >
                <AccordionSummary expandIcon={<ExpandMore />}>
                  Plano
                </AccordionSummary>

                <AccordionDetails>
                  <Details>
                    <CheckBoxesDiv>
                      <CheckBox>
                        <input
                          onClick={() => selectPlan('mensal')}
                          type="radio"
                          id="mensal"
                          name="plan"
                          value="mensal"
                        />
                        <Label htmlFor="mensal">Mensal</Label>
                      </CheckBox>
                      <CheckBox>
                        <input
                          onClick={() => selectPlan('semanal')}
                          type="radio"
                          id="semanal"
                          name="plan"
                          value="semanal"
                        />
                        <Label htmlFor="semanal">Semanal</Label>
                      </CheckBox>
                    </CheckBoxesDiv>
                  </Details>
                </AccordionDetails>
              </Accordion>
            </Div>
            <Div>
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
            </Div>
            <Div>
              <Accordion
                expanded={expandedPanel === 'panel3'}
                onChange={handleChange('panel3')}
              >
                <AccordionSummary expandIcon={<ExpandMore />}>
                  Quero receber
                </AccordionSummary>

                <AccordionDetails>
                  <CheckBoxesDiv>
                    <CheckBox>
                      <Input
                        onClick={() => selectProduct('Chás')}
                        type="checkbox"
                        id="chás"
                        name="chás"
                      />
                      <Label htmlFor="chás">Chás</Label>
                    </CheckBox>
                    <CheckBox>
                      <Input
                        onClick={() => selectProduct('Incensos')}
                        type="checkbox"
                        id="incensos"
                        name="incensos"
                      />
                      <Label htmlFor="incensos">Incensos</Label>
                    </CheckBox>
                    <CheckBox>
                      <Input
                        onClick={() => selectProduct('Produtos orgânicos')}
                        type="checkbox"
                        id="produtos orgânicos"
                        name="produtos orgânicos"
                      />
                      <Label htmlFor="produtos orgânicos">
                        Produtos Orgânicos
                      </Label>
                    </CheckBox>
                  </CheckBoxesDiv>
                </AccordionDetails>
              </Accordion>
            </Div>
          </>
        ) : (
          ''
        )}
      </S.SubscribeContainer>
      <S.Button onClick={createSubscribe}>Próximo</S.Button>
    </S.PageStyle>
  );
};

const Div = styled.div`
  width: calc(100vw - 50px);
  margin-bottom: 10px;
`;

const Details = styled.div`
  display: flex;
  justify-content: space-between;
`;

const Label = styled.label`
  margin-left: 5px;
`;

const Input = styled.input`
  height: 50px;
`;

const CheckBox = styled.div`
  display: flex;
  align-items: center;
  margin-left: 13px;
`;

const CheckBoxesDiv = styled.div`
  display: flex;
  justify-content: space-between;
`;

export default Subscribe;
