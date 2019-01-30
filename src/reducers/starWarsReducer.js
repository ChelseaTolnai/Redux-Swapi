import { FETCHING, SUCCESS, FAILURE } from "../actions";
const initialState = {
  characters: [],
  fetching: false,
  error: null,
};
export const charsReducer = (state = initialState, action) => {
  switch (action.type) {
    case FETCHING:
      return {
        ...state,
        fetching: true,
        error: null
      }
    case SUCCESS:
      return {
        ...state,
        characters: action.payload,
        fetching: false,
        error: null
      }
    case FAILURE:
      return {
        ...state,
        fetching: false,
        error: action.payload
      }
    default:
      return state;
  }
};
