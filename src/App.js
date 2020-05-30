import React, { Component } from 'react';
import { Route, Switch, Redirect } from 'react-router-dom';
import { connect } from 'react-redux'

import './App.css';

import HomePage from './pages/Home-page/HomePage';
import ShopPage from './pages/shop/ShopPage';
import Header from './components/header/Header';
import SignInAndSignUp from './pages/signin-and-sign-up/SignInAndSignUp';
import { auth, createUserProfileDocument } from './firebase/FirebaseUtils';
import { setCurrentUser } from './redux/user/user.action';



class App extends Component {


  unsubscribeFromAuth = null;

  componentDidMount(){
    const {setCurrentUser} = this.props;
    this.unsubscribeFromAuth = auth.onAuthStateChanged(async userAuth => {
      if(userAuth) {
        const userRef = await createUserProfileDocument(userAuth)

        userRef.onSnapshot(snapShot => {
          setCurrentUser({
            currentUser: {
              id: snapShot.id,
              ...snapShot.data()
            }
          })
          
        })
        
      }
      else {
        setCurrentUser(userAuth)
      }
    })
  }

  componentWillUnmount() {
    this.unsubscribeFromAuth();
  }

  render() {
    return (
      <div>
        <Header />
        <Switch>
          <Route exact path='/' component={HomePage} />
          <Route  path='/shop' component={ShopPage} />
          <Route exact path='/signin' 
            render={() => this.props.currentUser ? 
            ( <Redirect to='/' />) :
            ( <SignInAndSignUp />) }
          />
        </Switch>
      </div>
   );
  }
}

const mapStateToProps = ({user}) => ({
  currentUser: user.currentUser
})

const dispatchMapToProps = dispatch => ({
  setCurrentUser: user => dispatch(setCurrentUser(user))
})

export default connect(mapStateToProps, dispatchMapToProps)(App);
