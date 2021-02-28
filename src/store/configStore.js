import {applyMiddleware, createStore} from "redux";
import rootReducer from "./rootReducer";
import thunk from 'redux-thunk';
import {composeWithDevTools} from "redux-devtools-extension";
import initialStore from "./initialStore";

const store = createStore(
    rootReducer,
    initialStore,
    composeWithDevTools(
        applyMiddleware(thunk)
    )
);

export default store;

