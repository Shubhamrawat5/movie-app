import React from "react";
import Navbar from "./Navbar";
import MovieCard from "./MovieCard";
import { data } from "../data.js";

import { importAllMovies, addFav, deleteFav, setShow } from "../actions/action";

class App extends React.Component {
  store = this.props.store;
  // store = {movies:{}, search:{}}
  componentDidMount() {
    this.store.subscribe(() => {
      console.log("APP SUBS:", this.store.getState());
      this.forceUpdate();
    });

    this.store.dispatch(importAllMovies(data));
  }

  addToFavHandler = (movie) => {
    this.store.dispatch(addFav(movie));
    // console.log(movie);
  };
  deleteFromFavHandler = (movie) => {
    this.store.dispatch(deleteFav(movie));
  };

  isFav = (movie) => {
    return this.store.getState().movies.fav_movies.includes(movie);
  };

  showFavTab = (val) => {
    console.log("SHOW!", val);
    this.store.dispatch(setShow(val));
  };

  render() {
    console.log("RENDER: APP");
    const { movies } = this.store.getState(); // {movies:{}, search:{}}
    let { fav_movies, all_movies, search_result, show } = movies;
    let moviesDisplay;
    if (show === "ALL") moviesDisplay = all_movies;
    else if (show === "FAV") moviesDisplay = fav_movies;
    else moviesDisplay = moviesDisplay = search_result;

    return (
      <React.Fragment>
        <Navbar store={this.store} />

        <section>
          <div id="tabs">
            <div
              onClick={() => this.showFavTab("ALL")}
              className={`movies-list-section tab ${
                show === "ALL" ? "active" : ""
              }`}
            >
              All Movies
            </div>
            <div
              onClick={() => this.showFavTab("FAV")}
              className={`movies-list-section tab ${
                show === "FAV" ? "active" : ""
              }`}
            >
              Favourite
            </div>
            <div
              onClick={() => this.showFavTab("SEARCH")}
              className={`movies-list-section tab ${
                show === "SEARCH" ? "active" : ""
              }`}
            >
              Search
            </div>
          </div>
          <div id="movie-list">
            {moviesDisplay.map((movie, index) => {
              // console.log(movie);
              return (
                <MovieCard
                  addToFavHandler={this.addToFavHandler}
                  deleteFromFavHandler={this.deleteFromFavHandler}
                  movie={movie}
                  isFav={this.isFav(movie)}
                  key={`movie-${index}`}
                />
              );
            })}
          </div>
          {moviesDisplay.length === 0 ? <p>no movie to display!</p> : null}
        </section>
      </React.Fragment>
    );
  }
}

export default App;
