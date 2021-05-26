import SET_NATIONALITY  from '../actionTypes/settings';

export default (nationality = 'CH') => (dispatch) => {
  dispatch({
    type: SET_NATIONALITY,
    payload: { nationality }
  })
}