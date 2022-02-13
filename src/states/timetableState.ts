/* eslint-disable import/prefer-default-export */
import { atom } from 'recoil';

export const selectedSubmitterId = atom<string | null>({
  key: 'selectedSubmitterId',
  default: null,
});
