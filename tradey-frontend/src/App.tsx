import React, { Component } from 'react';
import { BrowserRouter as Router, Route, Switch, Redirect } from 'react-router-dom';
import './styles/App.scss';
import Nav from './components/Nav';
import Browse from './pages/Browse';
import About from './pages/About';
import Login from './pages/Login';
import SignUp from './pages/SignUp';
import AddItem from './pages/AddItem';
import ViewProfile from './pages/ViewProfile';
import MakeOffer from './pages/MakeOffer';
import MyItems from './pages/MyItems';
import SignOut from './components/SignOut';
import ViewItem from './pages/ViewItem';
import MyOffers from './pages/MyOffers';

export default class App extends Component {
  render() {
    return (
      <div className="App">
      <Router>
          <Nav />
          <Switch>
            <Route path="/" exact component={Browse}>
              <Redirect to="/browse" />
            </Route>
            <Route path="/browse" component={Browse} />
            <Route path="/about" component={About} />
            <Route path="/login" component={Login} />
            <Route path="/sign-up" component={SignUp} />
            <Route path="/add-item" component={AddItem} />
            <Route path="/view-profile" exact component={ViewProfile} />
            <Route path="/view-profile/my-offers" component={MyOffers} />
            <Route path="/make-offer" component={MakeOffer} />
            <Route path="/my-items" component={MyItems} />
            <Route path="/view-item" component={ViewItem} />
            <Route path="/sign-out" component={SignOut} />
          </Switch>
      </Router>
      </div>
    );
  }
}