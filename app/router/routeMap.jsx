import React from 'react'
import { Router, Route, IndexRoute, Redirect } from 'react-router'
import { socket, signin } from '../actions';
import store from '../store'

import App from '../containers'
import Chat from '../containers/Chat';
import Sign from '../containers/Sign';
import Loading from '../components/Loading';

class RouterMap extends React.Component {
  requireUser(store) {
    return (nextState, replace) => {
      if (!store.getState().get('user')) {
        replace('/loading');
        const user = JSON.parse(localStorage.getItem('user'));
        if (user) {
          store.dispatch(signin(user, true));
        } else {
          replace('/sign');
        }
      }
    };
  };

  render() {
    return (
      <Router history={this.props.history}>
        <Route path='/' component={App}>
          <IndexRoute component={Chat} onEnter={this.requireUser(store)} />
          <Route path='/sign' component={Sign} />
          <Route path='/loading' component={Loading} />
          <Redirect from='*' to='/' />
        </Route>
      </Router>
    )
  }
}

export default RouterMap
