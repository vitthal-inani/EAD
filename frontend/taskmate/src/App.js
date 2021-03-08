import React, {useState, useCallback} from 'react';
import {
  BrowserRouter as Router,
  Route,
  Redirect,
  Switch,
} from "react-router-dom";
import Auth from './components/Auth';
import SideBar from './components/SideBar';
import Tasks from './components/Tasks';
import Dashboard from './components/Dashboard';
import InviteTeamMembers from './components/InviteTeamMembers';
import Groups from './components/Groups';


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
        <Route path="/" component={SideBar} exact />
        <Redirect to="/" />
      </Switch>
      );
  }
  else {
    routes = (
      <Switch>
        <Route path="/auth" component={Auth} exact />
        <Route path="/" exact>
          <SideBar />
        </Route>
        <Route path="/tasks" exact>
          <SideBar />
        </Route>
        <Route path="/in-progress" exact>
          <SideBar />
        </Route>
        <Route path="/invite" exact>
          <SideBar />
        </Route>
        <Route path="/groups" exact>
          <SideBar />
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
