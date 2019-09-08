import React from 'react';
import Nav from './includes/nav';
import Footer from './includes/footer';
import Page from './pages/index';
import Dashboard from './pages/dashboard';

import { BrowserRouter as Router, Switch, Route } from 'react-router-dom';

function App() {
  return (
    <Router>
      <div className={App}>
        <Nav/>
        <Route path="/" component={Page}/>
        <Route path="/" component={Page}/>
        <Footer/>
      </div>
    </Router>
    );
}

export default App;