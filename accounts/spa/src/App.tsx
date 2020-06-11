import React from 'react';
import { Redirect, Route, Switch } from 'react-router-dom';
import Homepage from './pages/homepage/Homepage';

type Props = {};

const App: React.FC<Props> = () => {

    const routes = (
        <Switch>
            <Route path="/" exact component={Homepage} />
            <Redirect to="/" />
        </Switch>
    );

    return routes;
};

export default App;
