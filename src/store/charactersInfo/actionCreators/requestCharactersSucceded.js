import {REQUESTED_CHARACTERS_SUCCEEDED} from '../actionTypes'

const requestCharactersSucceeded = (data) => {
    return {
        type: REQUESTED_CHARACTERS_SUCCEEDED,
        payload: data
    }
};

export default requestCharactersSucceeded;