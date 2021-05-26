import React from 'react';
import {
  Layout, Affix, Input, Row, Col,
} from 'antd';
import PropTypes from 'prop-types';

const {
  Header,
} = Layout;
const SearchComponent = ({ handleSearchTerm }) => (
  <Affix>
    <Row
      justify="center"
      gutter={10}
      align="middle"
      className="search"
    >
      <Col
        span={12}
      >
        <Input placeholder="Search" onChange={handleSearchTerm} />
      </Col>
    </Row>
  </Affix>
);

Header.propTypes = {
  handleSearchTerm: PropTypes.func,
};
export default SearchComponent;
