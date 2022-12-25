import { selector } from 'recoil';
import { getExchange } from '../../services';

export const exchangeListState = selector({
  key: 'exchageList',
  get: async ({ get }) => {
    const response = await getExchange;
    return response.data;
  },
});
