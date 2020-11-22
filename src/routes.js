import React from 'react';
import { BrowserRouter, Switch, Route} from 'react-router-dom';
import Login from './pages/Login';
// import Home from './pages/Home';

function Routes(){
    return(
        <BrowserRouter>
            <Switch>
                <Route path='/' exact component={Login} />
                {/* <Route path='/login' component={Login} /> */}
            </Switch>
        </BrowserRouter>
    )
}

export default Routes;