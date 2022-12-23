import { selector } from 'recoil';
import { getExample } from '../../services';

export const exampleState = selector({
  key: 'getUserInfo',
  get: async ({ get }) => {
    const response = await getExample;
    console.log(response);
    return response.data;
  },
});
