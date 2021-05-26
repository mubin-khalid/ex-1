import React from 'react';
import { Row, Col, Select, Space } from 'antd';

export default ({handleChange}) => {
  const Option = Select;
  return (
    <Row justify={'center'} className="settings">
      <Col span={12} style={{textAlign: "center"}}>
        <Space size={15}>
          <span>Nationality</span>
          <Select defaultValue="CH" onChange={handleChange} style={{ width: 200 }}>
            <Option value="CH">CH</Option>
            <Option value="ES">ES</Option>
            <Option value="FR">FR</Option>
            <Option value="GB">GB</Option>
          </Select>
        </Space>
      </Col>
    </Row>
  );
}