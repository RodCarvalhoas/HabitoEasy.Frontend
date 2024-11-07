import { atom } from 'recoil';
import { recoilPersist } from 'recoil-persist';

import Auth from '../interfaces/authentication/Auth';

const { persistAtom } = recoilPersist({
    storage: localStorage
})

export const authState = atom<Auth | undefined>({
    key: 'authState',
    default: undefined,
    effects_UNSTABLE: [persistAtom],
});