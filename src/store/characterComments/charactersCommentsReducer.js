import initialStore from "../initialStore";
import {CHARACTERS_COMMENTS_ADDED} from "./actionTypes";

const reducer = (store = initialStore.charactersCommentsReducer.charactersComments, {type, payload}) => {
    switch (type) {
        case CHARACTERS_COMMENTS_ADDED:
            return {
                ...store,
                charactersComments: payload
            };

        default:
            return store;
    }
};

export default reducer;