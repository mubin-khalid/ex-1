import React from 'react';
import { useDispatch } from 'react-redux';
import setNationality from '../../redux/actions/settingActions';
import SettingsComponent from '../../component/Settings/SettingsComponent';
import { resetUsers } from '../../redux/actions/userActions';
export default () => {
  const dispatch = useDispatch();
  const handleChange = (nationality) => {
    dispatch(setNationality(nationality))
    dispatch(resetUsers())
  }
  return (
    <SettingsComponent handleChange={handleChange} />
  );
}