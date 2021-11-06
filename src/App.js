import React from "react";
import { Route, Switch, Redirect } from "react-router-dom";
import Ingreso from './components/Ingreso';
import Main from './components/Main';
import NotFound from './components/NotFound';
import Validate from './components/Validate';
function App() {
    return (
        <>
            <Switch>
                <Route
                path="/login"
                component={(props) => <Ingreso {...props} />}
                // render={(...props) => <Login handleUser={handleUser} {...props} />}
                />
                <Route
                path="/validate"
                component={(props) => <Validate {...props} />}
                // render={(...props) => <Login handleUser={handleUser} {...props} />}
                />
                <Route
                path="/"
                component={(props) => <Main {...props} />}
                // render={(...props) => <SignUp handleUser={handleUser} {...props} />}
                />
                <Route path="/not-found" component={NotFound} />
                <Redirect to="/not-found" />
            </Switch> 
        </>
    );
}

export default App;
