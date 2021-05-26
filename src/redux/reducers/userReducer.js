import { FETCH_USERS, SEARCH_USERS, RESET_USERS, LOADING } from '../actionTypes/user';

const initialState = {
  users: [],
  hasMore: true,
  pageNo: 1,
  loading: false,
  searchTerm: '',
};
export default (state = initialState, action) => {
  switch (action.type) {
    case FETCH_USERS:
      return {
        ...state,
        users: [...state.users, ...action.payload],
        hasMore: state.users.length < 999,
        pageNo: state.pageNo + 1,
        loading: false,
      };

    case SEARCH_USERS: {
      return {
        ...state,
        searchTerm: action.payload.searchTerm,
      }
    }

    case RESET_USERS: {
      return {
        ...initialState
      }
    }

    case LOADING: {
      return {
        ...state,
        loading: action.payload.isLoading
      }
    }
    default:
      return state;
  }
};
