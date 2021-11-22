const createSubscribeBody = (subscribe) => {
  console.log(subscribe);
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

export { createSubscribeBody };
