// action type
export const IMPORT_ALL_MOVIES = "IMPORT_ALL_MOVIES";
export const ADD_FAV = "ADD_FAV";
export const DELETE_FAV = "DELETE_FAV";
export const SET_SHOW = "SET_SHOW"; // set which section to display: all,fav,search
export const SEARCH_MOVIE = "SEARCH_MOVIE";

// action creator
export const importAllMovies = (data) => {
  // return a full action
  return {
    type: IMPORT_ALL_MOVIES,
    movies: data,
  };
};
export const addFav = (movie) => {
  return {
    type: ADD_FAV,
    movie: movie,
  };
};
export const deleteFav = (movie) => {
  return {
    type: DELETE_FAV,
    movie: movie,
  };
};
export const setShow = (value) => {
  return {
    type: SET_SHOW,
    value,
  };
};
export const searchMovie = (name) => {
  return {
    type: SEARCH_MOVIE,
    name,
  };
};
