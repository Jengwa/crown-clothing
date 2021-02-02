import React, { useEffect, lazy, Suspense } from 'react';
import { Route, Switch, Redirect } from 'react-router-dom';
import { connect } from 'react-redux';
import { createStructuredSelector } from 'reselect'
import { selectCurrentUser } from './redux/user/user.selector';
import { checkUserSession } from './redux/user/user.action';

import { GlobalStyle } from './global.styles';
import Header from './components/header/Header';
import Spinner from './components/spinner/Spinner';
import ErrorBoundary from './components/error-boundary/ErrorBoundary';

const HomePage = lazy(() => import('./pages/Home-page/HomePage'));
const ShopPage = lazy(() => import('./pages/shop/ShopPage'));
const CheckoutPage = lazy(() => import('./pages/checkout/CheckoutPage'));
const SignInAndSignUp = lazy(() => import('./pages/signin-and-sign-up/SignInAndSignUp'));
const ContactAndAddress = lazy(() => import('./pages/contacts-page/contacts-and-address'));

const App = ({ checkUserSession, currentUser}) => {

  useEffect(() => {
    checkUserSession()
  }, [checkUserSession])

    return (
      <div>
        <GlobalStyle />
        <Header/>
        <Switch>
          <ErrorBoundary>
            <Suspense fallback={<Spinner />}>
              <Route exact path='/' component={HomePage} />
              <Route path='/shop' component={ShopPage} />
              <Route path='/contacts' component={ContactAndAddress} />
              <Route exact path='/checkout' component={CheckoutPage} />
              <Route
                exact
                path='/signin'
                render={() =>
                  currentUser ? (
                    <Redirect to='/' />
                  ) : (
                    <SignInAndSignUp />
                  )
                }
              />
            </Suspense>
          </ErrorBoundary>
        </Switch>
      </div>
    );
  }
const mapStateToProps = createStructuredSelector({
  currentUser: selectCurrentUser
});

const mapDispatchToProps = dispatch => ({
  checkUserSession: () => dispatch(checkUserSession())
});

export default connect(
  mapStateToProps,
  mapDispatchToProps
)(App);

