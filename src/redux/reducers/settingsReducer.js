import NATIONALITY  from "../actionTypes/settings.js";
const initialState = {
  nationality: "CH",
};

export default (state = initialState, action) => {
  switch (action.type) {
    case NATIONALITY:
      return {
        ...state,
        nationality: action.payload.nationality,
      };
    default:
      return state;
  }
}