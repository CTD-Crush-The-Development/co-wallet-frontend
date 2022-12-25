import { faker } from '@faker-js/faker';
import { ExchangeModel } from '../../models/exchange.model';

export const exchangeList: ExchangeModel[] = [...Array(23)].map((_, index) => {
  const setIndex = index + 1;

  return {
    key: `exchange-${setIndex}`,
    name: faker.lorem.words(),
    url: faker.internet.avatar(),
  };
});
