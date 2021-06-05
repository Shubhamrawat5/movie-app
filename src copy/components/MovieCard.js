import React from "react";

function MovieCard(props) {
  // console.log(props.movie);
  let { Poster, Title, Year, Genre, Plot, Ratings } = props.movie;
  Ratings = Ratings[0].Value.slice(0, Ratings[0].Value.search("/"));
  console.log("MOVIE CARD");
  return (
    <div className="movie-card">
      <img src={Poster} className="movie-img" alt="Poster" />
      <div className="movie-details">
        <h2 className="movie-title">{Title}</h2>
        <p className="movie-more-info">
          {Year} , {Genre}
        </p>
        <p className="movie-plot">{Plot}</p>
        <div style={{ height: 28 }}></div>
        <div className="movie-ratings-btn">
          <p className="movie-rating">{Ratings}</p>
          <button id="favourite-btn">Favourite</button>
        </div>
      </div>
    </div>
  );
}

export default MovieCard;
