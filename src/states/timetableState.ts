/* eslint-disable import/prefer-default-export */
import { atom } from 'recoil';

export const selectedSumitterIds = atom<string[]>({
  key: 'selectedSumitterIds',
  default: [],
});
