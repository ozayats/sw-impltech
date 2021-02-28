import initialStore from "../initialStore";
import {REQUESTED_CHARACTERS, REQUESTED_CHARACTERS_SUCCEEDED, REQUESTED_CHARACTERS_FAILED} from "./actionTypes";

const reducer = (store = initialStore.charactersInfoReducer.charactersInfo, {type, payload}) => {
    switch (type) {
        case REQUESTED_CHARACTERS:
            return {
                ...store,
                loading: true,
                error: false,
            };
        case REQUESTED_CHARACTERS_SUCCEEDED:
            return {
                ...store,
                charactersInfo: payload,
                loading: false,
                error: false,
            };
        case REQUESTED_CHARACTERS_FAILED:
            return {
                ...store,
                loading: false,
                error: true,
            };
        default:
            return store;
    }
};

export default reducer;