import React from "react";
import ReactDOM from "react-dom";
import { BrowserRouter, Route, Switch } from "react-router-dom";

import Header from "src/components/header/Header";

import HomePage from "src/page/home-page/HomePage";
import ShopPage from "src/page/shop-page/ShopPage";
import AuthPage from "src/page/auth-page/AuthPage";

import { auth } from "src/firebase/util";

import "src/index.css";

class App extends React.Component {
  constructor() {
    super();
    this.state = {
      // eslint-disable-next-line react/no-unused-state
      currentUser: null,
    };
    this.unsubscribeAuthStateSubscription = null;
  }

  componentDidMount() {
    // Firebase auth subscription listens to authentication
    // changes and returns new auth state via the callback.
    // onAuthStateChanged returns a callback we can use
    // to close the subscription once our application
    // node is removed from the DOM.
    this.unsubscribeAuthStateSubscription = auth.onAuthStateChanged(
      (currentUser) => {
        this.setState(currentUser);
      }
    );
  }
  componentWillUnmount() {
    this.unsubscribeAuthStateSubscription();
  }

  render() {
    return (
      <div>
        <Header />
        <Switch>
          <Route exact path="/" component={HomePage} />
          <Route path="/shop" component={ShopPage} />
          <Route path="/signin" component={AuthPage} />
        </Switch>
      </div>
    );
  }
}

ReactDOM.render(
  <React.StrictMode>
    <BrowserRouter>
      <App />
    </BrowserRouter>
  </React.StrictMode>,
  document.getElementById("root")
);
