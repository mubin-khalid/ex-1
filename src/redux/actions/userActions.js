import client from '../../utils/client';
import { FETCH_USERS, SEARCH_USERS, LOADING, RESET_USERS } from '../actionTypes/user';

export const fetchUsers = (page, nationality = 'CH', limit = 50) => async (dispatch) => {
  try {
    dispatch({
      type: LOADING,
      payload: {isLoading: true},
    });
    const users = await client.get(`?seed=abc&page=${page}&nat=${nationality}&results=${limit}`);
    dispatch({
      type: FETCH_USERS,
      payload: users.data.results,
    });
  } catch (e) {
    console.log(e.message);
  }
};

export const resetUsers = () => (dispatch) => {
  dispatch({
    type: RESET_USERS
  })
}

export const loading = (isLoading = false) => (dispatch) => {
  dispatch({
    type: LOADING,
    payload: { isLoading }
  })
}
export const searchUsers = (searchTerm) => async (dispatch) => {
  dispatch({
    type: SEARCH_USERS,
    payload: { searchTerm },
  });
};
