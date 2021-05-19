import React from 'react';
import { Provider } from 'react-redux';
import { BrowserRouter as Router, Switch, Route } from 'react-router-dom';
import store from './redux/store';
import HomeContainer from './container/Home/HomeContainer';
import './index.less';

export default () => (
  <Provider store={store}>
    <Router>
      <Switch>
        <Route exact path="/" component={HomeContainer} />
      </Switch>
    </Router>
  </Provider>
);
