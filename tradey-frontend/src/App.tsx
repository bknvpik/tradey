import { useState } from 'react';
import { BrowserRouter, Route, Switch } from 'react-router-dom';
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
import EditProfile from './pages/EditProfile';
import NotFound from './components/NotFound';
import ProtectedRoute from './components/ProtectedRoute';
import { AuthContext } from './components/AuthContext';
import { Redirect } from 'react-router';

export default function App() {
  const [logged, setLogged] = useState(false);

  return (
    <div className="App">
    <AuthContext.Provider value={{ logged, setLogged }}>
      <BrowserRouter>
        <Nav />
        <Switch>
          <Route exact path="/">
            <Redirect to={"/login"}/>
          </Route>
          <Route path="/about" component={About} />
          <Route path="/login" component={Login} />
          <Route path="/sign-up" component={SignUp} />
          <Route path="/view-item" component={ViewItem} />
          <ProtectedRoute
            exact
            path="/browse"
            component={Browse}
          />
          <ProtectedRoute
            exact
            path="/browse/clothing"
            component={Browse}
          />
          <ProtectedRoute
            exact
            path="/browse/shoes"
            component={Browse}
          />
          <ProtectedRoute
            exact
            path="/browse/accessories"
            component={Browse}
          />
          <ProtectedRoute
            exact
            path="/browse/others"
            component={Browse}
          />
          <ProtectedRoute
            exact
            path="/add-item"
            component={AddItem}
          />
          <ProtectedRoute
            exact
            path="/view-profile"
            component={ViewProfile}
          />
          <ProtectedRoute
            exact
            path="/view-profile/my-offers"
            component={MyOffers}
          />
          <ProtectedRoute
            exact
            path="/view-profile/my-items"
            component={MyItems}
          />
          <ProtectedRoute
            exact
            path="/view-profile/edit-profile"
            component={EditProfile}
          />
          <ProtectedRoute
            exact
            path="/make-offer"
            component={MakeOffer}
          />
          <ProtectedRoute
            exact
            path="/sign-out"
            component={SignOut}
          />
          <Route path="*" component={NotFound} />
        </Switch>
      </BrowserRouter>
    </AuthContext.Provider>
    </div>
  );
}
