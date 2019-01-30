import { FETCHING, SUCCESS, FAILURE } from "../actions";
const initialState = {
  characters: [],
  fetching: false,
  error: null,
  previous: null,
  next: null,
};
export const charsReducer = (state = initialState, action) => {
  switch (action.type) {
    case FETCHING:
      return {
        ...state,
        characters: [],
        fetching: true,
        error: null
      }
    case SUCCESS:
      return {
        ...state,
        characters: action.payload.results,
        fetching: false,
        error: null,
        previous: action.payload.previous,
        next: action.payload.next,
      }
    case FAILURE:
      return {
        ...state,
        characters: [],
        fetching: false,
        error: action.payload
      }
    default:
      return state;
  }
};
