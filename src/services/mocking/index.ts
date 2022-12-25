import { AxiosInstance } from 'axios';
import AxiosMockAdapter from 'axios-mock-adapter';
import { exchangeList } from './data';

const mocking = (instance: AxiosInstance) => {
  const mock = new AxiosMockAdapter(instance);

  mock.onGet('/exchange').reply(() => {
    try {
      const results = exchangeList;
      return [200, results];
    } catch (error) {
      console.error(error);
      return [500, { message: 'Internal server error' }];
    }
  });
};

export default mocking;
