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

export default class App extends Component {
  render() {
    return (
      <Router>
        <div className="App">
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
            <Route path="/view-profile" component={ViewProfile} />
            <Route path="/make-offer" component={MakeOffer} />
          </Switch>
        </div>
      </Router>
    );
  }
}