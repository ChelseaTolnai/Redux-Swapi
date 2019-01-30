import { FETCHING, SUCCESS, FAILURE } from "../actions";
const initialState = {
  characters: [],
  fetching: false,
  error: null,
  // Array characters, Boolean fetching, null error.
};
export const charsReducer = (state = initialState, action) => {
  switch (action.type) {
    // Fill me in with the important reducers
    // action types should be FETCHING, SUCCESS and FAILURE
    // your switch statement should handle all of these cases.
    case FETCHING:
      console.log("Fetching:", action)
      return {
        ...state,
        fetching: true,
        error: null
      }
    case SUCCESS:
      console.log("Success:", action)
      return {
        ...state,
        characters: action.payload,
        fetching: false,
        error: null
      }
    case FAILURE:
      console.log("Failure:", action)
      return {
        ...state,
        fetching: false,
        error: action.payload
      }
    default:
      return state;
  }
};
