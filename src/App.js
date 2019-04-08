import React, { Component } from 'react';
import './App.css';
import { Router, Switch, Route} from 'react-router-dom';
import { Horses } from './horses/horse.component';
import { AddHorse } from './horses/addhorse.component'
import { Login } from './login/';
import { Home } from './home/';
import { Profile } from './profile/';
import { history } from './_helpers';
import { PrivateRoute } from './_components';


class App extends Component {
  render() {
    return (
      <div className="App">
        <Router history={history}>
          <div>            
              <Switch>
                <PrivateRoute exact path='/home' component={Home} />
                <PrivateRoute exact path='/profile' component={Profile} />
                <PrivateRoute exact path='/horses' component={Horses} />
                <PrivateRoute exact path='/add-horse' component={AddHorse} />
                <PrivateRoute exact path='/edit-horse/:id' component={AddHorse} />
                <Route exact path='/' component={Login} />
              </Switch>
          </div>
        </Router>
      </div>
    );
  }
}

export default App;
