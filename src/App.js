import React, { Component } from 'react';
import { BrowserRouter as Router, Route } from 'react-router-dom'
import { Security, SecureRoute, ImplicitCallback } from '@okta/okta-react'
  
import Navbar from './components/layout/navbar'
import Home from './components/pages/home'
import Staff from './components/pages/staff'
import Login from './components/auth/login'
import './App.css';

function onAuthRequired ({history}) {
  history.push('/login ')
}
class App extends Component {
  render() {
    const config = {
      issuer: 'https://dev-210902.okta.com/oauth2/default',
      redirect_uri: `${window.location.origin}/implicit/callback`,
      client_id: '0oa11a60tmyM5CgZz357'
    }
    return (
      <Router>
        <Security 
          issuer={config.issuer}
          client_id={config.client_id}
          redirect_uri={config.redirect_uri}
          onAuthRequired={onAuthRequired}
        >
          <div className="App">
            <Navbar />
            <div className="container">
              <Route path="/" exact component={Home} />
              <SecureRoute path="/staff" exact component={Staff} />
              <Route 
                path='/login' 
                render={() => <Login baseUrl="https://dev-210902.okta.com"/>}
              />
              <Route path='/implicit/callback' component={ImplicitCallback} />   
            </div>
          </div>
        </Security>
      </Router>
    ); 
  }
}

export default App;
