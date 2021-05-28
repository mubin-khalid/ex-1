import React, { useRef } from "react";
import { useSelector, useDispatch } from 'react-redux';
import { useEffect, useState } from 'react';
import { Col, Row, Skeleton } from 'antd';
import { fetchUsers } from '../../redux/actions/userActions';
import HomeComponent from '../../component/Home/HomeComponent';
import SearchContainer from '../Search/SearchContainer';
import UserCardComponent from '../../component/UserCard/UserCardComponent';
import { filterUsers, isEmpty } from '../../redux/filter/userFilter';

const HomeContainer = () => {
  const dispatch = useDispatch();
  const observer = useRef();
  const users = useSelector(state => filterUsers(state));
  const loading = useSelector((state) => state.userState.loading);
  const nationality = useSelector((state) => state.settingsState.nationality);
  const pageNo = useSelector((state) => state.userState.pageNo);
  const searchTerm = useSelector(state => isEmpty(state.userState.searchTerm));
  const hasMore = useSelector((state) => state.userState.hasMore);
  const  [profile, setProfile]  = useState(false);
  const  [user, setUser]  = useState({});

  useEffect(() => {
    if(!users.length && !loading && searchTerm) {
      dispatch(fetchUsers(pageNo, nationality, 100));
    }
  }, [users, loading]);

  const handleUserProfileClose = (showProfile) => {
    setProfile(showProfile);
  }
  const userProfile = (user) => {
    setUser(user);
    setProfile(true);
  }
  const lastRow = (node) => {
    if (loading) return;
    if (observer.current) {
      observer.current.disconnect();
    }
    observer.current = new IntersectionObserver((entries) => {
      if (entries[0].isIntersecting) {
        if (hasMore) {
          dispatch(fetchUsers(pageNo, nationality));
        }
      }
    });
    if (node) {
      observer.current.observe(node);
    }
  };
  return (
    <>
      <SearchContainer />
      {
        users.length > 1 ?
          <>
            <HomeComponent users={users} userProfile={userProfile}/>
            {
              searchTerm ? <div ref={lastRow} />: <></>
            }

            {
              hasMore && searchTerm ?
                <Skeleton
                  className="skeleton-size"
                  active={true}
                  size={'large'}
                />:
                <Row className="message">
                  <Col span={24}>No More Results.</Col>
                </Row>
            }
          </>:
          searchTerm ?
            <></>:
            <Row className="message">
              <Col span={24}>No Record Found.</Col>
            </Row>

      }
      {profile ? <UserCardComponent
        handleUserProfileClose={handleUserProfileClose}
        showUserProfile={profile}
        user={user}
      />:
      <></>
      }
    </>
  );
};


export default HomeContainer;
