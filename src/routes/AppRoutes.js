import React from 'react';
import {Route, Switch} from 'react-router-dom'
import Main from '../pages/MainPage/Main'

const AppRoutes = () => {
    return (
        <Switch>
            <Route exact path='/' component={Main}/>
        </Switch>
    );
};

export default AppRoutes;

