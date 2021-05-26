import React from 'react';
import { Provider } from 'react-redux';
import { BrowserRouter as Router, Switch } from 'react-router-dom';
import Route from './routes/Route';
import store from './redux/store';
import HomeContainer from './container/Home/HomeContainer';
import SettingsContainer from './container/Settings/SettingsContainer';
import './index.less';
import ErrorBoundary from './component/common/ErrorBoundry/ErrorBoundry';

export default () => (
  <Provider store={store}>
    <Router>
      <ErrorBoundary>
        <Switch>
          <Route exact path="/" component={HomeContainer} />
          <Route exact path="/settings" component={SettingsContainer} />
        </Switch>
      </ErrorBoundary>
    </Router>
  </Provider>
);
