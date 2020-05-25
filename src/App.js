import React, { Component } from 'react';
import { Route, Switch } from 'react-router-dom';

import './App.css';

import HomePage from './pages/Home-page/HomePage';
import ShopPage from './pages/shop/ShopPage';
import Header from './components/header/Header';
import SignInAndSignUp from './pages/signin-and-sign-up/SignInAndSignUp';
  import { auth, createUserProfileDocument } from './firebase/FirebaseUtils';



class App extends Component {
  constructor(){
    super();

    this.state = {
      currentUser: null
    }
  }

  unsubscribeFromAuth = null;

  componentDidMount(){
    this.unsubscribeFromAuth = auth.onAuthStateChanged(async userAuth => {
      if(userAuth) {
        const userRef = await createUserProfileDocument(userAuth)

        userRef.onSnapshot(snapShot => {
          this.setState({
            currentUser: {
              id: snapShot.id,
              ...snapShot.data()
            }
          })
          
        })
        
      }
      else {
        this.setState({currentUser: userAuth})
      }
    })
  }

  componentWillUnmount() {
    this.unsubscribeFromAuth();
  }

  render() {
    return (
      <div>
        <Header currentUser={this.state.currentUser}/>
        <Switch>
          <Route exact path='/' component={HomePage} />
          <Route  path='/shop' component={ShopPage} />
          <SignInAndSignUp path='/signin' component={SignInAndSignUp} />
        </Switch>
      </div>
   );
  }
}



export default App;
