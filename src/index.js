import React, { useEffect } from "react";
import ReactDOM from "react-dom";
import { BrowserRouter, Route, Switch, Redirect } from "react-router-dom";
import { Provider, connect } from "react-redux";

import store from "src/redux/store";
import { setCurrentUserAction } from "src/redux/user/userActions";

import { selectCurrentUser } from "src/redux/user/userSelectors";

import { auth, createAuthenticatedUserRef } from "src/firebase/util";

import Header from "src/components/header/Header";

import HomePage from "src/page/home-page/HomePage";
import ShopPage from "src/page/shop-page/ShopPage";
import AuthPage from "src/page/auth-page/AuthPage";

import "src/index.css";

const App = ({ currentUser, setCurrentUser }) => {
  useEffect(() => {
    // Firebase auth subscription listens to authentication
    // changes and returns new auth state via the callback.
    // onAuthStateChanged returns a callback we can use
    // to close the subscription once our application
    // node is removed from the DOM.
    const authUnsubscribeListener = auth.onAuthStateChanged(
      async (authenticatedUser) => {
        if (!authenticatedUser) {
          setCurrentUser(null);
          return;
        }

        const userRef = await createAuthenticatedUserRef(authenticatedUser);
        userRef.onSnapshot((snapShot) => {
          const snapShotData = snapShot.data();
          const currentUser = {
            id: snapShot.id,
            ...snapShotData,
          };
          setCurrentUser(currentUser);
        });
      }
    );
    // unsubscribe from the auth subscription once the component unmounts
    return () => authUnsubscribeListener();
  }, [setCurrentUser]);

  const renderComponentForSignInRoute = () => {
    if (!currentUser) {
      return <AuthPage />;
    }
    return <Redirect to="/" />;
  };

  return (
    <div>
      <Header />
      <Switch>
        <Route exact path="/" component={HomePage} />
        <Route path="/shop" component={ShopPage} />
        <Route exact path="/signin" render={renderComponentForSignInRoute} />
      </Switch>
    </div>
  );
};

const mapStateToProps = (state) => ({
  currentUser: selectCurrentUser(state),
});

const mapDispatchToProps = (dispatch) => ({
  setCurrentUser: (user) => dispatch(setCurrentUserAction(user)),
});

const ConnectedApp = connect(mapStateToProps, mapDispatchToProps)(App);

ReactDOM.render(
  <React.StrictMode>
    <Provider store={store}>
      <BrowserRouter>
        <ConnectedApp />
      </BrowserRouter>
    </Provider>
  </React.StrictMode>,
  document.getElementById("root")
);
