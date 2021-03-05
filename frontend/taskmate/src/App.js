import React, {useState, useCallback} from 'react';
import SplitPane from 'react-split-pane';
import {
  BrowserRouter as Router,
  Route,
  Redirect,
  Switch,
} from "react-router-dom";
import Register from './components/Register';
import Login from './components/Login';
import SideBar from './components/SideBar';
import PageNotFound from './components/PageNotFound';
import Tasks from './components/Tasks';
import Dashboard from './components/Dashboard';
import InviteTeamMembers from './components/InviteTeamMembers';


function App() {
  const [isLoggedIn, setIsLoggedIn] = useState(false);
  const login = useCallback(() => {
    setIsLoggedIn(true);
  }, []);

  const logout = useCallback(() => {
    setIsLoggedIn(false);
  }, []);

  let routes;
  const styles = {
    background: '#000',
    width: '2px',
    cursor: 'col-resize',
    margin: '0 5px',
    height: '100%',
  };

  if (isLoggedIn){
    routes = (
      <Switch>
        <Route path="/404" component={PageNotFound} exact />
        <Route path="/" component={SideBar} exact />
        <Redirect to="/" />
      </Switch>
      );
  }
  else {
    routes = (
        <Switch>
        <Route path="/login" component={Login} exact />
        <Route path="/register" component={Register} exact />
        <Route path="/" exact>
          <SideBar component={<Dashboard />} />
        </Route>
        <Route path="/404" component={PageNotFound} exact />
        <Route path="/tasks" exact>
          <SideBar component={<Tasks />} />
        </Route>
        <Route path="/invite" exact>
          <SideBar component={<InviteTeamMembers />} />
        </Route>
        <Redirect to="/login" />
      </Switch>
      )
  }
  return (
    <Router>
      <main>{routes}</main>
    </Router>
  );
}

export default App;
