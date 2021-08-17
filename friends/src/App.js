import './App.css';
import { BrowserRouter as Router, Link, Route, Switch } from 'react-router-dom';
import React, {useEffect} from 'react'
import { connect } from 'react-redux';

import { login } from './actions/authActions';

import Login from './components/Login';
import Logout from './components/Logout';
import PrivateRoute from './components/PrivateRoute'
import Friends from './components/Friends';

function App(props) {
  useEffect(() => {
    if (localStorage.getItem('token')){
      props.login()
    }
  }, [])

  return (
    <Router>
      <div className="App">
        <nav>
          <Link to='/login'>Login</Link>
          <Link to='/logout'>Logout</Link>
          {localStorage.getItem('token') ?
            <Link to='/friends'>Friends</Link> :
            <div></div>
          }
        </nav>

        <Switch>
          <Route exact path='/' component={Login} />
          <Route path='/login' component={Login} />
          <Route path='/logout' component={Logout} />
          <PrivateRoute path='/friends' component={Friends} />
        </Switch>
      </div>
    </Router>
  );
}

function mapStateToProps (state){
  return({
    isLoggedIn: state.isLoggedIn
  })
}

export default connect(mapStateToProps, {login})(App);
