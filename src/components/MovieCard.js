import React from "react";

function MovieCard(props) {
  let { Poster, Title, Year, Genre, Plot, Ratings } = props.movie;
  Ratings = Ratings[0].Value.slice(0, Ratings[0].Value.search("/"));
  console.log("RENDER: MOVIE CARD");
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
          {!props.isFav ? (
            <button
              onClick={() => props.addToFavHandler(props.movie)}
              className="movie-btn fav"
            >
              Favourite
            </button>
          ) : (
            <button
              onClick={() => props.deleteFromFavHandler(props.movie)}
              className="movie-btn unfav"
            >
              Unfavourite
            </button>
          )}
        </div>
      </div>
    </div>
  );
}

export default MovieCard;
