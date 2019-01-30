import axios from "axios";

export const FETCHING = "FETCHING";
export const SUCCESS = "SUCCESS";
export const FAILURE = "FAILURE";

export const getChars = (page) => dispatch => {
    dispatch({ type: FETCHING});
    axios
        .get(`${page}`)
        .then(res => dispatch({ type: SUCCESS, payload: res.data }))
        .catch(err => dispatch({ type: FAILURE, payload: err }))
}
