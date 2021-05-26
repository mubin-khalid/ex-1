import React from 'react';
import { Col, Row, Card, Avatar } from 'antd';
import PropTypes from 'prop-types';
import { MailOutlined, UserOutlined }  from '@ant-design/icons';

const { Meta } = Card;
const HomeComponent = ({ users, userProfile }) => {
  return (
      <Row justify="center"
           gutter={16}
           className="user-container"
      >
      {
        users.map((user, index) => (
              <Col span={8} className="center" key={index}>
                <Card style={{ width: 400, marginTop: 16 }}>
                  <Meta
                    avatar={
                      <Avatar src={user.picture.thumbnail} />
                    }
                    title={
                      <a onClick={() =>userProfile(user)}>
                        <span>{user.name.first}</span>
                        &nbsp;
                        <span>{user.name.last}</span>
                      </a>
                    }
                    description={
                      <>
                        <Row justify='center'>
                          <Col><UserOutlined /> {user.login.username}</Col>
                        </Row>
                        <Row>
                          <Col flex='auto'><MailOutlined /> {user.email}</Col>
                        </Row>
                      </>
                    }
                  />
                </Card>
              </Col>

          )
        )
      }
      </Row>
  );
};
HomeComponent.propTypes = {
  users: PropTypes.arrayOf(PropTypes.object).isRequired,
};
export default HomeComponent;
