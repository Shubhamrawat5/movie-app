import React from "react";
import Navbar from "./Navbar";
import MovieCard from "./MovieCard";
import { data } from "../data.js";
import { addMovies } from "../actions/action";

class App extends React.Component {
  componentDidMount() {
    const store = this.props.store;
    console.log(store.getState());

    store.subscribe(() => {
      console.log("STORE UPDATED====!");
      this.forceUpdate();
    });

    // store.dispatch({
    //   type: "ADD_MOVIES",
    //   movies: data,
    // });
    //addMovies is a action creator
    store.dispatch(addMovies(data));
    console.log(store.getState());
  }
  render() {
    let movies = this.props.store.getState();
    return (
      <React.Fragment>
        <Navbar />

        <section>
          <div id="tabs">
            <div className="movies-list-section tab">Movies</div>
            <div className="favourite-section tab">Favourite</div>
          </div>
          <div id="movie-list">
            {movies.map((movie, index) => {
              // console.log(movie);
              return <MovieCard movie={movie} key={`movie-${index}`} />;
            })}
          </div>
        </section>
      </React.Fragment>
    );
  }
}

export default App;
