import React, { Component } from 'react';
import { BrowserRouter as Router, Route, Switch } from 'react-router-dom';
import './styles/App.scss';
import Nav from './components/Nav';
import Footer from './components/Footer';
import Browse from './pages/Browse';
import About from './pages/About';
import Login from './pages/Login';
import SignUp from './pages/SignUp';
import AddItem from './pages/AddItem';


export default class App extends Component {
  render() {
    return (
      <Router>
        <div className="App">
          <Nav />
          <Switch>
            <Route path="/" exact component={Home}/>
            <Route path="/browse" component={Browse} />
            <Route path="/about" component={About} />
            <Route path="/login" component={Login} />
            <Route path="/sign-up" component={SignUp} />
            <Route path="/add-item" component={AddItem} />
          </Switch>
        </div>
      </Router>
    );
  }
}

const Home = () => {
  return (
    <div className="home">
      Browse page with items in default caetgory
    </div>
  )
}
