import { ADD_MOVIES } from "../actions/action";

const movies = (state = [], action) => {
  if (action.type === ADD_MOVIES) {
    console.log("REDUCERS", state);
    return action.movies;
  }
  return state;
};

export default movies;
