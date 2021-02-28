import {combineReducers} from "redux";
import charactersInfoReducer from "./charactersInfo/charactersInfoReducer";
import charactersCommentsReducer from './characterComments/charactersCommentsReducer';

const reducer = combineReducers({
    charactersInfoReducer,
    charactersCommentsReducer
});

export default reducer;