import React from 'react';
import Nav from './includes/nav';
import Footer from './includes/footer';
import Home from './pages/index';
import Dashboard from './pages/dashboard';

import { BrowserRouter as Router, Switch, Route } from 'react-router-dom';

function App() {
  return (
    <Router>
      <div className={App}>
        <Nav/>
          <Switch>
            <Route path="/" exact component={Home}/>
            <Route path="/dashboard" component={Dashboard}/>
          </Switch>
          <Footer/>
      </div>
      </Router>
    );
}

export default App;