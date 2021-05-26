/* eslint-disable react/jsx-props-no-spreading */
import React from 'react';
import { Route } from 'react-router-dom';
import PropTypes from 'prop-types';
import Layout from '../layout/BaseLayout';

const layoutRoute = (props) => {
  const { component: Component, ...rest } = props;
  return (
    <Layout>
      <Route
        {...rest}
        render={(prop) => <Component {...prop} />}
      />
    </Layout>
  );
};

layoutRoute.prototype = {
  component: PropTypes.instanceOf(Object).isRequired,
};

export default layoutRoute;
