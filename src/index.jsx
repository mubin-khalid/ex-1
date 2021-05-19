import React from 'react';
import ReactDOM from 'react-dom';
import { Row, Col } from 'antd';
import './index.less';

const style = { background: '#0092ff', padding: '8px 0' };
const Welcome = () => (
  <Row
    justify="center"
    gutter={
    {
      xs: 8, sm: 16, md: 24, lg: 32,
    }
           }
  >
    <Col className="gutter-row" span={6}>
      <div style={style}>col-6</div>
    </Col>
    <Col className="gutter-row" span={6}>
      <div style={style}>col-6</div>
    </Col>
    <Col className="gutter-row" span={6}>
      <div style={style}>col-6</div>
    </Col>
    <Col className="gutter-row" span={6}>
      <div style={style}>col-6</div>
    </Col>
  </Row>
);

ReactDOM.render(<Welcome />, document.getElementById('root'));
