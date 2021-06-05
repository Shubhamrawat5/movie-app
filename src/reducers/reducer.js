import { combineReducers } from "redux";

// import all action types
import {
  ADD_FAV,
  DELETE_FAV,
  IMPORT_ALL_MOVIES,
  SET_SHOW,
  SEARCH_MOVIE,
} from "../actions/action";

const intitalMovieState = {
  all_movies: [],
  fav_movies: [],
  search_result: [],
  show: "ALL",
};
const moviesReducer = (state = intitalMovieState, action) => {
  switch (action.type) {
    case IMPORT_ALL_MOVIES:
      return { ...state, all_movies: action.movies };
    case ADD_FAV:
      return { ...state, fav_movies: [action.movie, ...state.fav_movies] };
    case DELETE_FAV:
      let updated_fav_movies = state.fav_movies.filter(
        (movie) => movie !== action.movie
      );
      return { ...state, fav_movies: updated_fav_movies };
    case SET_SHOW:
      return { ...state, show: action.value };
    case SEARCH_MOVIE:
      let result = [];
      const name = action.name.toLowerCase();
      state.all_movies.forEach((movie) => {
        if (movie.Title.toLowerCase().includes(name)) result.push(movie);
      });
      return { ...state, search_result: result };
    default:
      return state;
  }
};

const initialSearchState = { result: [], showSearchResult: false };
const searchReducer = (state = initialSearchState, action) => {
  return state;
};

// handling multiple reducers to a single root reducer, easy to add more types of reducer from this
// const initialRootState = {
//   movies: intitalMovieState,
//   search_result: initialSearchState,
// };
// const rootReducer = (state = initialRootState, action) => {
//   return {
//     movies: moviesReducer(state.movies, action),
//     search_result: searchReducer(state.search_result, action),
//   };
// };

// export default rootReducer;

// rootReducer = {
//   movies(reducer):{all_movies:[],fav_movies:[],show:"ALL"},
//   search_result(reducer):{result:{}},
// }

export default combineReducers({
  movies: moviesReducer,
  search_result: searchReducer,
});
