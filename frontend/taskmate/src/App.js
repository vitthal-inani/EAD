import React from 'react';
import {
  BrowserRouter as Router,
  Route,
  Redirect,
  Switch,
} from "react-router-dom";
import Register from './components/Register';
import Login from './components/Login';
import PageNotFound from './components/PageNotFound';

function App() {
  return (
    <Router>
      <Switch>
        <Route path="/login" component={Login} exact />
        <Route path="/register" component={Register} exact />
        <Route path="/404" component={PageNotFound} exact />
        <Redirect to="/login" />
      </Switch>
    </Router>
  );
}

export default App;
