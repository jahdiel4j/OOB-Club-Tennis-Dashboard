import React from 'react'
import Navbar from './components/Navbar';
import { BrowserRouter as Router, Switch, Route } from 'react-router-dom';
import './App.css';
import Home from './components/pages/Home';
import Events from './components/pages/Events'
import Ladder from './components/pages/Ladder'
import Donate from './components/pages/Donate'
import Login from './components/pages/Login'


function App() {
  return (
    <>
      <Router>
        <Navbar />
        <Switch>
          <Route path='/' exact component={Home} />
          <Route path='/events' component={Events} />
          <Route path='/ladder' component={Ladder} />
          <Route path='/donate' component={Donate} />
          <Route path='/login' component={Login} />
        </Switch>
      </Router>
    </>
  );
}

export default App;
