import React from 'react';
import { useHistory } from "react-router-dom";
import {
  Layout, Row, Col,
} from 'antd';
import { BookOutlined, HomeOutlined, SettingOutlined } from '@ant-design/icons';
import PropTypes from 'prop-types';

const {
  Header,
} = Layout;

const HeaderComponent = () => {
  const history = useHistory();
  const handleHomeNavigation = () => {
    history.push('/')
  }
  const handleSettingsNavigation = () => {
    history.push('/settings')
  }
  return (
    <Header>
      <Row
        className="header"
        gutter={10}
        align="middle"
      >
        <Col
          span={8}
          style={{color: 'white'}}
        >
          <BookOutlined
            className="nav-icon"
            onClick={handleHomeNavigation}
          />
        </Col>
        <Col
          className="menu"
          span={8}
          offset={8}
          style={{color: 'white'}}
        >
          <HomeOutlined
            className="nav-icon"
            onClick={handleHomeNavigation}
          />
          <SettingOutlined
            className="nav-icon"
            onClick={handleSettingsNavigation}
          />
        </Col>
      </Row>
    </Header>
  );
}

Header.propTypes = {
  handleSearchTerm: PropTypes.func,
};
export default HeaderComponent;
