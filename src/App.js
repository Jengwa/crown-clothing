import React from 'react';
import './App.css';
//import HomePage from './pages/Home-page/HomePage';
import Directory from './components/directory/Directory';
import { Route, Switch } from 'react-router-dom';

const HatsPage = (props) => {
  return (
    <div>
      <h1>Hats page</h1>
    </div>
  )
}

function App() {
  return (
    <div>
      <Switch>
        <Route exact path='/' component={Directory} />
        <Route  path='/hats' component={HatsPage} />
      </Switch>

    </div>
      
  );
}

export default App;
