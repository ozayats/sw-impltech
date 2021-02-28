import requestCharacters from './actionCreators/requestCharacters';
import requestCharactersError from './actionCreators/requestCharactersError'
import requestCharactersSucceeded from "./actionCreators/requestCharactersSucceded";
import axios from "axios";


const getCharactersInfo = (url) => async (dispatch) => {
        dispatch(requestCharacters());
        await axios({method: 'GET', url})
            .then((r) => dispatch(requestCharactersSucceeded(r.data)))
            .catch(err => dispatch(requestCharactersError()));
    }
;

export default getCharactersInfo;

