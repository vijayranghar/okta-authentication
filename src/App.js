import React from 'react';
import { BrowserRouter as Router, Route } from 'react-router-dom'
import Navbar from './components/layout/navbar'
import Home from './components/pages/home'
import Staff from './components/pages/staff'
import './App.css';

function App() {
  return (
    <Router>
      <div className="App">
        <Navbar />
        <div className="container">
          <Route path="/" exact component={Home} />
          <Route path="/staff" exact component={Staff} />
        </div>
      </div>
    </Router>
  );
}

export default App;
