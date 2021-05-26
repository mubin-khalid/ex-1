import React from 'react';
import HeaderComponent from '../../component/common/Header/HeaderComponent';

const HeaderContainer = () => {
  const handleSearchTerm = (e) => {
    console.log(e.target.value);
  };
  return <HeaderComponent handleSearchTerm={handleSearchTerm} />;
};

export default HeaderContainer;
