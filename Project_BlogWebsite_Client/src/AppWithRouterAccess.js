import React from 'react';
import {Box} from '@material-ui/core'
import { Route, useHistory, Switch } from 'react-router-dom';
import { Security, SecureRoute, LoginCallback } from '@okta/okta-react';
import { OktaAuth, toRelativeUrl } from '@okta/okta-auth-js';

import './App.css';
import Header from './Components/Header';
import Home from './Components/Home/Home';
import DetailView from './Components/post/DetailView';
import CreateView from './Components/post/CreateView';
import UpdateView from './Components/post/UpdateView';
import Login from './Components/account/Login';

import { oktaAuthConfig, oktaSignInConfig } from './config';

const oktaAuth = new OktaAuth(oktaAuthConfig);

function AppWithRouterAccess() {
  const history = useHistory();

  const customAuthHandler = () => {
    history.push('/login');
  };

  const restoreOriginalUri = async (_oktaAuth, originalUri) => {
    history.replace(toRelativeUrl(originalUri, window.location.origin));
  };


  return (
    <Security
    oktaAuth={oktaAuth}
    onAuthRequired={customAuthHandler}
    restoreOriginalUri={restoreOriginalUri}
  >
   <SecureRoute path='/' component={Header} />
   <Box style={{marginTop:64}}>
     <Switch>
     <Route exact path='/' component={Home}/>
     <Route path='/login' render={() => <Login config={oktaSignInConfig} />} />
     <Route path='/login/callback' component={LoginCallback} />
     <Route exact path='/details/:id' component={DetailView}/>
     <Route exact path='/create' component={CreateView}/>
     <Route exact path='/update/:id' component={UpdateView}/>
     </Switch>
  
   </Box>
  </Security>
  )
}

export default AppWithRouterAccess;