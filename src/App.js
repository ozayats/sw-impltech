import React, {useEffect} from 'react';
import {useDispatch} from 'react-redux';
import './App.scss';
import AppRoutes from './routes/AppRoutes';
import getCharactersInfo from "./store/charactersInfo/getCharactersInfo";


const App = () => {

    const dispatch = useDispatch();

    useEffect(() => {
        dispatch(getCharactersInfo('http://swapi.dev/api/people/'));
    }, [dispatch]);

    return (
        <div className="App">
            <AppRoutes/>
        </div>
    );
};

export default App;
