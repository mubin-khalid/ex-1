import React from 'react';
import { useDispatch } from "react-redux";
import { searchUsers } from '../../redux/actions/userActions';
import HeaderComponent from '../../component/Search/SearchComponent';

const SearchContainer = () => {
  const dispatch = useDispatch();
  const handleSearchTerm = (e) => {
    dispatch(searchUsers(e.target.value))
  };
  return <HeaderComponent handleSearchTerm={handleSearchTerm} />;
};

export default SearchContainer;
