import React, { useState, useEffect } from 'react';
import { Modal, Card, Row, Col, Button } from 'antd';
import { EnvironmentTwoTone, MobileTwoTone, PhoneTwoTone } from '@ant-design/icons'

const UserCardComponent = ({ user, showUserProfile, handleUserProfileClose }) => {
  const { Meta } = Card;
  const [isModalVisible, setIsModalVisible] = useState(false);
  useEffect(() => {
    setIsModalVisible(showUserProfile);
  }, [])
  const handleOk = () => {
    setIsModalVisible(false);
    handleUserProfileClose(false);
  };

  const handleCancel = () => {
    setIsModalVisible(false);
    handleUserProfileClose(false);
  };

  return (
    <>
      <Modal
        closable={false}
        visible={isModalVisible}
        onOk={handleOk}
        onCancel={handleCancel}
        footer={[
          <Button key="ok" type="primary" onClick={handleOk}>Close</Button>
        ]}
      >
        <Card
          cover={<img alt={user.name.first} src={user.picture.large} />}
        >
          <Meta
            title={`${user.name.first} ${user.name.last}`}
            description={
              <>
                <Row>
                  <Col flex="20px">
                    <EnvironmentTwoTone />
                  </Col>
                  <Col flex="auto">
                    {user.location.street.name}, {user.location.street.number}
                  </Col>
                </Row>
                <Row>
                  <Col flex="20px"/>
                  <Col flex="auto">{user.location.city}, {user.location.state}, {user.location.postcode}</Col>
                </Row>
                <Row>
                  <Col flex='20px' />
                  <Col flex='auto'>{user.location.country}</Col>
                </Row>
                <Row>
                  <Col flex='20px'><MobileTwoTone /></Col>
                  <Col>{user.cell}</Col>
                </Row>

                <Row>
                  <Col flex='20px'><PhoneTwoTone /></Col>
                  <Col>{user.phone}</Col>
                </Row>

              </>
            }
          />
        </Card>
      </Modal>
    </>
  );

}

export default UserCardComponent;