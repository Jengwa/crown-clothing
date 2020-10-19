import React, { useEffect } from 'react';
import { Route, Switch, Redirect } from 'react-router-dom';
import { connect } from 'react-redux';
import { createStructuredSelector } from 'reselect'



import HomePage from './pages/Home-page/HomePage';
import ShopPage from './pages/shop/ShopPage';
import CheckoutPage from './pages/checkout/CheckoutPage'
import SignInAndSignUp from './pages/signin-and-sign-up/SignInAndSignUp';
import Header from './components/header/Header';
import ContactsAndAddress from './pages/contacts-and-address/contacts-and-address';




import { selectCurrentUser } from './redux/user/user.selector';
import { checkUserSession } from './redux/user/user.action';
import { GlobalStyles } from './global.styles';




const App = ({ checkUserSession, currentUser}) => {

  useEffect(() => {
    checkUserSession()
  }, [checkUserSession])


    return (
      <div>
        <GlobalStyles />
        <Header />
        <Switch>
          <Route exact path='/' component={HomePage} />
          <Route path='/shop' component={ShopPage} />
          <Route exact path='/checkout' component={CheckoutPage} />
          <Route exact path='/contacts' component={ContactsAndAddress}/>
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

