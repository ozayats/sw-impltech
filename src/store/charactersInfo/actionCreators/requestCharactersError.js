import {REQUESTED_CHARACTERS_FAILED} from '../actionTypes'

const requestCharactersError = () => {
    return {type: REQUESTED_CHARACTERS_FAILED}
};

export default requestCharactersError;