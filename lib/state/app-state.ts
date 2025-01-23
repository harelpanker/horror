import { atom } from 'jotai';
import { stepsData } from './data';

export const stepAtom = atom(0);
export const usernameAtom = atom('');
export const stepsAtom = atom(stepsData);
