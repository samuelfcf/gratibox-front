import { nextMonday, nextWednesday, nextFriday, add } from 'date-fns';

const createSubscribeBody = (subscribe) => {
  const [address, number] = subscribe.deliveryInfo?.deliveryAddress.split('- ');
  let productsIds = [];

  subscribe.products?.forEach((p) => {
    if (p === 'Chás') productsIds.push(1);
    if (p === 'Incensos') productsIds.push(2);
    if (p === 'Produtos orgânicos') productsIds.push(3);
  });

  const body = {
    planId: subscribe.plan === 'mensal' ? 1 : 2,
    deliveryDay: subscribe.deliveryDay,
    deliveryCEP: subscribe.deliveryInfo.cep,
    deliveryNumber: number,
    deliveryAddress: address,
    deliveryRecipient: subscribe.deliveryInfo.name,
    productsIds: JSON.stringify(productsIds),
  };

  return body;
};

const formatDate = (dateFromAPI) => {
  const date = new Date(dateFromAPI);
  let day = date.getDate();
  let month = date.getMonth() + 1;
  let year = date.getFullYear();

  if (day < 10) day = `0${day}`;
  if (month < 10) month = `0${month}`;

  return `${day}/${month}/${year}`;
};

const handleNextDeliverys = (deliveryDate, susbcriptionPlan) => {
  let plan = susbcriptionPlan === 1 ? 'Mensal' : 'Semanal';
  let nextDeliverys = [];
  const month = new Date().getUTCMonth();
  const year = new Date().getUTCFullYear();
  if (plan === 'Mensal') {
    const del1 = add(new Date(year, month, parseInt(deliveryDate)), {
      months: 1,
    });

    const del2 = add(del1, { months: 1 });
    const del3 = add(del2, { months: 1 });
    nextDeliverys.push(
      `${del1.getDate()}/${del1.getMonth() + 1}/${del1.getFullYear()}`,
      `${del2.getDate()}/0${del2.getMonth() + 1}/${del2.getFullYear()} `,
      `${del3.getDate()}/0${del2.getMonth() + 2}/${del3.getFullYear()} `
    );
  }

  if (plan === 'Semanal') {
    const date = new Date();
    let del1 = new Date(year, month, date.getDate());
    let del2 = add(del1, { weeks: 1 });
    let del3 = add(del1, { weeks: 2 });

    if (deliveryDate === 'Segunda') {
      nextDeliverys.push(
        `${nextMonday(del1).getDate()}/${
          nextMonday(del1).getMonth() + 1
        }/${nextMonday(del1).getFullYear()}`,
        `${nextMonday(del2).getDate()}/${
          nextMonday(del2).getMonth() + 1
        }/${nextMonday(del2).getFullYear()}`,
        `${nextMonday(del3).getDate()}/${
          nextMonday(del3).getMonth() + 1
        }/${nextMonday(del3).getFullYear()}`
      );
    }

    if (deliveryDate === 'Quarta') {
      nextDeliverys.push(
        `${nextWednesday(del1).getDate()}/${
          nextWednesday(del1).getMonth() + 1
        }/${nextWednesday(del1).getFullYear()}`,
        `${nextWednesday(del2).getDate()}/${
          nextWednesday(del2).getMonth() + 1
        }/${nextWednesday(del2).getFullYear()}`,
        `${nextWednesday(del3).getDate()}/${
          nextWednesday(del3).getMonth() + 1
        }/${nextWednesday(del3).getFullYear()}`
      );
    }

    if (deliveryDate === 'Sexta') {
      nextDeliverys.push(
        `${nextFriday(del1).getDate()}/${
          nextFriday(del1).getMonth() + 1
        }/${nextFriday(del1).getFullYear()}`,
        `${nextFriday(del2).getDate()}/${
          nextFriday(del2).getMonth() + 1
        }/${nextFriday(del2).getFullYear()}`,
        `${nextFriday(del3).getDate()}/${
          nextFriday(del3).getMonth() + 1
        }/${nextFriday(del3).getFullYear()}`
      );
    }
  }

  return nextDeliverys;
};

export { createSubscribeBody, formatDate, handleNextDeliverys };
