import React from 'react';
import {BrowserRouter as Router, Route, Switch} from "react-router-dom";

import './App.css';
import Music from "./components/Music/Music";
import News from "./components/News/News";
import Settings from "./components/Settings/Settings";
import Navbar from "./components/Navbar/Navbar";
import ProfileContainer from "./components/Profile/ProfileContainer";
import {DialogsContainer} from "./components/Dialogs/DialogsContainer";
import {UsersContainer} from './components/Users/UsersContainer';
import HeaderContainer from "./components/Header/HeaderContainer";
import {Login} from "./components/Login/Login";

const App = () => {
  return (

    <Router>
      <div className='app-wrapper'>
        <HeaderContainer/>
        <Navbar/>
        <div className='content'>
          <Switch>
            <Route exact path='/profile/:userId?' component={ProfileContainer}/>
            <Route path='/dialogs' component={DialogsContainer}/>
            <Route path='/users' component={UsersContainer}/>
            <Route path='/music' component={Music}/>
            <Route path='/news' component={News}/>
            <Route path='/settings' component={Settings}/>
            <Route path='/login' component={Login}/>
          </Switch>
        </div>
      </div>
    </Router>
  );
}

export default App;