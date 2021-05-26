import React from 'react';
import PropTypes from 'prop-types';
import { Layout } from 'antd';
import HeaderComponent from '../component/common/Header/HeaderComponent';

const {
  Content,
} = Layout;
const BaseLayout = ({ children }) => (
  <div className="container">
    <Layout>
      <HeaderComponent />
      <Content>{ children }</Content>
    </Layout>
  </div>
);
BaseLayout.propTypes = {
  children: PropTypes.instanceOf(Object).isRequired,
};
export default BaseLayout;
