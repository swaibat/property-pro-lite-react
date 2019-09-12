import React from 'react';
import Nav from './includes/nav';
import Footer from './includes/footer';
import Home from './pages/index';
import Dashboard from './pages/dashboard';
import Ads from './pages/all_ads';
import Ad from './pages/specific_ad';
import CreateAd from './pages/createAd';
import EditAd from './pages/editAd';
import MyAds from './pages/myAds';
import { BrowserRouter as Router, Switch, Route } from 'react-router-dom';


function App() {
  return (
    <Router>
      <div className={App}>
      <div id="bg" className="bg"></div>
        <Nav/>
          <Switch>
            <Route path="/" exact component={Home}/>
            <Route path="/dashboard" component={Dashboard}/>
            <Route path="/ads" component={Ads}/>
            <Route path="/ad" component={Ad}/>
            <Route path="/create-ad" component={CreateAd}/>
            <Route path="/edit-ad" component={EditAd}/>
            <Route path="/my-ads" component={MyAds}/>
          </Switch>
          <Footer/>
      </div>
      </Router>
    );
}

export default App;