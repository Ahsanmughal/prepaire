import React from "react";
import {BrowserRouter, Route, Switch} from "react-router-dom";
import 'bootstrap/dist/css/bootstrap.min.css';
import HomeView from './views/home.jsx';
import SignInView from './views/register/signin.jsx';
import Dashmain from './views/dashboard/view.jsx';
import MainView from './views/main/main.jsx';
import './App.css';

function App() {
  return (
    <BrowserRouter>
      <React.Fragment>
        <Switch>
          <Route exact path="/" component={MainView} />
          <Route exact path="/start" component={HomeView}></Route>
          <Route exact path="/signin" component={SignInView}/>
          <Route path="/dashboard" component={Dashmain}/>
        </Switch>
      </React.Fragment>
    </BrowserRouter>
  );
}

export default App;
