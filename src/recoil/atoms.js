import { atom } from "recoil";
import {texto} from "../utils/spanish/text";
export const languageAtom = atom({
    key: 'languageAtom',
    default: "spanish",
    persistence_UNSTABLE: {
        type: 'log'
    }
})

export const setTextAtom = atom({
    key: 'setTextAtom',
    default: texto,
    persistence_UNSTABLE: {
        type: 'log'
    }
})